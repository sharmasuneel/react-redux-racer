
import React from 'react';
import Header from '@/components/Header';
import Counter from '@/components/Counter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-background to-muted/30">
      <Header />
      <main className="container py-8">
        <div className="flex flex-col items-center justify-center">
          <Counter />
        </div>
      </main>
    </div>
  );
};

export default Index;
