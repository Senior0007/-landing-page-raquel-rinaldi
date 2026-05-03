import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Shield, Award, Clock, Sparkles } from 'lucide-react';
import { lazy, Suspense } from 'react';
import GradientText from './GradientText';
import { WHATSAPP_URL, COMPANY_INFO } from '../lib/constants';

// Lazy load componentes pesados
const HeroScene = lazy(() => import('./HeroScene'));
const AnimatedBackground = lazy(() => import('./AnimatedBackground'));

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,53,104,0.3)_0%,_transparent_60%)]" />
      
      {/* Animated Background - Lazy loaded */}
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      
      {/* 3D Scene - Lazy loaded */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <img
                src="/LOGO BRANCA vertical - Copia.png"
                alt="Raquel Rinaldi Advocacia - Logo"
                className="h-56 sm:h-64 lg:h-72 xl:h-80 2xl:h-96 mx-auto lg:mx-0 object-contain drop-shadow-2xl"
                loading="eager"
                fetchPriority="high"
                width="400"
                height="384"
              />
            </motion.div>

            {/* Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8 backdrop-blur-sm hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              <Sparkles size={16} className="text-[#D4AF37] animate-pulse" />
              <span className="text-sm font-medium text-[#D4AF37]">Especialista em Direito Previdenciário</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.08] mb-6 font-[family-name:var(--font-display)]"
            >
              <span className="text-white">Seus direitos</span>
              <br />
              <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
                previdenciários
              </GradientText>
              <br />
              <span className="text-white">merecem ser</span>
              <br />
              <span className="text-white">respeitados.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-[family-name:var(--font-body)]"
            >
              Garantindo aposentadorias dignas e o acesso a benefícios previdenciários para quem realmente precisa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#1d4ed8] text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(30,64,175,0.4)] focus-visible:ring-2 focus-visible:ring-[#1e40af] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
                aria-label="Falar com advogada pelo WhatsApp"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Consulta Gratuita
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2 text-white/60">
                <Award size={18} className="text-[#D4AF37]" />
                <span className="text-sm">{COMPANY_INFO.oab}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock size={18} className="text-[#D4AF37]" />
                <span className="text-sm">Resposta ágil</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Shield size={18} className="text-[#D4AF37]" />
                <span className="text-sm">100% Sigilo</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-3xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative bg-transparent rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl min-h-[350px]">
                <img
                  src="/images/serviços/6.png"
                  alt={`Dra. Raquel Rinaldi - Especialista em Direito Previdenciário com ${COMPANY_INFO.yearsExperience} anos de experiência, Doutora em Direito e Professora`}
                  className="w-full h-full object-cover object-center-top block"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="800"
                />
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1e40af] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Consulta Gratuita</p>
                      <p className="text-white/60 text-sm">Sem compromisso</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
