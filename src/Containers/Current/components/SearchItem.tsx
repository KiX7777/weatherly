import { observer } from 'mobx-react';
import React from 'react';
import { useRootStore } from '../../../Stores/StoreProvider';

const SearchItem = observer(
  ({
    children,
    coords,
  }: {
    children: React.ReactNode;
    coords: { lat: number; lon: number };
  }) => {
    const store = useRootStore().mainStore;
    const handleClick = () => {
      store.setUserCoords({ latitude: coords.lat, longitude: coords.lon });
      store.setSearching(false);
      store.setSearch('');
    };

    return (
      <li
        onClick={handleClick}
        className='whitespace-pre p-4 border-b-gray-300 cursor-pointer dark:text-slate-100 hover:bg-slate-400 dark:hover:bg-slate-700 transition-colors duration-300 rounded-xl'
      >
        {children}
      </li>
    );
  }
);

export default SearchItem;
