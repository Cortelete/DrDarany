import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PRACTICE_AREAS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';
import type { PracticeArea } from '../types';

const ArrowDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
);


const HomePage: React.FC = () => {
  const [openClient, setOpenClient] = useState<number | null>(null);
  const { isOpen, open, close } = useModal();
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const handleOpenModal = (area: PracticeArea) => {
    setSelectedArea(area);
    open();
  };
  
  const targetClients = [
    { name: 'Polícia Militar do Paraná', logoSrc: '/images/PMPR.png', singular: 'policial militar do Paraná' },
    { name: 'Polícia Civil do Paraná', logoSrc: '/images/PCPR.png', singular: 'policial civil do Paraná' },
    { name: 'Guarda Civil Municipal', logoSrc: '/images/GCM.png', singular: 'guarda civil municipal' },
    { name: 'Forças Armadas', logoSrc: '/images/FA.png', singular: 'membro das forças armadas' },
  ];
  
  return (
    <>
      {selectedArea && (
        <Modal isOpen={isOpen} onClose={close} title={selectedArea.name.toUpperCase()}>
            <div className="space-y-4">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                    {selectedArea.modalContent}
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">Exemplos de Atuação:</h4>
                    <p className="italic text-gray-600 dark:text-gray-400 mt-1">{selectedArea.examples}</p>
                </div>
                <div className='pt-4 text-right'>
                    <Link 
                        to="/atuacao" 
                        className="font-bold text-brand-gold hover:underline transition-colors mr-6 uppercase text-sm"
                    >
                        Ver todos os detalhes
                    </Link>
                    <Link
                    to="/agendamento"
                    className="inline-block bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105 uppercase text-sm tracking-wide"
                    >
                        Agendar Consulta
                    </Link>
                </div>
            </div>
        </Modal>
      )}
      <div className="space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section className="relative text-center text-brand-text-dark dark:text-brand-text-light bg-light-gradient dark:bg-dark-gradient overflow-hidden -mt-20">
           <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          >
            <img
                src="/images/logoDrD.png"
                alt=""
                className="w-1/2 md:w-1/3 h-auto opacity-5 dark:opacity-[0.02] mix-blend-luminosity"
            />
          </motion.div>
          <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <img
                src="/images/logoDrD.png"
                alt="Logo Darany Advocacia"
                className="h-32 w-32 md:h-40 md:w-40 object-contain dark:mix-blend-screen"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-text-dark dark:text-brand-text-light mb-4 leading-tight uppercase"
            >
              ADVOCACIA ESPECIALISTA EM
              <span className="block text-gold-gradient mt-2">DIREITO MILITAR</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg font-light text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Defesa e orientação para Policiais, Guardas Municipais e membros das Forças Armadas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/agendamento"
                className="mt-10 inline-block bg-brand-gold text-brand-dark font-bold py-3 px-10 rounded-md shadow-lg transition-all transform hover:scale-105 hover:shadow-gold-glow uppercase tracking-wider"
              >
                Agendar Consulta
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
              className="absolute bottom-10 text-center text-gray-500 dark:text-gray-400 text-sm animate-bounce"
            >
              <ArrowDownIcon className="w-6 h-6 mx-auto" />
          </motion.div>
          </div>
        </section>

        {/* Target Clients Section */}
        <AnimatedSection className="container mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wider text-gold-gradient">Para Quem Atuamos</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">Representação dedicada aos agentes da segurança pública e forças armadas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto">
              {targetClients.map((client, index) => (
                <div key={index} className="text-center">
                    <button onClick={() => setOpenClient(openClient === index ? null : index)} className="w-full text-center p-4 rounded-lg hover:bg-brand-light-gray dark:hover:bg-brand-gray transition-colors duration-300">
                        <div className="flex items-center justify-center h-24 w-24 mx-auto mb-4 rounded-full bg-brand-light dark:bg-brand-dark p-2 overflow-hidden">
                            <img src={client.logoSrc} alt={`Logo ${client.name}`} className="h-full w-full object-contain" />
                        </div>
                        <h3 className="font-semibold text-sm md:text-base text-brand-text-dark dark:text-brand-text-light uppercase tracking-wide">{client.name}</h3>
                    </button>
                    <AnimatePresence>
                    {openClient === index && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 px-2 uppercase">
                                Você é ou conhece algum <span className="font-bold">{client.singular}</span> que precisa de ajuda?
                            </p>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
              ))}
          </div>
        </AnimatedSection>

        {/* Practice Areas Section */}
        <AnimatedSection className="container mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wider text-gold-gradient">Nossas Especialidades</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">Soluções jurídicas para proteger seus direitos e sua carreira.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRACTICE_AREAS.map((area) => {
                const IconComponent = area.icon;
                return (
                  <button key={area.id} onClick={() => handleOpenModal(area)} className="group text-left relative bg-brand-light-gray dark:bg-brand-gray p-8 rounded-xl shadow-lg animated-border-card gold-border reflection-hover">
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-5">
                          <IconComponent className="w-12 h-12 text-brand-gold transition-colors duration-300 group-hover:text-brand-text-dark" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold font-serif text-brand-text-dark dark:text-brand-text-light mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-brand-text-dark">{area.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow transition-colors duration-300 group-hover:text-brand-text-dark">{area.description}</p>
                        <span className="text-brand-gold font-semibold text-sm mt-auto pt-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-brand-text-dark">Saiba Mais &rarr;</span>
                      </div>
                  </button>
                )
              })}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-6 text-center py-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-4 uppercase tracking-wider text-gold-gradient">Pronto para dar o próximo passo?</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Se você enfrenta uma questão jurídica e precisa de orientação especializada, estamos aqui para ajudar. Agende uma consulta para discutirmos seu caso.
          </p>
          <Link
            to="/agendamento"
            className="inline-block bg-brand-gold text-brand-dark font-bold py-4 px-12 rounded-md shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-gold-glow uppercase tracking-wider"
          >
            Agendar Consulta
          </Link>
        </AnimatedSection>
      </div>
    </>
  );
};

export default HomePage;