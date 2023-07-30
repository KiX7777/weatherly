const Humidity = ({ humidity }: { humidity: number }) => {
  return (
    <div className='rounded-xl shadow-lg bg-white  w-full  grid items-center justify-center  p-2  dark:bg-slate-800 dark:shadow-slate-800 '>
      <p className='text-gray-400 text-xl text-center self-baseline dark:text-slate-100 '>
        Humidity
      </p>
      <div className='flex flex-col items-center justify-center '>
        <p className='text-4xl dark:text-slate-100 '>{humidity}</p>
        <img src='/icons/svg/humidity.svg' alt='humidity' className='' />
      </div>
    </div>
  );
};

export default Humidity;
