
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AreasPage from './pages/AreasPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <CustomCursor />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/atuacao" element={<AreasPage />} />
              <Route path="/agendamento" element={<SchedulePage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
          <FloatingWhatsAppButton />
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;