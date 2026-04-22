import { motion } from 'framer-motion';
import { CheckCircle2, Scale, Users, TrendingUp } from 'lucide-react';
import { COMPANY_INFO } from '../lib/constants';

const differentials = [
  { icon: Scale, title: 'Especialização Única', description: 'Foco exclusivo em direito previdenciário há mais de 15 anos.' },
  { icon: Users, title: 'Atendimento Humanizado', description: 'Cada caso é único. Tratamos você como pessoa, não como número.' },
  { icon: TrendingUp, title: 'Alta Taxa de Sucesso', description: 'Mais de 98% dos nossos clientes alcançam resultados positivos.' },
  { icon: CheckCircle2, title: 'Transparência Total', description: 'Sem custos ocultos. Você só paga se ganhar (condições especiais).' },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-label="Sobre a advogada"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1628]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_rgba(26,53,104,0.2)_0%,_transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#D4AF37]/20 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img
                  src="/uploads/upload_1.jpg"
                  alt={`Dra. ${COMPANY_INFO.name} - Especialista em Direito Previdenciário`}
                  className="w-full h-[500px] object-cover object-top"
                  loading="lazy"
                  width="550"
                  height="650"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
              </div>
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:right-8 glass rounded-2xl p-5 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D4AF37] font-[family-name:var(--font-display)]">{COMPANY_INFO.yearsExperience}+</div>
                  <div className="text-sm text-white/70 mt-1">Anos de<br />Experiência</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            {/* Section label */}
            <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-4">
              Sobre a Advogada
            </span>
            
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-display)]">
              Autoridade em{' '}
              <span className="text-gradient-gold">Direito Previdenciário</span>
            </h2>
            
            <p className="text-lg text-white/65 mb-8 leading-relaxed font-[family-name:var(--font-body)]">
              Sou a Dra. {COMPANY_INFO.name.split(' ')[1] || 'Patrícia'}, advogada especializada em direito 
              previdenciário com atuação nacional. Minha missão é garantir que cada cliente 
              receba exatamente o que tem direito após anos de trabalho.
            </p>
            <p className="text-lg text-white/65 mb-10 leading-relaxed font-[family-name:var(--font-body)]">
              Com mais de {COMPANY_INFO.yearsExperience} anos de experiência e milhares de casos bem-sucedidos, 
              construí uma reputação baseada em resultados reais e atendimento humanizado.
            </p>

            {/* Differentials grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {differentials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300 hover:bg-white/[0.05]"
                >
                  <item.icon size={24} className="text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}