import React from 'react';
import Navigation from './navigatin';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto p-8 text-center">
        <Navigation />
      </div>
    </header>
  );
}
