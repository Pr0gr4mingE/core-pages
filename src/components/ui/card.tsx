import React from 'react';

// Card Principal (O contêiner com borda)
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`border rounded-lg p-6 bg-white shadow hover:shadow-md transition duration-200 ${className}`}>
      {children}
    </div>
  );
};

// Título do Card
export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <h3 className={`font-bold text-lg mb-2 text-gray-900 ${className}`}>
      {children}
    </h3>
  );
};

// Conteúdo de texto do Card
export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <p className={`text-gray-500 mb-4 ${className}`}>
      {children}
    </p>
  );
};