import ItemTemp from './ItemTemp';
import moment from 'moment';
import { icons } from '../../../utilities/weatherIcons';

type propsType = {
  day: string;
  temps: {
    min: number;
    max: number;
  };
  icon: number;
};

const ForecastItem = ({ day, temps, icon }: propsType) => {
  const dat = moment(day).format('dddd').substring(0, 3);
  return (
    <li className='px-6 py-4 shadow-lg rounded-xl bg-white flex flex-col items-center  justify-evenly dark:bg-slate-800  dark:shadow-slate-800 transition-colors duration-500  '>
      <p className='font-bold text-xl md:text-2xl dark:text-slate-100'>{dat}</p>
      <img
        src={`/icons/svg/${icons.get(icon)}.svg`}
        className='w-20 lg:w-22'
        alt=''
      />
      <ItemTemp min={temps.min} max={temps.max} />
    </li>
  );
};

export default ForecastItem;
