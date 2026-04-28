// WhatsApp Configuration
export const WHATSAPP_NUMBER = '5521994877080'; // Raquel Rinaldi
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de uma consulta gratuita sobre meu caso previdenciário.'
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Company Info
export const COMPANY_INFO = {
  name: 'Raquel Rinaldi',
  fullName: 'Dra. Raquel Rinaldi',
  shortName: 'Raquel Rinaldi Advocacia',
  oab: 'OAB/RJ 147.852',
  phone: '+55 21 99487-7080',
  email: 'contato@raquelrinaldiadvocacia.com.br',
  address: 'Rio de Janeiro, RJ - Atendimento Nacional',
  yearsExperience: 15,
  casesWon: 2500,
  clientSatisfaction: 98,
  specialties: [
    'Doutora em Direito',
    'Professora de Direito',
    'Especialista em Previdência',
    'Atendimento Humanizado'
  ],
  differentials: [
    'Atendimento rápido e personalizado',
    'Abordagem humanizada e artesanal',
    'Doutora em Direito',
    'Professora universitária',
    'Especialista em Direito Previdenciário',
    '15 anos de experiência',
    'Atendimento nacional'
  ]
};

// Services Data - Baseado nas informações fornecidas
export const SERVICES = [
  {
    id: 1,
    title: 'Aposentadorias',
    description: 'Planejamos e requeremos sua aposentadoria da forma mais vantajosa: por Idade, Tempo de Contribuição, Especial, PcD e Revisões.',
    icon: 'calendar',
    details: [
      'Aposentadoria por Idade',
      'Aposentadoria por Tempo de Contribuição',
      'Aposentadoria Especial',
      'Aposentadoria da Pessoa com Deficiência (PcD)',
      'Revisão de Aposentadoria'
    ]
  },
  {
    id: 2,
    title: 'BPC/LOAS',
    description: 'Benefício de Prestação Continuada para idosos 65+ e pessoas com deficiência de baixa renda, incluindo autismo e doenças graves.',
    icon: 'heart',
    details: [
      'BPC para idosos (65+ anos)',
      'BPC para Pessoas com Deficiência',
      'Autismo e Doenças Mentais',
      'Câncer e Cardiopatia Grave',
      'Tuberculose e Asma Grave',
      'Deficiência Visual',
      'Esclerose Múltipla'
    ]
  },
  {
    id: 3,
    title: 'Auxílios e Benefícios',
    description: 'Auxílio-Doença, Auxílio-Acidente, Salário-Maternidade, Auxílio-Reclusão e Pensão por Morte com acompanhamento completo.',
    icon: 'shield-check',
    details: [
      'Auxílio-Doença (Incapacidade Temporária)',
      'Auxílio-Acidente',
      'Salário-Maternidade',
      'Auxílio-Reclusão',
      'Pensão por Morte'
    ]
  },
  {
    id: 4,
    title: 'Revisão de Benefícios',
    description: 'Seu benefício foi calculado errado? Revisamos e corrigimos para que você receba o valor justo, com retroativos.',
    icon: 'refresh-cw',
    details: [
      'Revisão de cálculo',
      'Correção de valores',
      'Recuperação de retroativos',
      'Análise de vínculos',
      'Regularização de CNIS'
    ]
  },
  {
    id: 5,
    title: 'Planejamento Previdenciário',
    description: 'Análise criteriosa do seu caso, melhor momento para se aposentar e estratégias para maximizar seus benefícios.',
    icon: 'file-text',
    details: [
      'Análise criteriosa do caso',
      'Melhor momento para aposentar',
      'Regularização de CNIS',
      'Revisão de Vínculos',
      'Estratégia para maximizar benefícios',
      'Assessoria preventiva'
    ]
  },
  {
    id: 6,
    title: 'Contestações e Recursos',
    description: 'Contestação de decisões administrativas e judiciais desfavoráveis, defendendo seus direitos perante os órgãos competentes.',
    icon: 'clock',
    details: [
      'Recursos administrativos',
      'Recursos judiciais',
      'Contestação de negativas',
      'Defesa de direitos',
      'Acompanhamento processual'
    ]
  },
] as const;

