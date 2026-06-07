import React from 'react';
import { mockedPages } from '@/infrastructure/persistence/my_pages/list_pages_mocks';
import { AppShell } from '@/core/app-shell';

export default function MyCustomPage() {
  // Em um cenário real, você pegaria o ID ou Slug da URL e buscaria no banco de dados.
  // Aqui estamos pegando a configuração da "página 2" (Blog de Tecnologia)
  const myPageConfig = mockedPages[1];

  return (
    <AppShell config={myPageConfig}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-4">Bem-vindo ao {myPageConfig.title}!</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Esta página está sendo renderizada dentro do AppShell. Note que as cores do Cabeçalho, 
          Rodapé e Sidebar foram injetadas dinamicamente via props configuradas no banco de dados, 
          seguindo exatamente as restrições definidas em `components_ui.ts`.
        </p>
        
        {/* Aqui entrariam futuramente os Cards e Textos que o usuário adicionar */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-dashed border-gray-400 text-center">
          <p className="text-gray-500 italic">+ Adicionar novo Bloco de Conteúdo (Cards/Textos)</p>
        </div>
      </div>
    </AppShell>
  );
}