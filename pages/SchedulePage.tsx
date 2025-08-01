import React, { useState } from 'react';
import { PRACTICE_AREAS, WHATSAPP_NUMBER, WhatsAppIcon } from '../constants';
import AnimatedSection from '../components/AnimatedSection';

const SchedulePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

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
    }, 1000);
  };

  const inputStyles = "w-full px-4 py-3 bg-brand-light-bg dark:bg-brand-dark text-brand-text-dark dark:text-brand-text-light border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-colors";

  return (
    <div className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider text-gold-gradient text-shadow-heading">Agende sua Consulta</h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-shadow-heading">
            A forma mais rápida de agendar é via WhatsApp. Preencha os dados abaixo e envie-nos uma mensagem direta.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-2xl mx-auto bg-brand-light-surface dark:bg-brand-gray p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Nome Completo</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputStyles}/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Telefone (WhatsApp)</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(XX) XXXXX-XXXX" className={inputStyles}/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">E-mail (Opcional)</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputStyles}/>
                  </div>
              </div>
              <div>
                <label htmlFor="area" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Área de Interesse</label>
                <select id="area" name="area" value={formData.area} onChange={handleChange} required className={inputStyles}>
                  <option value="">Selecione uma área</option>
                  {PRACTICE_AREAS.map(area => <option key={area.id} value={area.name}>{area.name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider">Breve Descrição do Caso</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} required className={inputStyles} placeholder="Descreva sua situação resumidamente."></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full flex items-center justify-center space-x-3">
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>{status === 'submitting' ? 'Aguarde...' : 'Agendar via WhatsApp'}</span>
                </button>
              </div>
            </form>
              <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">Ao clicar, você será redirecionado para o WhatsApp com a mensagem pronta para envio.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SchedulePage;