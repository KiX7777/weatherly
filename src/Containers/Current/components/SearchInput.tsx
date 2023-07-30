import React, { forwardRef } from 'react';

const SearchInput = forwardRef(
  (
    { handleChange }: { handleChange: (query: string) => void },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    let timer: ReturnType<typeof setTimeout>;
    const handleInput = (): void => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (ref && 'current' in ref) {
          if (ref.current !== null) {
            handleChange(ref.current.value as string);
          }
        }
      }, 300);
    };

    return (
      <input
        ref={ref}
        onChange={handleInput}
        className='flex-1 rounded-xl p-3 w-full text-xl dark:text-slate-100 dark:bg-slate-900 dark:border-slate-400 dark:border-2 transition-colors duration-500 '
        placeholder={'Search for places...'}
      />
    );
  }
);

export default SearchInput;
