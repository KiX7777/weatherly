import { observer } from 'mobx-react';

import { useRootStore } from '../../../../Stores/StoreProvider';

const Wind = observer(({ wind }: { wind: number }) => {
  const unit = useRootStore().mainStore.unit;
  return (
    <div className='rounded-xl shadow-lg bg-white  w-full  grid items-center p-2 dark:bg-slate-800  dark:shadow-slate-800  '>
      <p className='text-gray-400 text-xl self-baseline text-center dark:text-white'>
        Wind Status
      </p>
      <div className='flex flex-col items-center self-baseline'>
        <p className='text-4xl  text-center dark:text-white'>
          {wind}
          <span className='text-2xl'>{unit === 'c' ? 'km/h' : 'mph'}</span>
        </p>
        <img src='/icons/svg/wind.svg' className='w-16' alt='wind' />
      </div>
    </div>
  );
});

export default Wind;
