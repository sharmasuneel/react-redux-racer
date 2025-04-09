
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 mb-8">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          React Redux Toolkit
        </h1>
        <p className="text-center text-muted-foreground mt-2">
          A modern approach to state management
        </p>
      </div>
    </header>
  );
};

export default Header;
