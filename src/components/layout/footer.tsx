import React from 'react';
import { FooterProps } from '@/shared/types/domain/layout';
import { resolveColor } from '@/shared/types/domain/ui_component_colors';

export const Footer: React.FC<FooterProps> = ({ setColor, colorKey, setSubtitle, setText }) => {
  const bgColorClass = resolveColor(setColor, colorKey);

  return (
    <footer className={`${bgColorClass} p-6 text-center mt-auto`}>
      {setSubtitle && <h4 className="font-bold mb-2">CorePages - O seu construtor</h4>}
      {setText && <p className="text-sm opacity-80">© 2026 CorePages. Todos os direitos reservados.</p>}
    </footer>
  );
};