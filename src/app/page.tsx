"use client";

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LandingPage() {
  const router = useRouter();

  const [nome, setNome] = useState('Vitor');
  const [email, setEmail] = useState('vitor@email.com');
  const [senha, setSenha] = useState('123');

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-400">CorePages</h1>
        <p className="text-gray-400 text-center mb-6">Crie sua estrutura padrão em minutos.</p>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input 
            type="text" 
            placeholder="Nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
          <Input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button type="submit" variant="primary" size="md" className="mt-2">
            Cadastrar e Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}