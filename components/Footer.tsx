import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light dark:bg-brand-gray text-brand-text-dark dark:text-brand-text-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src="/images/logoDrD.png"
                alt="Logo Darany Advocacia"
                className="h-12 w-12 object-contain dark:mix-blend-screen"
              />
              <div>
                <h3 className="text-xl font-serif text-brand-gold">Darany Luiz Alves de Oliveira</h3>
                <p className="text-gray-500 dark:text-gray-400">OAB/PR 130.714</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Advocacia especialista em Direito Militar. Sua causa, nosso compromisso.</p>
             <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                <a href="https://instagram.com/darany_oliveira" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-brand-gold transition-colors">
                    <InstagramIcon className="w-6 h-6" />
                </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-brand-text-dark dark:text-brand-text-light">Navegação</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-gold transition-colors">Sobre</Link></li>
              <li><Link to="/atuacao" className="hover:text-brand-gold transition-colors">Áreas de Atuação</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Artigos</Link></li>
              <li><Link to="/contato" className="hover:text-brand-gold transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-4 text-brand-text-dark dark:text-brand-text-light">Contato</h4>
            <address className="not-italic space-y-3 text-gray-600 dark:text-gray-300">
              <p>Atendimento em Curitiba/PR</p>
              <p>Online para todo o Brasil</p>
              <p>Email: <a href="mailto:dr.darany@gmail.com" className="hover:text-brand-gold">dr.darany@gmail.com</a></p>
              <p>Telefone: <a href="tel:+5541985011382" className="hover:text-brand-gold">(41) 98501-1382</a></p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Darany Luiz Alves de Oliveira - Advocacia. Todos os direitos reservados.</p>
           <p className="mt-2">
            Desenvolvido por Davi Cortelete - CEO{' '}
            <a 
              href="https://instagram.com/InteligenciArte.IA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors"
            >
              @InteligenciArte.IA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;