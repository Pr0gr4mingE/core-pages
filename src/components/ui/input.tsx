import React, { InputHTMLAttributes } from 'react';

// Usar 'type' ao invés de 'interface' resolve o erro de chaves vazias
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white w-full transition-colors ${className}`}
      {...props}
    />
  );
};