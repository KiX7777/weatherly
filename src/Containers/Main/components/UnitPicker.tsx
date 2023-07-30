const UnitPicker = ({
  unit,
  setUnit,
}: {
  unit: 'c' | 'f';
  setUnit: (unit: 'c' | 'f') => void;
}) => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <button
        onClick={() => setUnit('c')}
        className={`${
          unit == 'c'
            ? 'text-white bg-gray-900 dark:bg-slate-100 dark:text-black'
            : 'bg-white text-black dark:bg-slate-800 dark:text-slate-100'
        } rounded-full w-8 h-8 transition-colors duration-300 text-l text-slate-900 ${
          unit === 'c' && 'text-white bg-gray-900  '
        } ${unit === 'f' && 'hover:bg-orange-400'} `}
      >
        ℃
      </button>
      <button
        onClick={() => setUnit('f')}
        className={` ${
          unit == 'f'
            ? 'text-white bg-gray-900 dark:bg-slate-100 dark:text-black'
            : 'bg-white text-black dark:bg-slate-800 dark:text-slate-100'
        } rounded-full w-8 h-8 transition-colors duration-300 text-l text-slate-900  ${
          unit === 'c' && 'hover:bg-orange-400  '
        }`}
      >
        ℉
      </button>
    </div>
  );
};

export default UnitPicker;
