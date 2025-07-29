import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';
import { WHATSAPP_NUMBER, WhatsAppIcon } from '../constants';

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MapPinIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);


const ContactPage: React.FC = () => {
  const location = useLocation();
  const subjectFromState = location.state?.subject || '';

  const { isOpen, open, close } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

  useEffect(() => {
    setFormData(prev => ({ ...prev, subject: subjectFromState }));
  }, [subjectFromState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
        setStatus('idle');
        open();
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactActions = [
    { 
      icon: WhatsAppIcon, 
      iconColor: 'text-green-500',
      text: "Enviar WhatsApp", 
      subtext: "Atendimento rápido",
      href: `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Vi seu site e gostaria de um contato.`,
      bg: "bg-green-500/5 dark:bg-green-500/10",
    },
    { 
      icon: PhoneIcon, 
      iconColor: 'text-blue-500',
      text: "Ligar Agora", 
      subtext: "(41) 98501-1382",
      href: "tel:+5541985011382",
      bg: "bg-blue-500/5 dark:bg-blue-500/10",
    },
    { 
      icon: MailIcon, 
      iconColor: 'text-red-500',
      text: "Enviar E-mail",
      subtext: "dr.darany@gmail.com",
      href: "mailto:dr.darany@gmail.com",
      bg: "bg-red-500/5 dark:bg-red-500/10",
    },
  ];
  const inputStyles = "w-full px-4 py-3 bg-brand-light dark:bg-brand-dark text-brand-text-dark dark:text-brand-text-light border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors";

  return (
    <>
      <Modal isOpen={isOpen} onClose={close} title="MENSAGEM ENVIADA!">
        <div className="text-center space-y-4">
            <p className="text-gray-700 dark:text-gray-300">Agradecemos seu contato. Retornaremos o mais breve possível.</p>
             <button onClick={close} className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all uppercase tracking-wide">
                Fechar
            </button>
        </div>
      </Modal>

      <div className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider text-gold-gradient">Fale Conosco</h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Escolha o seu canal de preferência para entrar em contato ou, se preferir, envie-nos uma mensagem pelo formulário.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {contactActions.map(action => {
                    const IconComponent = action.icon;
                    return (
                        <a 
                            key={action.text}
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group block p-6 rounded-xl text-center ${action.bg} border border-black/5 dark:border-white/5 animated-border-card rgb-border reflection-hover`}
                        >
                            <div className="inline-block mb-4">
                                <IconComponent className={`w-7 h-7 ${action.iconColor} transition-colors duration-300 group-hover:text-brand-text-dark`} />
                            </div>
                            <h3 className="font-bold text-lg text-brand-text-dark dark:text-brand-text-light uppercase tracking-wide transition-colors duration-300 group-hover:text-brand-text-dark">{action.text}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-brand-text-dark">{action.subtext}</p>
                        </a>
                    );
                })}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-brand-light-gray dark:bg-brand-gray p-8 sm:p-10 rounded-xl shadow-2xl max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl md:text-2xl font-serif text-brand-text-dark dark:text-brand-text-light mb-6 text-center uppercase tracking-wide">Ou Envie uma Mensagem Direta</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required className={inputStyles}/>
                    <input type="email" name="email" placeholder="Seu E-mail" value={formData.email} onChange={handleChange} required className={inputStyles}/>
                  </div>
                  <input type="text" name="subject" placeholder="Assunto" value={formData.subject} onChange={handleChange} required className={inputStyles}/>
                  <textarea name="message" placeholder="Sua Mensagem" rows={5} value={formData.message} onChange={handleChange} required className={inputStyles}></textarea>
                  <div className="text-center">
                    <button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto bg-brand-gold text-brand-dark font-bold py-3 px-12 rounded-md shadow-md hover:bg-opacity-90 transition-all disabled:bg-gray-400 hover:shadow-gold-glow uppercase tracking-wider">
                      {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                  </div>
                </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default ContactPage;