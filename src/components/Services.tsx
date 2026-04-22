import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, RefreshCw, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingCard from './FloatingCard';
import GlassCard from './GlassCard';
import GradientText from './GradientText';
import { SERVICES } from '../lib/constants';

const iconMap: Record<string, React.ComponentType<any>> = {
  calendar: Calendar,
  clock: Clock,
  heart: Heart,
  'refresh-cw': RefreshCw,
  'file-text': FileText,
  'shield-check': ShieldCheck,
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-label="Serviços"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1829] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.04)_0%,_transparent_60%)]" />
      
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
            Áreas de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
            Serviços{' '}
            <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
              Especializados
            </GradientText>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Oferecemos assessoria completa em todas as áreas do direito previdenciário, 
            com estratégias personalizadas para cada situação.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Calendar;
            const serviceSlug = service.title.toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/\s+/g, '-')
              .replace(/\//g, '-');
            
            return (
              <FloatingCard key={service.id} delay={index * 0.1}>
                <Link to={`/servicos/${serviceSlug}`}>
                  <GlassCard className="h-full">
                    <article className="group relative h-full p-8 overflow-hidden cursor-pointer">
                      {/* Icon */}
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6 group-hover:from-[#D4AF37]/30 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                        <IconComponent size={26} className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="relative text-xl font-semibold text-white mb-3 font-[family-name:var(--font-display)] group-hover:text-[#D4AF37] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="relative text-white/55 leading-relaxed text-sm mb-6">
                        {service.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="relative flex items-center gap-2 text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        Saiba mais
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  </GlassCard>
                </Link>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}