
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Bio />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default App;
