const Visibility = ({ visibility }: { visibility: number }) => {
  const vis = visibility > 999 ? `${visibility / 1000} km` : `${visibility} m`;

  return (
    <div className='rounded-xl shadow-lg bg-white  w-full grid items-center justify-center  p-2 dark:bg-slate-800  dark:shadow-slate-800 '>
      <p className='text-gray-400 text-xl text-center self-baseline dark:text-white'>
        Visibility
      </p>
      <p className='text-4xl self-baseline dark:text-white'>{vis}</p>
    </div>
  );
};

export default Visibility;
