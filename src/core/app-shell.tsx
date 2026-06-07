import React from 'react';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { Footer } from '@/components/layout/footer';
import { PageConfig } from '@/shared/types/domain/page';

interface AppShellProps {
  config: PageConfig;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ config, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar na esquerda */}
      <Sidebar {...config.sidebarConfig} />
      
      {/* Conteúdo principal na direita */}
      <div className="flex flex-col flex-1 w-full">
        <Header {...config.headerConfig} />
        
        {/* Main Content (onde as props de UI e Cards vão entrar no futuro) */}
        <main className="flex-1 p-8">
          {children}
        </main>
        
        <Footer {...config.footerConfig} />
      </div>
    </div>
  );
};