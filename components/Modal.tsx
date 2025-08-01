

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const XIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-brand-light-surface dark:bg-brand-gray rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative border border-brand-gold/20"
            style={{ cursor: 'default' }}
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-brand-light-surface dark:bg-brand-gray z-10">
              {title && <h2 className="text-xl md:text-2xl font-serif text-gold-gradient text-shadow-heading">{title}</h2>}
              <button
                onClick={onClose}
                className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors p-1 rounded-full absolute top-4 right-4"
                aria-label="Fechar modal"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;