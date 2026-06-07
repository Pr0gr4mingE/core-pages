"use client";

import { FormEvent, useState } from 'react'; // Adicionamos o useState aqui
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  // 1. Aqui estão os hooks da tela de cadastro!
  const [nome, setNome] = useState('Vitor');
  const [email, setEmail] = useState('vitor@email.com');
  const [senha, setSenha] = useState('123');

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    // 2. Agora você tem acesso ao que o usuário digitou!
    console.log("Tentando logar com:", { nome, email, senha });
    
    // Redireciona para o painel
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-400">CorePages</h1>
        <p className="text-gray-400 text-center mb-6">Crie sua estrutura padrão em minutos.</p>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Nome" 
            value={nome} // Mudamos de defaultValue para value
            onChange={(e) => setNome(e.target.value)} // O hook captura a mudança
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded mt-2 transition-colors"
          >
            Cadastrar e Entrar
          </button>
        </form>
      </div>
    </div>
  );
}