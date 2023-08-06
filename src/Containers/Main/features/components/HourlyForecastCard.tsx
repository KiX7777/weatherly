import { Component } from 'react';
import { ForecastType } from '../../../../types';
import { icons } from '../../../../utilities/weatherIcons';

export default class HourlyForecastCard extends Component<{
  day: ForecastType;
}> {
  constructor(props: { day: ForecastType }) {
    super(props);
  }
  render() {
    return (
      <div className='shadow-xl  bg-slate-600 rounded-xl p-5 max-h-10 flex justify-between items-center overscroll-x-auto'>
        <p className='text-white font-bold'>
          {this.props.day.dt_txt.substring(11, 16)}
        </p>
        <img
          src={`/icons/svg/${icons.get(this.props.day.weather[0].id)}.svg`}
          className='w-10 lg:w-10'
          alt='weather icon'
        />
        <p className='text-white'>{this.props.day.main.temp.toFixed(1)}&deg;</p>
      </div>
    );
  }
}
