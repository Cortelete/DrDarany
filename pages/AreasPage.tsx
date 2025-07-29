

import React, { useState } from 'react';
import { PRACTICE_AREAS, WHATSAPP_NUMBER } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';
import type { PracticeArea } from '../types';

const AreasPage: React.FC = () => {
  const { isOpen: isDetailsOpen, open: openDetailsModal, close: closeDetailsModal } = useModal();
  const { isOpen: isConfirmOpen, open: openConfirmModal, close: closeConfirmModal } = useModal();
  
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [selectedExample, setSelectedExample] = useState<string>('');

  const handleOpenDetails = (area: PracticeArea) => {
      setSelectedArea(area);
      openDetailsModal();
  };

  const handleOpenConfirm = (example: string) => {
      setSelectedExample(example);
      openConfirmModal();
  };

  const handleWhatsAppRedirect = () => {
      const message = `Olá, Dr. Darany. Vi no seu site sobre ${selectedArea?.name} e gostaria de mais informações. Meu caso é semelhante a: "${selectedExample}".`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      closeConfirmModal();
      closeDetailsModal();
  };

  return (
    <>
      {selectedArea && (
        <Modal isOpen={isDetailsOpen} onClose={closeDetailsModal} title={selectedArea.name.toUpperCase()}>
          <div className="space-y-4">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                  {selectedArea.modalContent}
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 uppercase tracking-wide">Está passando por alguma dessas situações?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Clique em uma situação abaixo para iniciar uma conversa sobre seu caso.</p>
              </div>
              <div className="space-y-3 pt-2">
                  {selectedArea.simpleExamples.map(example => (
                      <button 
                        key={example} 
                        onClick={() => handleOpenConfirm(example)} 
                        className="w-full text-left p-4 bg-brand-light dark:bg-brand-gray rounded-lg hover:bg-brand-gold/10 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-brand-gold/50"
                      >
                          <span className="font-medium text-brand-text-dark dark:text-brand-text-light">{example} &rarr;</span>
                      </button>
                  ))}
              </div>
          </div>
        </Modal>
      )}

      <Modal isOpen={isConfirmOpen} onClose={closeConfirmModal} title="Confirmar Contato via WhatsApp">
          <div className="text-center space-y-4">
              <p className="text-gray-700 dark:text-gray-300">Você será redirecionado para o WhatsApp para conversar sobre seu caso. Deseja continuar?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button onClick={closeConfirmModal} className="bg-gray-300 text-brand-text-dark font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all w-full sm:w-auto uppercase tracking-wide">
                      Cancelar
                  </button>
                  <button onClick={handleWhatsAppRedirect} className="bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all w-full sm:w-auto uppercase tracking-wide">
                      Sim, Falar no WhatsApp
                  </button>
              </div>
          </div>
      </Modal>

      <div className="bg-transparent py-16 md:py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider text-gold-gradient">Áreas de Atuação</h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Oferecemos assessoria jurídica especializada em diversas áreas do direito. Clique em uma área para ver os detalhes e iniciar o contato.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {PRACTICE_AREAS.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <AnimatedSection key={area.id} delay={index * 0.1}>
                  <button onClick={() => handleOpenDetails(area)} className="w-full text-left group bg-brand-light-gray dark:bg-brand-gray rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row animated-border-card gold-border reflection-hover">
                    <div className="bg-brand-light dark:bg-brand-dark p-8 flex items-center justify-center md:w-1/4">
                       <IconComponent className="w-12 h-12 text-brand-gold transition-all duration-300 group-hover:text-brand-text-dark group-hover:scale-110" />
                    </div>
                    <div className="p-8 flex-1">
                      <h2 className="text-xl md:text-2xl font-serif text-brand-text-dark dark:text-brand-text-light mb-3 uppercase tracking-wide transition-colors duration-300 group-hover:text-brand-text-dark">{area.name}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-brand-text-dark">{area.description}</p>
                      <span
                        className="inline-block font-bold text-brand-gold transition-all uppercase tracking-wide text-sm group-hover:text-brand-text-dark"
                      >
                        Ver Detalhes e Iniciar Contato &rarr;
                      </span>
                    </div>
                  </button>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AreasPage;