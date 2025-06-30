import React from 'react';
import { Headphones } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Headphones className="h-8 w-8 text-primary-600" />
            <h1 className="text-xl font-bold text-gray-900">Podcast Manager</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Episódios
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
