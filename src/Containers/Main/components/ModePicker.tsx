const ModePicker = ({
  mode,
  setMode,
}: {
  mode: 'today' | 'forecast';
  setMode: (mode: 'today' | 'forecast') => void;
}) => {
  return (
    <div className='flex items-center justify-center gap-5'>
      <button
        onClick={() => setMode('today')}
        className={`transition-colors duration-300 text-xl text-slate-500 dark:hover:text-orange-300 hover:text-slate-800 border-none ${
          mode == 'today' &&
          'text-slate-900 border-b-slate-700 border-2  dark:text-gray-100'
        }`}
      >
        Today
      </button>
      <button
        onClick={() => setMode('forecast')}
        className={` transition-colors duration-300 text-xl text-slate-500 dark:hover:text-orange-300 hover:text-slate-800 border-none ${
          mode == 'forecast' &&
          'text-slate-900 border-b-slate-700 border-2 dark:text-gray-100  '
        }`}
      >
        Forecast
      </button>
    </div>
  );
};

export default ModePicker;
