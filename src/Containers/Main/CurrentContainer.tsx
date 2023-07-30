import { observer } from 'mobx-react';
// import { getCurrentWeather } from '../../services/weatherAPI';
import { useQuery } from '@tanstack/react-query';
import { useRootStore } from '../../Stores/StoreProvider';
import { coords } from '../../Stores/MainStore';
import Search from '../Current/features/Search';

import BasicInfo from '../Current/features/BasicInfo';
import CurrentWeatherIcon from '../Current/features/CurrentWeatherIcon';
import Loader from '../components/Loader';

const CurrentContainer = observer(() => {
  const store = useRootStore().mainStore;
  const { isLoading, error, data } = useQuery({
    queryKey: ['current', store.coords, store.unit],
    retryDelay: 50,
    staleTime: 60 * 1000 * 60,
    queryFn: () =>
      store.HTTPService.getCurrentWeather(store.coords as coords, store.unit),
    enabled: store.coords !== null,
  });

  if (error) return <h1>Error</h1>;
  console.log(data);

  return (
    <section className='bg-white rounded-3xl p-8 flex flex-col items-center dark:bg-slate-900 transition-colors duration-500 '>
      <Search />
      {isLoading ? null : <CurrentWeatherIcon code={data!.weather[0].id} />}
      {isLoading ? (
        <Loader />
      ) : (
        <BasicInfo
          temp={data?.main.temp as number}
          code={data!.sys.country}
          city={data!.name}
        />
      )}
    </section>
  );
});

export default CurrentContainer;
