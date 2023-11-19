import Wind from './components/Wind';
import { useRootStore } from '../../../Stores/StoreProvider';
import { useQuery } from '@tanstack/react-query';
import { coords } from '../../../Stores/MainStore';
import Sunset_Rise from './components/Sunset_Rise';
import Humidity from './components/Humidity';
import Visibility from './components/Visibility';
import Loader from '../../components/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import { divVariants } from '../../../utilities/framer';
import Rain from './components/Rain';

const Highlights = () => {
  const store = useRootStore().mainStore;
  const { isLoading, data, error } = useQuery({
    queryKey: ['current', store.coords, store.unit],
    retryDelay: 50,
    staleTime: 60 * 1000 * 60,
    queryFn: () =>
      store.HTTPService.getCurrentWeather(store.coords as coords, store.unit),
    enabled: store.coords !== null,
  });
  if (isLoading) return <Loader />;
  if (error) return <p>Error getting the forecast...</p>;

  return !data ? null : (
    <AnimatePresence>
      <motion.section
        variants={divVariants}
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        className='flex flex-col gap-8 flex-1 overflow-auto'
      >
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 auto-rows-[95%] md:auto-rows-[45%] w-full flex-1 mt-4 content-between overflow-auto pb-4'>
          <Wind wind={data.data!.wind.speed} />
          <Sunset_Rise
            sunrise={data.data!.sys.sunrise}
            sunset={data.data!.sys.sunset}
            timezone={data.data!.timezone}
          />
          <Humidity humidity={data.data!.main.humidity} />
          <Visibility visibility={data.data!.visibility} />
          {data.data?.rain && <Rain rain={data.data.rain['1h'] as number} />}
        </ul>
      </motion.section>
    </AnimatePresence>
  );
};

export default Highlights;
