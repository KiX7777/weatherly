import currentTime from '../../../utilities/currentTime';

const Time = () => {
  const time = currentTime();
  return (
    <p className='text-gray-500 text-lg '>
      <span className='font-bold text-black dark:text-slate-100'>
        {time.day}
      </span>
      , {time.time}
    </p>
  );
};

export default Time;
