import moment from 'moment';

const Sunset_Rise = ({
  sunrise,
  sunset,
  timezone,
}: {
  sunrise: number;
  sunset: number;
  timezone: number;
}) => {
  //sunrise time from the api minus the timezone difference minus 2 hours (+2 UTC)
  const srise = moment.unix(sunrise + timezone - 7200).format('HH:mm');
  const sset = moment.unix(sunset + timezone - 7200).format('HH:mm');

  return (
    <div className='rounded-xl shadow-lg bg-white  w-full  p-2 grid   dark:bg-slate-800 dark:shadow-slate-800'>
      <p className='text-gray-400 text-xl  text-center self-baseline dark:text-white'>
        Sunrise & Sunset
      </p>
      <div className='flex flex-col self-baseline'>
        <div className='flex items-center justify-evenly flex-1  '>
          <img
            src='/icons/svg/sunrise.svg'
            className='w-[70px]'
            alt='sunrise'
          />
          <p className='text-xl dark:text-white'>{srise}</p>
        </div>
        <div className='flex items-center justify-evenly flex-1'>
          <img src='/icons/svg/sunset.svg' className='w-[70px]' alt='sunset' />
          <p className='text-xl dark:text-white'>{sset}</p>
        </div>
      </div>
    </div>
  );
};

export default Sunset_Rise;
