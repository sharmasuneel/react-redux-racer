
import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white">
        <div className="container py-4">
          <Link to="/dashboard" className="text-2xl font-bold text-primary">
            ParticipantsHub
          </Link>
        </div>
      </header>
      
      <main>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
