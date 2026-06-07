import React from 'react';
import Link from 'next/link';
import { mockedPages } from '@/infrastructure/persistence/my_pages/list_pages_mocks';
import { AppShell } from '@/core/app-shell';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const homeShellConfig = mockedPages[0];

export default function HomeDashboard() {
  return (
    <AppShell config={homeShellConfig}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Suas Páginas Recentes</h2>
        <Link href="/">
          <Button variant="danger" size="sm">
            Sair da Conta
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockedPages.map((page) => (
          <Card key={page.id} className="flex flex-col h-full">
            <CardTitle>{page.title}</CardTitle>
            <CardContent className="flex-1">Slug: /{page.slug}</CardContent>
            
            <Link href={`/${page.slug}`} className="mt-auto">
              <Button variant="secondary" size="sm" className="w-full">
                Acessar Página
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}