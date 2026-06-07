import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-400">CorePages</h1>
        <p className="text-gray-400 text-center mb-6">Crie sua estrutura padrão em minutos.</p>
        
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Nome" 
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded mt-2 transition-colors">
            Cadastrar e Entrar
          </button>
        </form>
      </div>
    </div>
  );
}