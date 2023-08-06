import { observer } from 'mobx-react';
import React, { forwardRef } from 'react';
import { useRootStore } from '../../../Stores/StoreProvider';

const SI = forwardRef(
  (
    { handleChange }: { handleChange: (query: string) => void },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const store = useRootStore().mainStore;

    let timer: ReturnType<typeof setTimeout>;
    const handleInput = (): void => {
      clearTimeout(timer);
      store.setTyping(true);
      timer = setTimeout(() => {
        if (ref && 'current' in ref) {
          if (ref.current !== null) {
            handleChange(ref.current.value as string);
            store.setTyping(false);
          }
        }
      }, 300);
    };

    return (
      <input
        ref={ref}
        onChange={handleInput}
        className='flex-1 rounded-xl p-3 w-full text-xl dark:text-slate-100 dark:bg-slate-900 dark:border-slate-400 dark:border-2 transition-colors duration-500 '
        placeholder={'Search for places...'}
      />
    );
  }
);

const SearchInput = observer(SI);

export default SearchInput;
