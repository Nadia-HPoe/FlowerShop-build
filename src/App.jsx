import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './pages/Footer';
import { Home } from './pages/Main';
import './assets/styles/global.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export { App };
