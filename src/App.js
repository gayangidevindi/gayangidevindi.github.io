import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import PortfolioLoader from './components/PortfolioLoader';

function App() {
  return (
    <div className="App">
      <PortfolioLoader />
      <Header />

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
