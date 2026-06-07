import React from 'react';
import { mockedPages } from '@/infrastructure/persistence/my_pages/list_pages_mocks';
import { AppShell } from '@/core/app-shell';

// Usamos o config da primeira página mockada apenas para estilizar a própria Home
const homeShellConfig = mockedPages[0];

export default function HomeDashboard() {
  return (
    <AppShell config={homeShellConfig}>
      <h2 className="text-2xl font-bold mb-6">Suas Páginas Recentes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockedPages.map((page) => (
          <div key={page.id} className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2">{page.title}</h3>
            <p className="text-gray-500 mb-4">Slug: /{page.slug}</p>
            <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
              Editar Página
            </button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}