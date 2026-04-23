import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Check, TrendingUp, Shield, Clock, FileCheck, Heart, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';
import GlassCard from '../components/GlassCard';
import FloatingCard from '../components/FloatingCard';
import GradientText from '../components/GradientText';
import TestimonialsColumns from '../components/ui/testimonials-columns-1';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'trending-up': TrendingUp,
  'shield-check': Shield,
  'clock': Clock,
  'file-check': FileCheck,
  'heart': Heart,
  'users': Users,
  'check-circle': CheckCircle,
  'shield': Shield,
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-[#D4AF37] hover:underline">
            Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/5521994877080?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,53,104,0.3)_0%,_transparent_60%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/#servicos"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar para serviços
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6">
                <span className="text-sm font-medium text-[#D4AF37]">{service.subtitle}</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6 font-[family-name:var(--font-display)]">
                <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
                  {service.headline}
                </GradientText>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed">
                {service.subheadline}
              </p>

              {/* Mobile Image */}
              <div className="lg:hidden mb-8 rounded-2xl overflow-hidden border border-[#D4AF37]/20">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-auto object-cover"
                  loading="eager"
                  onError={(e) => {
                    console.error('Image failed to load:', service.image);
                    e.currentTarget.src = '/uploads/raquel-hero.jpg';
                  }}
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#1d4ed8] text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(30,64,175,0.4)]"
                >
                  <MessageCircle size={20} />
                  <span>Consulta Gratuita</span>
                </a>
                <Link
                  to="/#servicos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/5 hover:border-[#D4AF37]/40 transition-all duration-300"
                >
                  Ver Outros Serviços
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image with Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ y }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-auto object-cover min-h-[500px]"
                    loading="eager"
                    onError={(e) => {
                      console.error('Image failed to load:', service.image);
                      e.currentTarget.src = '/uploads/raquel-hero.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingCard delay={0.1}>
            <GlassCard className="p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-[family-name:var(--font-display)]">
                {service.painPoints.title}
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                {service.painPoints.description}
              </p>
              <div className="space-y-4">
                {service.painPoints.questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-[#D4AF37]" />
                    </div>
                    <p className="text-white/80">{question}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </FloatingCard>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#0d1829] to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-[family-name:var(--font-display)]">
                <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
                  {service.explanation.title}
                </GradientText>
              </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {service.explanation.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.explanation.details.map((detail, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={20} className="text-[#D4AF37]" />
                    </div>
                    <p className="text-white/80">{detail}</p>
                  </div>
                </GlassCard>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
              <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
                Por Que Escolher Nosso Serviço
              </GradientText>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Shield;
              return (
                <FloatingCard key={index} delay={index * 0.1}>
                  <GlassCard className="p-6 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-4">
                      <Icon size={26} className="text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-white/60 text-sm">{benefit.description}</p>
                  </GlassCard>
                </FloatingCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsColumns />

      {/* Process Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
              <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
                Como Funciona
              </GradientText>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <GlassCard className="p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#9a7d26] flex items-center justify-center mb-4 text-[#0a1628] font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </GlassCard>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#0d1829] to-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FloatingCard>
            <GlassCard className="p-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
                <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
                  {service.finalCTA.headline}
                </GradientText>
              </h2>
              <p className="text-xl text-white/70 mb-4">
                {service.finalCTA.subheadline}
              </p>
              <p className="text-[#D4AF37] font-semibold mb-8">
                {service.finalCTA.urgency}
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1e40af] to-[#1d4ed8] text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(30,64,175,0.5)]"
              >
                <MessageCircle size={24} />
                Falar com Dra. Raquel Agora
              </a>

              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-[#1e40af]" />
                  Consulta Gratuita
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-[#1e40af]" />
                  Atendimento Nacional
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-[#1e40af]" />
                  OAB/RJ 147.852
                </div>
              </div>
            </GlassCard>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}
