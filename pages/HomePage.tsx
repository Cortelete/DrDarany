import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PRACTICE_AREAS, WHATSAPP_NUMBER, WhatsAppIcon } from '../constants';
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

  // State for the new schedule modal
  const { isOpen: isScheduleOpen, open: openSchedule, close: closeSchedule } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  const handleOpenModal = (area: PracticeArea) => {
    setSelectedArea(area);
    open();
  };

  // Handler to open schedule modal and pre-fill data
  const handleOpenScheduleModal = () => {
    if (selectedArea) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        area: selectedArea.name,
        description: `Olá, gostaria de agendar uma consulta sobre ${selectedArea.name}.`
      });
      close(); // Close details modal
      openSchedule(); // Open schedule modal
    }
  };
  
  // Form handlers copied from SchedulePage
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(status === 'submitting') return;
    setStatus('submitting');
    
    let message = `*SOLICITAÇÃO DE AGENDAMENTO VIA SITE*\n\n`;
    message += `*NOME:* ${formData.name}\n`;
    message += `*TELEFONE:* ${formData.phone}\n`;
    if (formData.email) message += `*E-MAIL:* ${formData.email}\n`;
    message += `*ÁREA DE INTERESSE:* ${formData.area}\n\n`;
    message += `*DESCRIÇÃO DO CASO:*\n${formData.description}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
        setStatus('idle');
        closeSchedule();
    }, 1000);
  };
  
  const inputStyles = "w-full px-4 py-3 bg-brand-light dark:bg-brand-dark text-brand-text-dark dark:text-brand-text-light border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors";

  const targetClients = [
    { name: 'Polícia Militar do Paraná', logoSrc: '/images/PMPR.png', singular: 'policial militar do Paraná' },
    { name: 'Polícia Civil do Paraná', logoSrc: '/images/PCPR.png', singular: 'policial civil do Paraná' },
    { name: 'Guarda Civil Municipal', logoSrc: '/images/GCM.png', singular: 'guarda civil municipal' },
    { name: 'Forças Armadas', logoSrc: '/images/FA.png', singular: 'membro das forças armadas' },
  ];
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="fixed inset-0 z-0 flex items-center justify-start pointer-events-none"
      >
        <img
            src="/images/logoDrD.png"
            alt=""
            className="h-screen w-auto max-w-[80vw] object-contain opacity-[0.04] dark:opacity-[0.02] mix-blend-luminosity transform -translate-x-1/3"
        />
      </motion.div>

      {/* Details Modal */}
      {selectedArea && (
        <Modal isOpen={isOpen} onClose={close} title={selectedArea.name.toUpperCase()}>
            <div className="space-y-4">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                    {selectedArea.modalContent}
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide text-shadow-heading">Exemplos de Atuação:</h4>
                    <p className="italic text-gray-600 dark:text-gray-400 mt-1">{selectedArea.examples}</p>
                </div>
                <div className='pt-4 flex flex-col sm:flex-row justify-between items-center gap-4'>
                     <div>
                        <Link 
                            to="/atuacao" 
                            className="font-bold text-brand-gold hover:underline transition-colors uppercase text-sm"
                        >
                            Ver outras áreas
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end gap-3 w-full sm:w-auto">
                        <button onClick={handleOpenScheduleModal} className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                          <WhatsAppIcon className="w-5 h-5" />
                          Agendar via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
      )}

       {/* Schedule Form Modal */}
      <Modal isOpen={isScheduleOpen} onClose={closeSchedule} title="AGENDAR CONSULTA">
          <div className="bg-brand-light-gray dark:bg-brand-gray p-0 sm:p-2 rounded-xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Nome Completo</label>
                <input type="text" id="modal-name" name="name" value={formData.name} onChange={handleChange} required className={inputStyles}/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="modal-phone" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Telefone (WhatsApp)</label>
                      <input type="tel" id="modal-phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(XX) XXXXX-XXXX" className={inputStyles}/>
                  </div>
                  <div>
                      <label htmlFor="modal-email" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">E-mail (Opcional)</label>
                      <input type="email" id="modal-email" name="email" value={formData.email} onChange={handleChange} className={inputStyles}/>
                  </div>
              </div>
              <div>
                <label htmlFor="modal-area" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Área de Interesse</label>
                <select id="modal-area" name="area" value={formData.area} onChange={handleChange} required className={inputStyles}>
                  <option value="">Selecione uma área</option>
                  {PRACTICE_AREAS.map(area => <option key={area.id} value={area.name}>{area.name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="modal-description" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Breve Descrição do Caso</label>
                <textarea id="modal-description" name="description" value={formData.description} onChange={handleChange} rows={4} required className={inputStyles}></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full flex items-center justify-center space-x-3">
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>{status === 'submitting' ? 'Aguarde...' : 'Enviar para o WhatsApp'}</span>
                </button>
              </div>
            </form>
              <div className="text-center mt-6">
                <p className="text-xs text-gray-600 dark:text-gray-400">Ao clicar, você será redirecionado para o WhatsApp com a mensagem pronta para envio.</p>
            </div>
          </div>
      </Modal>

      <div className="relative z-1 space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section className="relative text-center text-brand-text-dark dark:text-brand-text-light -mt-20">
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
                className="h-40 w-40 md:h-52 md:w-52 object-contain dark:mix-blend-screen"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-text-dark dark:text-brand-text-light mb-4 leading-tight uppercase text-shadow-heading"
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
                className="btn-primary mt-10"
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
              <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wider text-gold-gradient text-shadow-heading">Para Quem Atuamos</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 text-shadow-heading">Representação dedicada aos agentes da segurança pública e forças armadas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto">
              {targetClients.map((client, index) => (
                <div key={index} className="text-center">
                    <button 
                        onClick={() => setOpenClient(openClient === index ? null : index)} 
                        className="w-full group text-center p-4 rounded-lg transition-colors duration-300"
                    >
                        <img 
                            src={client.logoSrc} 
                            alt={`Logo ${client.name}`} 
                            className="h-28 w-28 mx-auto mb-4 object-contain transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" 
                        />
                        <h3 className="font-semibold text-sm md:text-base text-brand-gold uppercase tracking-wide text-shadow-heading">{client.name}</h3>
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
              <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wider text-gold-gradient text-shadow-heading">Nossas Especialidades</h2>
              <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 text-shadow-heading">Soluções jurídicas para proteger seus direitos e sua carreira.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRACTICE_AREAS.map((area) => {
                const IconComponent = area.icon;
                return (
                  <button key={area.id} onClick={() => handleOpenModal(area)} className="group text-left relative bg-brand-light-gray dark:bg-brand-gray p-8 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 reflection-hover">
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-5">
                          <IconComponent className="w-12 h-12 text-brand-gold" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold font-serif text-brand-text-dark dark:text-brand-text-light mb-2 uppercase tracking-wide text-shadow-heading">{area.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{area.description}</p>
                        <span className="text-brand-gold font-semibold text-sm mt-auto pt-2 uppercase tracking-wide">Saiba Mais &rarr;</span>
                      </div>
                  </button>
                )
              })}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-6 text-center py-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-4 uppercase tracking-wider text-gold-gradient text-shadow-heading">Pronto para dar o próximo passo?</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-shadow-heading">
            Se você enfrenta uma questão jurídica e precisa de orientação especializada, estamos aqui para ajudar. Agende uma consulta para discutirmos seu caso.
          </p>
          <Link
            to="/agendamento"
            className="btn-primary"
          >
            Agendar Consulta
          </Link>
        </AnimatedSection>
      </div>
    </>
  );
};

export default HomePage;