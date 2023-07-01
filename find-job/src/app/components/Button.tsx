import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & JSX.IntrinsicElements['button'];

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${className} text-xs px-5 py-2 bg-white text-primary rounded-full tracking-wide mx-auto mt-10 hover:opacity-80 transition-opacity duration-500 ease-out`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

