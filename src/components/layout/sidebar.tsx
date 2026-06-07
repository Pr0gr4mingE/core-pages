import React from 'react';
import { SidebarProps } from '@/shared/types/domain/layout';
import { resolveColor } from '@/shared/types/domain/ui_component_colors';

export const Sidebar: React.FC<SidebarProps> = ({ setColor, colorKey, setLogo, setSubtitle, setNavMenu, setText }) => {
  const bgColorClass = resolveColor(setColor, colorKey);

  return (
    <aside className={`${bgColorClass} w-64 min-h-screen p-4 flex flex-col gap-6 shadow-lg`}>
      {setLogo && <div className="text-2xl font-black mb-4">CoreLogo</div>}
      
      {setNavMenu && (
        <nav className="flex flex-col gap-2">
          <a href="#" className="p-2 hover:bg-white/10 rounded">Minhas Páginas</a>
          <a href="#" className="p-2 hover:bg-white/10 rounded">Páginas Recentes</a>
        </nav>
      )}

      {setSubtitle && <h3 className="text-sm font-semibold uppercase opacity-70 mt-4">Informações</h3>}
      {setText && <p className="text-xs opacity-80">Navegue pelas suas páginas criadas na plataforma.</p>}
    </aside>
  );
};