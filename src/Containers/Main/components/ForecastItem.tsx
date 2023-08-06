import ItemTemp from './ItemTemp';
import moment from 'moment';
import { icons } from '../../../utilities/weatherIcons';
import { ForecastType } from '../../../types';
import { useState } from 'react';
import HourlyForecast from '../features/HourlyForecast';
import { motion } from 'framer-motion';
import { divVariants } from '../../../utilities/framer';
import HourIcon from '../../../assets/HourIcon';

type propsType = {
  day: string;
  temps: {
    min: number;
    max: number;
  };
  icon: number;
  wholeDay: ForecastType[];
};

const ForecastItem = ({ day, temps, icon, wholeDay }: propsType) => {
  const [showHours, setshowHours] = useState(false);
  const dat = moment(day).format('dddd').substring(0, 3);

  let content;
  if (showHours) {
    content = <HourlyForecast day={wholeDay} />;
  } else {
    content = (
      <motion.div
        variants={divVariants}
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        className='flex flex-col items-center  justify-evenly bg-white dark:bg-slate-800  dark:shadow-slate-800 transition-colors duration-500'
      >
        <p className='font-bold text-xl md:text-2xl dark:text-slate-100'>
          {dat}
        </p>
        <img
          src={`/icons/svg/${icons.get(icon)}.svg`}
          className='w-20 lg:w-22'
          alt=''
        />
        <ItemTemp min={temps.min} max={temps.max} />
      </motion.div>
    );
  }

  return (
    <li className='px-6 py-4 relative shadow-lg rounded-xl bg-white flex flex-col items-center  justify-evenly dark:bg-slate-800  dark:shadow-slate-800 transition-colors duration-500  '>
      <button
        className='absolute right-1 top-1 dark:text-white w-6 h-6 hover:scale-105 transition-transform duration-500'
        onClick={() => {
          setshowHours((prev) => !prev);
        }}
      >
        <HourIcon />
      </button>
      {content}
    </li>
  );
};

export default ForecastItem;
