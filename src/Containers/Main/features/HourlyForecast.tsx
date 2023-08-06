import { Component } from 'react';
import { ForecastType } from '../../../types';
import HourlyForecastCard from './components/HourlyForecastCard';
import { AnimatePresence, motion } from 'framer-motion';
import { divVariants } from '../../../utilities/framer';

type Prop = {
  day: ForecastType[];
};

export default class HourlyForecast extends Component<Prop> {
  constructor(props: Prop) {
    super(props);
  }

  cards = this.props.day.map((d) => (
    <HourlyForecastCard day={d} key={d.dt_txt} />
  ));

  render() {
    return (
      <AnimatePresence>
        <motion.ul
          variants={divVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          className='flex flex-col w-full  overflow-auto h-full  gap-3 mt-5 hourlyList'
        >
          {this.cards}
        </motion.ul>
      </AnimatePresence>
    );
  }
}
