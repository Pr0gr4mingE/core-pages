import React from 'react';
import { mockedPages } from '@/infrastructure/persistence/my_pages/list_pages_mocks';
import { AppShell } from '@/core/app-shell';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const homeShellConfig = mockedPages[0];

export default function HomeDashboard() {
  return (
    <AppShell config={homeShellConfig}>
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Suas Páginas Recentes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockedPages.map((page) => (
          <Card key={page.id}>
            <CardTitle>{page.title}</CardTitle>
            <CardContent>Slug: /{page.slug}</CardContent>
            
            {/* Reaproveitamos o botão aqui também! */}
            <Button variant="secondary" size="sm">
              Editar Página
            </Button>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}