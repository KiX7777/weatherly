import { observer } from 'mobx-react';
import { useRootStore } from '../Stores/StoreProvider';
import MainContainer from '../UI/Layout';

const Home = observer(() => {
  const store = useRootStore().mainStore;

  store.getLocation();

  return (
    <div className='w-screen   bg-zinc-400 dark:bg-gray-900 h-screen p-6 lg:p-10 xl:p-12 flex  justify-center transition-colors duration-500 '>
      <MainContainer />
    </div>
  );
});

export default Home;
