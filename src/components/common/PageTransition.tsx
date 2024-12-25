import { ReactNode } from 'react';
import { usePageTransition } from '../../hooks/usePageTransition';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const isTransitioning = usePageTransition();

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isTransitioning ? 'page-enter' : 'page-enter-active'
      }`}
    >
      {children}
    </div>
  );
}; 