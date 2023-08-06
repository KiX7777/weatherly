import React from 'react';

const Button = ({
  children,
  onClick,
}: {
  children: string | React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      type='submit'
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='cursor-pointer p-2 bg-white dark:bg-slate-900 dark:text-slate-100 transition-colors duration-500 '
    >
      {children}
    </button>
  );
};

export default Button;
