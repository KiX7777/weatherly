import { useRef } from 'react';
import SearchInput from '../components/SearchInput';
import SearchIcon from '../../../assets/SearchIcon';
import Button from '../../components/Button';

import { useQuery } from '@tanstack/react-query';
import SearchResults from '../components/SearchResults';
import { observer } from 'mobx-react';
import { useRootStore } from '../../../Stores/StoreProvider';

const Search = observer(() => {
  const store = useRootStore().mainStore;
  const { status, data, refetch } = useQuery({
    queryKey: ['search', store.search],
    staleTime: 86400000,
    enabled: false,
    queryFn: () => store.HTTPService.getCoordsFromName(store.search),
  });
  const handleInput = (query: string) => {
    store.setSearch(query);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex justify-between rounded-xl flex-col gap-3 relative'>
      <form
        className='flex justify-between rounded- gap-1'
        onSubmit={handleSubmit}
      >
        <SearchInput handleChange={handleInput} ref={inputRef} />
        <Button
          onClick={() => {
            if (!inputRef.current?.value || store.typing) {
              return;
            }
            refetch();
            store.setSearching(true);
            inputRef.current!.value = '';
          }}
        >
          <SearchIcon />
        </Button>
      </form>
      {status === 'success' && data && store.searching && (
        <SearchResults data={data} />
      )}
      {status === 'error' && <p>There has been an error</p>}
    </div>
  );
});

export default Search;
