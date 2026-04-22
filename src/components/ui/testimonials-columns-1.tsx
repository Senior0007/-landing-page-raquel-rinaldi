"use client";

import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "A Dra. Raquel é uma profissional excepcional! Consegui minha aposentadoria em tempo recorde. Atendimento humanizado e muito competente.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Maria da Silva",
    role: "Aposentadoria Concedida",
  },
  {
    text: "Depois de anos tentando sozinho, a Dra. Raquel conseguiu meu BPC/LOAS em poucos meses. Gratidão eterna!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "João Santos",
    role: "BPC/LOAS Aprovado",
  },
  {
    text: "A revisão do meu benefício aumentou significativamente meu valor mensal. Profissional séria e dedicada.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Ana Paula Costa",
    role: "Revisão Aprovada +35%",
  },
  {
    text: "Atendimento rápido e eficiente. A Dra. Raquel realmente entende de direito previdenciário. Recomendo!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Carlos Eduardo",
    role: "Auxílio-Doença Concedido",
  },
  {
    text: "Consegui minha aposentadoria especial graças ao trabalho impecável da Dra. Raquel. Vale cada centavo!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Fernanda Lima",
    role: "Aposentadoria Especial",
  },
  {
    text: "Profissional extremamente competente e humana. Meu processo foi conduzido com excelência do início ao fim.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Roberto Almeida",
    role: "Pensão por Morte Aprovada",
  },
  {
    text: "A Dra. Raquel é uma verdadeira especialista! Conseguiu reverter uma negativa do INSS e garantir meu direito.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Juliana Martins",
    role: "Recurso Ganho",
  },
  {
    text: "Atendimento nacional de qualidade! Mesmo à distância, recebi todo suporte necessário. Muito satisfeito!",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    name: "Pedro Henrique",
    role: "Aposentadoria por Idade",
  },
  {
    text: "Meu filho autista conseguiu o BPC graças à dedicação da Dra. Raquel. Mudou nossa vida completamente!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    name: "Luciana Santos",
    role: "BPC Autismo Aprovado",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl shadow-lg shadow-[#D4AF37]/10 max-w-xs w-full" 
                  key={i}
                >
                  <div className="text-white/80 text-sm leading-relaxed mb-6">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-[#D4AF37]/30"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white text-sm">
                        {name}
                      </div>
                      <div className="leading-5 text-[#D4AF37] tracking-tight text-xs font-medium">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumns = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1829] to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 py-2 px-6 rounded-full">
              <span className="text-[#D4AF37] text-sm font-medium">Depoimentos</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-6 font-[family-name:var(--font-display)]">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>
          <p className="text-center text-lg text-white/60 leading-relaxed">
            Veja o que nossos clientes têm a dizer sobre nossos serviços.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={30} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={35} 
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsColumns;