const ItemTemp = ({ min, max }: { min: number; max: number }) => {
  return (
    <div className='flex gap-1 '>
      <p className='font-bold text-2xl  dark:text-slate-100'>
        {max.toFixed(1)} &deg;
      </p>
      <p className='text-gray-400 text-2xl '>{min.toFixed(1)} &deg;</p>
    </div>
  );
};

export default ItemTemp;