// Steps Data
export const STEPS = [
  {
    step: 1,
    title: 'Consulta Gratuita',
    description: 'Entre em contato pelo WhatsApp para uma análise inicial gratuita e sem compromisso do seu caso.',
  },
  {
    step: 2,
    title: 'Análise Especializada',
    description: 'Nossa equipe analisa seus documentos e histórico contributivo com atenção aos detalhes.',
  },
  {
    step: 3,
    title: 'Estratégia Personalizada',
    description: 'Elaboramos um planejamento jurídico artesanal e humanizado para maximizar seus direitos.',
  },
  {
    step: 4,
    title: 'Acompanhamento Total',
    description: 'Cuidamos de todo o processo até você conquistar o benefício que merece.',
  },
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Maria da Silva',
    location: 'Rio de Janeiro, RJ',
    text: 'A Dra. Raquel é uma profissional excepcional! Consegui minha aposentadoria em tempo recorde. Atendimento humanizado e muito competente.',
    result: 'Aposentadoria concedida',
  },
  {
    id: 2,
    name: 'João Santos',
    location: 'São Paulo, SP',
    text: 'Depois de anos tentando sozinho, a Dra. Raquel conseguiu meu BPC/LOAS em poucos meses. Gratidão eterna!',
    result: 'BPC/LOAS aprovado',
  },
  {
    id: 3,
    name: 'Ana Paula Costa',
    location: 'Belo Horizonte, MG',
    text: 'A revisão do meu benefício aumentou significativamente meu valor mensal. Profissional séria e dedicada.',
    result: 'Revisão aprovada +35%',
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    location: 'Brasília, DF',
    text: 'Atendimento rápido e eficiente. A Dra. Raquel realmente entende de direito previdenciário. Recomendo!',
    result: 'Auxílio-Doença concedido',
  },
  {
    id: 5,
    name: 'Fernanda Lima',
    location: 'Porto Alegre, RS',
    text: 'Consegui minha aposentadoria especial graças ao trabalho impecável da Dra. Raquel. Vale cada centavo!',
    result: 'Aposentadoria Especial',
  },
  {
    id: 6,
    name: 'Roberto Almeida',
    location: 'Salvador, BA',
    text: 'Profissional extremamente competente e humana. Meu processo foi conduzido com excelência do início ao fim.',
    result: 'Pensão por Morte aprovada',
  },
  {
    id: 7,
    name: 'Juliana Martins',
    location: 'Curitiba, PR',
    text: 'A Dra. Raquel é uma verdadeira especialista! Conseguiu reverter uma negativa do INSS e garantir meu direito.',
    result: 'Recurso ganho',
  },
  {
    id: 8,
    name: 'Pedro Henrique',
    location: 'Fortaleza, CE',
    text: 'Atendimento nacional de qualidade! Mesmo à distância, recebi todo suporte necessário. Muito satisfeito!',
    result: 'Aposentadoria por Idade',
  },
];

// Stats Data
export const STATS = [
  { value: 447, suffix: '', label: 'Casos Ganhos', prefix: '' },
  { value: 98, suffix: '%', label: 'Clientes Satisfeitos', prefix: '' },
  { value: 15, suffix: '', label: 'Anos de Experiência', prefix: '' },
  { value: 137, suffix: '', label: 'Cidades Atendidas', prefix: '' },
];

// Target Audience
export const TARGET_AUDIENCE = [
  'Aposentados e Pensionistas',
  'Trabalhadores Urbanos e Rurais',
  'Beneficiários de LOAS/BPC',
  'Idosos com 65 anos ou mais',
  'Pessoas com Deficiência',
  'Autistas',
  'Portadores de Doenças Graves',
  'Dependentes de Segurados Falecidos',
  'Trabalhadoras CLT',
  'Empregadas Domésticas',
  'Contribuintes Individuais',
  'MEIs',
  'Trabalhadoras Avulsas',
  'Seguradas Especiais (Rural)',
  'Desempregadas (período de graça)',
  'Adotantes ou Guarda Judicial'
];

// FAQ Data
export const FAQ = [
  {
    question: 'Quanto custa a consulta inicial?',
    answer: 'A consulta inicial é 100% GRATUITA e sem compromisso. Entre em contato pelo WhatsApp para analisarmos seu caso.'
  },
  {
    question: 'Atendem em todo o Brasil?',
    answer: 'Sim! Atendemos clientes em todo território nacional, com processos 100% digitais e seguros.'
  },
  {
    question: 'Quanto tempo demora para conseguir o benefício?',
    answer: 'O prazo varia de acordo com cada caso e órgão responsável, mas acompanhamos todo o processo para garantir a maior agilidade possível.'
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Trabalhamos com honorários justos e transparentes. Consulte-nos para conhecer as condições especiais para seu caso.'
  }
];
