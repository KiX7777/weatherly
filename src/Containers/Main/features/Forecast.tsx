import { observer } from 'mobx-react';
import ForecastItem from '../components/ForecastItem';
import { useQuery } from '@tanstack/react-query';
import { useRootStore } from '../../../Stores/StoreProvider';
import _ from 'lodash';
import moment from 'moment';
import { ForecastType } from '../../../types';
import Loader from '../../components/Loader';
import { AnimatePresence, motion } from 'framer-motion';

import { divVariants } from '../../../utilities/framer';

const Forecast = observer(() => {
  const store = useRootStore().mainStore;

  const { status, data } = useQuery({
    queryKey: ['forecast', store.coords, store.unit],
    enabled: !!store.coords,
    staleTime: 86400000,
    queryFn: () => store.HTTPService.getForecast(store.coords, store.unit),
  });

  // console.log(
  //   // date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' })
  //   date.getHours()
  // );
  const grouped = _.groupBy(data, (data) => moment(data.dt_txt).weekday());
  console.log(grouped);
  const days = Object.values(grouped).map((day) => {
    const min = day.reduce((previous, current) => {
      return current.main.temp_min < previous.main.temp_min
        ? current
        : previous;
    });
    const max = day.reduce((previous, current) => {
      return current.main.temp_min > previous.main.temp_min
        ? current
        : previous;
    });
    interface forecastType {
      min: number;
      max: number;
      day: string;
      icon: number;
    }

    //checking if it is the same day as today; in case the forecast is requested in the middle of the day

    const sameDay =
      moment(moment.now()).weekday() === moment(day[0].dt_txt).weekday();

    //checking if there is index 4 in array, that is NOON and we want to display that temp as day's temp
    //if there is not 4, then go minus 1 and choose that one
    function findIndexInArray(arr: ForecastType[], startingIndex: number) {
      let index = startingIndex;
      while (index >= 0) {
        if (arr[index] !== undefined) {
          return index;
        }
        index--;
      }
      return 0;
    }

    if (sameDay) {
      return null;
    } else {
      const index = findIndexInArray(day, 4);
      const forecast: forecastType = {
        min: min.main.temp_min,
        max: max.main.temp_max,
        day: day[0].dt_txt,
        icon: day[index].weather[0].id,
      };
      return forecast;
    }
  });

  if (status === 'loading') return <Loader />;
  if (status === 'error') return <p>Error getting the forecast...</p>;

  return (
    <AnimatePresence>
      <motion.section
        variants={divVariants}
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        className=' snap-mandatory snap-x  flex overflow-auto md:w-full flex-col flex-1 p-2'
      >
        <h4 className='text-2xl dark:text-slate-100'>5-day forecast</h4>
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 auto-rows-[100%] md:auto-rows-[45%] w-full flex-1 mt-4 content-between overflow-auto pb-2'>
          {days?.map((d) => {
            return !d ? null : (
              <ForecastItem
                key={d.day}
                day={d.day}
                temps={{ min: d.min, max: d.max }}
                icon={d.icon}
              />
            );
          })}
        </ul>
      </motion.section>
    </AnimatePresence>
  );
});

export default Forecast;
