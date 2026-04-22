import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass rounded-2xl p-4 pr-12 max-w-[280px] shadow-2xl"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 p-1 text-white/50 hover:text-white transition-colors"
              aria-label="Fechar tooltip"
            >
              <X size={14} />
            </button>
            <p className="text-white text-sm font-medium mb-1">
              Precisa de ajuda?
            </p>
            <p className="text-white/60 text-xs leading-relaxed">
              Fale conosco agora pelo WhatsApp. Consulta gratuita!
            </p>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 glass rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pulse-whatsapp relative w-16 h-16 rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-shadow duration-300 focus-visible:ring-4 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={30} className="text-white" fill="white" />
        
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          1
        </span>
      </motion.a>
    </div>
  );
}