import { observer } from 'mobx-react';
import { useRootStore } from '../../Stores/StoreProvider';
import { useQuery } from '@tanstack/react-query';
import Header from './components/Header';
import { Suspense, lazy } from 'react';
const Forecast = lazy(() => import('./features/Forecast'));
import Highlights from './features/Highlights';
import Loader from '../components/Loader';
const MainContainer = observer(() => {
  const store = useRootStore().mainStore;

  const { error } = useQuery({
    queryKey: ['current', store.coords, store.unit],
    retryDelay: 50,

    staleTime: 60 * 1000 * 60,
    queryFn: () => store.HTTPService.getCurrentWeather,
    enabled: !!store.coords,
  });

  if (error) return <h1>Error</h1>;

  return (
    <section className=' rounded-3xl p-4 sm:p-8 overflow-hidden flex flex-col transition-colors duration-500 gap-4 relative  '>
      <Header />

      {store.mode === 'forecast' && (
        <Suspense fallback={<Loader />}>
          <Forecast />
        </Suspense>
      )}
      {store.mode === 'today' && <Highlights />}
    </section>
  );
});

export default MainContainer;
