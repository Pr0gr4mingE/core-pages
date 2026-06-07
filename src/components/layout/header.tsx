import React from 'react';
import { HeaderProps } from '@/shared/types/domain/layout';
import { resolveColor } from '@/shared/types/domain/ui_component_colors';

export const Header: React.FC<HeaderProps> = ({ setColor, colorKey, setLogo, setTitle, setNavMenu }) => {
  const bgColorClass = resolveColor(setColor, colorKey);

  return (
    <header className={`${bgColorClass} p-4 flex justify-between items-center shadow-md`}>
      <div className="flex items-center gap-4">
        {setLogo && <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">Logotipo</div>}
        {setTitle && <h1 className="text-xl font-bold">Título da Página</h1>}
      </div>
      
      {setNavMenu && (
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">Início</a>
          <a href="#" className="hover:underline">Sobre</a>
        </nav>
      )}
    </header>
  );
};