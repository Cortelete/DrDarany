import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const XIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const SunIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);

const MoonIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { to: '/', text: 'Início' },
    { to: '/sobre', text: 'Sobre' },
    { to: '/atuacao', text: 'Atuação' },
    { to: '/blog', text: 'Artigos' },
    { to: '/contato', text: 'Contato' },
  ];

  const activeLinkClass = 'text-brand-gold';
  const inactiveLinkClass = 'hover:text-brand-gold transition-colors duration-300';

  const NavLinksComponent = ({onClick} : {onClick?: () => void}) => (
    <>
        {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClick}
              end
              className={({ isActive }) =>
                `${isActive ? activeLinkClass : inactiveLinkClass} py-2 uppercase font-semibold tracking-wider text-xs`
              }
            >
              {link.text}
            </NavLink>
        ))}
        <NavLink
            to="/agendamento"
            onClick={onClick}
            className="btn-primary ml-0 lg:ml-4 mt-4 lg:mt-0"
        >
            Agendar Consulta
        </NavLink>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-light/90 dark:bg-brand-gray/90 backdrop-blur-md shadow-lg text-brand-text-dark dark:text-brand-text-light">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
            <img 
                src="/images/logoDrD.png" 
                alt="Logo Darany Advocacia" 
                className="h-12 w-12 object-contain dark:mix-blend-screen"
            />
            <span className="hidden sm:block text-sm md:text-lg font-sans font-bold text-brand-text-dark dark:text-brand-text-light tracking-wider transition-all duration-300 group-hover:text-brand-gold">
              DARANY LUIZ ALVES DE OLIVEIRA
            </span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
            <NavLinksComponent />
        </nav>
        <div className="flex items-center">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5"/> : <SunIcon className="w-5 h-5"/>}
            </button>

            {!isMenuOpen && (
              <div className="lg:hidden flex items-center pointer-events-none animate-nudge-right mr-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-gold-gradient whitespace-nowrap">SAIBA MAIS AQUI</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            )}

            <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <XIcon className="h-6 w-6" />
                 ) : (
                    <span className="relative inline-block overflow-hidden reflection-hover font-semibold uppercase text-brand-gold text-gold-glow-hover tracking-wider text-sm px-2 py-1">
                        Menu
                    </span>
                 )}
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-light/95 dark:bg-brand-gray/95">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-4 pb-8 text-base font-medium">
            <NavLinksComponent onClick={() => setIsMenuOpen(false)}/>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;