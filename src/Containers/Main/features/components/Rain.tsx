const Rain = ({ rain }: { rain: number }) => {
  return (
    <div className='rounded-xl shadow-lg bg-white  w-full  grid items-center justify-center  p-2  dark:bg-slate-800 dark:shadow-slate-800 '>
      <p className='text-gray-400 text-xl text-center self-baseline dark:text-slate-100 '>
        Precipitation
        <br />
        <small>Last hour</small>
      </p>
      <div className='flex flex-col items-center justify-center self-baseline '>
        <p className='text-4xl dark:text-slate-100 '>{rain} mm</p>
        <img
          src='/icons/svg/raindrop-measure.svg'
          alt='rain'
          className='w-16 lg:w-24'
        />
      </div>
    </div>
  );
};

export default Rain;
