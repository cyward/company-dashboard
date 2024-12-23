import { ReactNode } from 'react';
import { Navbar } from '../common/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}; 