import { motion } from 'framer-motion';
import { ArrowRight, Phone, Clock, Shield } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-label="Chamada para ação final"
    >
      {/* Background with strong gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f3d] via-[#0a1628] to-[#0f1f3d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_60%)]" />
      
      {/* Animated border glow */}
      <div className="absolute inset-4 rounded-[2rem] border border-[#D4AF37]/10" />
      <div className="absolute inset-4 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Urgency badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-8"
          >
            <Clock size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold text-sm">Atendimento imediato disponível</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-display)]">
            Não deixe seus direitos
            <br />
            <span className="text-gradient-gold">prescreverem</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-body)]">
            Cada dia conta. Nossa equipe está pronta para analisar seu caso agora mesmo.
            <br className="hidden sm:block" />
            <span className="text-white/80 font-semibold">A consulta é gratuita e sem compromisso.</span>
          </p>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-10"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(37,211,102,0.4)] focus-visible:ring-4 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
              aria-label="Iniciar conversa no WhatsApp"
            >
              <Phone size={24} className="group-hover:animate-bounce" />
              <span>Iniciar Conversa no WhatsApp</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white/50"
          >
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-[#D4AF37]" />
              <span className="text-sm">100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#D4AF37]" />
              <span className="text-sm">Resposta em até 2 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-[#D4AF37]" />
              <span className="text-sm">Sem compromisso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}