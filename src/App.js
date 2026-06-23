import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutInD from './pages/AboutInD';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutind" element={<AboutInD />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={
              <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0f] min-h-screen flex items-center justify-center">
                <div className="max-w-2xl mx-auto text-center">
                  <h1 className="text-5xl font-bold text-white mb-4">Page Not Found</h1>
                  <p className="text-slate-400 mb-8 text-lg">Sorry, the page you're looking for doesn't exist.</p>
                  <a href="#/" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all">
                    Go to Home
                  </a>
                </div>
              </section>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
