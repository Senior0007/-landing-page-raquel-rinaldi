import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, ClipboardList, Rocket } from 'lucide-react';
import { STEPS } from '../lib/constants';

const icons = [MessageSquare, FileSearch, ClipboardList, Rocket];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-label="Como funciona"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1628]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_rgba(26,53,104,0.2)_0%,_transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-4">
            Processo Simples
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
            Como{' '}
            <span className="text-gradient-gold">Funciona</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Um processo claro e transparente, do primeiro contato até a conquista do seu benefício.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 origin-left"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, index) => {
              const IconComponent = icons[index];
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative text-center group"
                >
                  {/* Step number circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border-2 border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      <IconComponent size={32} className="text-[#D4AF37]" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0a1628] font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-display)]">
                    {step.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed text-sm max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}