import type { ReactNode } from 'react';
import Magnetic from './Magnetic';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: boolean;
}

export function PrimaryButton({ children, href, onClick, icon = true }: ButtonProps) {
  const content = (
    <span className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric via-violet to-cyan px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-void shadow-glow transition-transform duration-300 hover:scale-[1.03] sm:px-8 sm:py-4">
      {children}
      {icon && <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </span>
  );

  return (
    <Magnetic strength={6}>
      {href ? (
        <a href={href} onClick={onClick}>
          {content}
        </a>
      ) : (
        <button onClick={onClick}>{content}</button>
      )}
    </Magnetic>
  );
}

export function GhostButton({ children, href, onClick }: ButtonProps) {
  const content = (
    <span className="inline-flex items-center gap-2 rounded-full border border-offwhite/25 px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-offwhite transition-colors duration-300 hover:bg-offwhite/10 sm:px-8 sm:py-4">
      {children}
    </span>
  );

  return (
    <Magnetic strength={8}>
      {href ? (
        <a href={href} onClick={onClick}>
          {content}
        </a>
      ) : (
        <button onClick={onClick}>{content}</button>
      )}
    </Magnetic>
  );
}
