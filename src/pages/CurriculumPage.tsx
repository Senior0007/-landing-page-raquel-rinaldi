import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Award, Briefcase, GraduationCap, Users, Shield, BookOpen } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import FloatingCard from '../components/FloatingCard';
import GradientText from '../components/GradientText';

const experiences = [
  {
    icon: Shield,
    title: 'Conselheira da Junta de Recursos do CRPS',
    description: 'Julgando recursos administrativos contra decisões do INSS. Atuando em colegiados tripartites (governo, empresa, trabalhador), analisando processos para conceder benefícios, sendo a decisão final na esfera administrativa.'
  },
  {
    icon: Briefcase,
    title: 'Consultora em Privacidade e Proteção de Dados',
    description: 'Storm Group e Value Privacy, atuando em projetos de conformidade com a LGPD, com soluções práticas de compliance e gestão de riscos.'
  },
  {
    icon: Users,
    title: 'CEO e Fundadora da LGPD EXPERIENCE',
    description: 'Liderando iniciativas estratégicas em conformidade com a LGPD e proteção de dados em organizações públicas e privadas.'
  },
  {
    icon: BookOpen,
    title: 'Pesquisadora Sênior',
    description: 'Tribunal de Contas do Estado de Rondônia, contratada pelo Edital nº 001/2023/SETIC.'
  }
];

const education = [
  {
    degree: 'Doutora e Mestre em Direito',
    institution: 'Universidade do Estado do Rio de Janeiro (UERJ)',
    focus: 'Teoria e Filosofia do Direito'
  },
  {
    degree: 'Graduada em Direito',
    institution: 'Universidade Federal do Rio de Janeiro (UFRJ)',
    focus: ''
  },
  {
    degree: 'Pós-Graduação em Prática Previdenciária',
    institution: 'Administrativa e Judicial',
    focus: ''
  },
  {
    degree: 'Especialização em Direito Digital',
    institution: 'Universidade de Genebra',
    focus: ''
  },
  {
    degree: 'Especialização em LGPD',
    institution: 'PUC-Rio',
    focus: ''
  }
];

const teaching = [
  'Professora do curso de graduação em Direito da UNIGAMA',
  'MBA TECH no IBMEC',
  'LLM em Direito Empresarial no IBMEC',
  'Pós-Graduação em Direito Digital na FEEMPERJ',
  'Coordenadora de cursos de Direito na UCB e UNIGAMA (5 anos de experiência em gestão educacional)'
];

const positions = [
  'Coordenadora de Novas Tecnologias na ESA/OAB-RJ',
  'Membro das comissões de Privacidade e Proteção de Dados da OAB/RJ',
  'Membro da comissão de Direito Digital da IAB/RJ',
  'Diretora Executiva da govDADOS',
  'Advogada Digital na startup Trato.io',
  'Assessora Jurídica na Procon/RJ',
  'Advogada Sênior na Ubook S.A.'
];

export default function CurriculumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-display)]">
              <GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
                Dra. Raquel Rinaldi
              </GradientText>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-4">
              Experiência Multidisciplinar em Direito Previdenciário,
            </p>
            <p className="text-xl sm:text-2xl text-white/80">
              Direito Digital, Privacidade e Proteção de Dados
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-[#D4AF37]" size={32} />
              Formação Acadêmica
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <FloatingCard key={index} delay={index * 0.1}>
                  <GlassCard className="p-6 h-full">
                    <h3 className="text-lg font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-[#D4AF37] font-medium mb-2">{edu.institution}</p>
                    {edu.focus && <p className="text-white/60 text-sm">{edu.focus}</p>}
                  </GlassCard>
                </FloatingCard>
              ))}
            </div>
          </motion.div>

          {/* Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-[#D4AF37]" size={32} />
              Experiência Profissional Destacada
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <FloatingCard key={index} delay={index * 0.1}>
                    <GlassCard className="p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent size={24} className="text-[#D4AF37]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{exp.title}</h3>
                          <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </FloatingCard>
                );
              })}
            </div>
          </motion.div>

          {/* Teaching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="text-[#D4AF37]" size={32} />
              Docência e Gestão Educacional
            </h2>
            <FloatingCard delay={0.2}>
              <GlassCard className="p-8">
                <ul className="space-y-3">
                  {teaching.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                      <p className="text-white/80 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FloatingCard>
          </motion.div>

          {/* Other Positions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-[#D4AF37]" size={32} />
              Outras Posições e Atuações
            </h2>
            <FloatingCard delay={0.2}>
              <GlassCard className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                      <p className="text-white/80">{position}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FloatingCard>
          </motion.div>

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 text-center"
          >
            <GlassCard className="p-8 inline-block">
              <p className="text-2xl font-bold text-white mb-2">
                <span className="text-[#D4AF37]">15 anos</span> de experiência na advocacia privada
              </p>
              <p className="text-lg text-white/70">
                Dedicação, expertise e resultados comprovados
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
