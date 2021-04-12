import React from 'react';

export const Footer: React.FC = ({ children }) => (
  <div className="absolute w-full bottom-5 flex flex-row justify-center">{children}</div>
);

export const Submit: React.FC<{ type?: 'submit' | 'button' | 'reset'; onClick?: (e: any) => void }> = ({
  children,
  ...props
}) => (
  <button
    type="submit"
    className="bg-blue-400 h-10 w-32 text-white rounded-lg hover:bg-blue-100 transition duration-150 disabled:opacity-20 disabled:bg-blue-400"
    {...props}
  >
    {children || 'Next Course'}
  </button>
);
