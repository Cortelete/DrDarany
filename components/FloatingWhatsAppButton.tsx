import React from 'react';
import { WHATSAPP_NUMBER, WhatsAppIcon } from '../constants';

const FloatingWhatsAppButton: React.FC = () => {
  const message = "Olá! Vi seu site e gostaria de agendar uma consulta.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 flex items-center justify-center hover:shadow-gold-glow"
      aria-label="Fale agora pelo WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6"/>
    </a>
  );
};

export default FloatingWhatsAppButton;