// Dados completos dos serviços para páginas individuais

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  headline: string;
  subheadline: string;
  image: string;
  imageAlt: string;
  
  // Bloco de Dor
  painPoints: {
    title: string;
    description: string;
    questions: string[];
  };
  
  // Explicação do Serviço
  explanation: {
    title: string;
    description: string;
    details: string[];
  };
  
  // Benefícios
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  
  // Prova Social
  testimonials: {
    name: string;
    location: string;
    text: string;
    result: string;
  }[];
  
  // Como Funciona
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  
  // CTA Final
  finalCTA: {
    headline: string;
    subheadline: string;
    urgency: string;
  };
  
  // WhatsApp
  whatsappMessage: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'aposentadorias',
    title: 'Aposentadorias',
    subtitle: 'Planejamento Estratégico para Maximizar Seu Benefício',
    headline: 'Garanta a Aposentadoria que Você Merece',
    subheadline: 'Planejamento jurídico especializado para você receber o máximo valor possível do INSS',
    image: '/images/serviços/RAQUEL ESCRITORIO 4.JPG',
    imageAlt: 'Dra. Raquel Rinaldi - Especialista em Aposentadoria Previdenciária',
    
    painPoints: {
      title: 'Você trabalhou a vida inteira. Merece receber o que é seu por direito.',
      description: 'Muitos brasileiros deixam de receber valores importantes todos os meses por falta de um planejamento previdenciário adequado.',
      questions: [
        'Você sabe qual é o melhor momento para se aposentar?',
        'Está recebendo o valor máximo a que tem direito?',
        'Conhece as regras de transição que podem beneficiar o seu caso?',
        'Tem certeza de que seu tempo de contribuição está corretamente registrado no INSS?',
        'Um bom planejamento faz toda a diferença no valor do seu benefício e na sua segurança futura.'
      ]
    },
    
    explanation: {
      title: 'Como Funciona o Planejamento de Aposentadoria',
      description: 'A aposentadoria é um dos momentos mais importantes da sua vida — e um planejamento inadequado pode resultar na perda de valores significativos ao longo dos anos. Planejar corretamente é garantir segurança, tranquilidade e o melhor benefício possível para o seu futuro.',
      details: [
        'Analisamos todo seu histórico contributivo no CNIS',
        'Identificamos o melhor tipo de aposentadoria para seu caso',
        'Calculamos o momento ideal para requerer o benefício',
        'Verificamos possibilidade de reconhecimento de tempo especial',
        'Regularizamos vínculos e contribuições não computadas',
        'Garantimos que você receba o valor máximo possível',
        'Realizamos revisões quando necessário'
      ]
    },
    
    benefits: [
      {
        icon: 'trending-up',
        title: 'Maximização do Benefício',
        description: 'Estratégias jurídicas para você receber o maior valor possível de aposentadoria'
      },
      {
        icon: 'shield-check',
        title: 'Segurança Jurídica',
        description: 'Acompanhamento de Doutora em Direito com 15 anos de experiência'
      },
      {
        icon: 'clock',
        title: 'Timing Perfeito',
        description: 'Identificamos o momento exato para você se aposentar com o melhor benefício'
      },
      {
        icon: 'file-check',
        title: 'Regularização Completa',
        description: 'Corrigimos vínculos, contribuições e tempo de serviço no CNIS'
      }
    ],
    
    testimonials: [
      {
        name: 'Maria da Silva',
        location: 'Rio de Janeiro, RJ',
        text: 'A Dra. Raquel fez um planejamento impecável. Consegui me aposentar 2 anos antes do que imaginava, com um valor 30% maior!',
        result: 'Aposentadoria +30% do esperado'
      },
      {
        name: 'João Santos',
        location: 'São Paulo, SP',
        text: 'Profissional excepcional! Identificou tempo especial que eu nem sabia que tinha direito. Minha aposentadoria saiu em 4 meses.',
        result: 'Aposentadoria Especial concedida'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Contato via WhatsApp',
        description: 'Entre em contato e conte sua situação. Análise inicial gratuita e sem compromisso.'
      },
      {
        step: 2,
        title: 'Análise Completa do Caso',
        description: 'Estudamos seu CNIS, histórico contributivo e identificamos a melhor estratégia.'
      },
      {
        step: 3,
        title: 'Planejamento Estratégico',
        description: 'Elaboramos um plano personalizado para maximizar seu benefício previdenciário.'
      },
      {
        step: 4,
        title: 'Conquista do Resultado',
        description: 'Acompanhamos todo o processo até você receber sua aposentadoria.'
      }
    ],
    
    finalCTA: {
      headline: 'Não perca qualidade de vida: conquiste a melhor aposentadoria que você pode ter',
      subheadline: 'Cada mês sem o planejamento adequado pode representar benefícios que você deixa de aproveitar',
      urgency: ''
    },
    
    whatsappMessage: 'Olá Dra. Raquel, gostaria de uma análise do meu caso de aposentadoria.'
  },
  
  {
    slug: 'bpc-loas',
    title: 'BPC/LOAS',
    subtitle: 'Benefício de Prestação Continuada para Quem Mais Precisa',
    headline: 'Você Tem Direito ao BPC/LOAS?',
    subheadline: 'Benefício de um salário mínimo mensal para idosos 65+ e pessoas com deficiência de baixa renda',
    image: '/images/serviços/RAQUEL ESCRITORIO 5.JPG',
    imageAlt: 'Dra. Raquel Rinaldi - Especialista em BPC/LOAS',
    
    painPoints: {
      title: 'Milhares de brasileiros têm direito ao BPC/LOAS e não sabem.',
      description: 'O Benefício de Prestação Continuada pode transformar a vida de quem mais precisa — mas muitos pedidos ainda são negados indevidamente pelo INSS.',
      questions: [
        'Você tem 65 anos ou mais e possui renda familiar baixa?',
        'Possui alguma deficiência que impacta sua vida diária?',
        'Tem filho(a) com autismo ou outra deficiência?',
        'Seu pedido de BPC já foi negado de forma injusta?',
        'Com a orientação correta, é possível reverter negativas e garantir esse direito.'
      ]
    },
    
    explanation: {
      title: 'O Que é o BPC/LOAS?',
      description: 'O Benefício de Prestação Continuada (BPC/LOAS) é um direito garantido pela Constituição Federal. É um salário mínimo mensal para quem realmente precisa.',
      details: [
        'Não precisa ter contribuído para o INSS',
        'Benefício de um salário mínimo por mês',
        'Para idosos com 65 anos ou mais',
        'Para pessoas com deficiência de qualquer idade',
        'Renda familiar per capita de até 1/4 do salário mínimo',
        'Inclui autismo, doenças mentais, câncer, cardiopatia grave e outras condições'
      ]
    },
    
    benefits: [
      {
        icon: 'heart',
        title: 'Dignidade e Segurança',
        description: 'Um salário mínimo mensal garantido para viver com dignidade'
      },
      {
        icon: 'users',
        title: 'Para Toda Família',
        description: 'Benefício também para crianças e jovens com deficiência ou autismo'
      },
      {
        icon: 'shield',
        title: 'Sem Contribuição',
        description: 'Não é necessário ter contribuído para o INSS'
      },
      {
        icon: 'check-circle',
        title: 'Direito Garantido',
        description: 'Previsto na Constituição Federal - é seu direito por lei'
      }
    ],
    
    testimonials: [
      {
        name: 'Ana Paula Costa',
        location: 'Belo Horizonte, MG',
        text: 'Meu filho autista foi negado 2 vezes. A Dra. Raquel conseguiu o BPC em 3 meses. Mudou nossa vida!',
        result: 'BPC/LOAS aprovado'
      },
      {
        name: 'Carlos Eduardo',
        location: 'Brasília, DF',
        text: 'Idoso de 67 anos, não sabia que tinha direito. A Dra. Raquel me ajudou a conseguir o benefício.',
        result: 'BPC para idoso concedido'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Fale comigo',
        description: 'Conte sua situação pelo WhatsApp. Vamos avaliar se você tem direito ao BPC/LOAS.'
      },
      {
        step: 2,
        title: 'Análise Documental',
        description: 'Analisamos sua documentação e situação socioeconômica para fundamentar o pedido.'
      },
      {
        step: 3,
        title: 'Estratégia Jurídica',
        description: 'Elaboramos a melhor estratégia para aprovação do seu benefício.'
      },
      {
        step: 4,
        title: 'Conquista do Benefício',
        description: 'Acompanhamos até você receber o BPC/LOAS que merece.'
      }
    ],
    
    finalCTA: {
      headline: 'Não Fique Sem o Benefício que é Seu por Direito',
      subheadline: 'Milhares de pessoas conseguem o BPC/LOAS todos os meses',
      urgency: 'Consulta gratuita - Descubra se você tem direito'
    },
    
    whatsappMessage: 'Olá Dra. Raquel, gostaria de saber se tenho direito ao BPC/LOAS.'
  },
  
  {
    slug: 'revisao-de-beneficios',
    title: 'Revisão de Benefícios',
    subtitle: 'Corrija Erros e Receba o Valor Justo',
    headline: 'Seu benefício pode estar sendo calculado de forma incorreta — e isso pode impactar diretamente o valor que você recebe',
    subheadline: 'Milhares de brasileiros recebem menos do que deveriam. Revisamos e corrigimos para garantir o valor justo, com pagamento de retroativos.',
    image: '/images/serviços/revisão .jpeg',
    imageAlt: 'Dra. Raquel Rinaldi - Especialista em Revisão de Benefícios Previdenciários',
    
    painPoints: {
      title: 'Você pode estar deixando de receber o valor correto todos os meses.',
      description: 'Erros no cálculo do INSS são mais comuns do que se imagina — e uma revisão pode aumentar seu benefício e recuperar valores atrasados.',
      questions: [
        'Seu benefício foi calculado corretamente?',
        'Todas as suas contribuições foram consideradas?',
        'Você conhece a Revisão da Vida Toda?',
        'Sabe se tem direito a valores retroativos?'
      ]
    },
    
    explanation: {
      title: 'Como Funciona a Revisão de Benefícios',
      description: 'A revisão de benefícios do INSS é o processo de análise do seu benefício para verificar se o valor foi calculado corretamente ou se há erros que podem ser corrigidos. Isso pode incluir, por exemplo: contribuições que não foram consideradas; períodos de trabalho ignorados; aplicação incorreta das regras previdenciárias; direito a teses revisionais, como a chamada revisão da vida toda. Se for identificado algum erro, é possível solicitar a correção junto ao INSS ou pela via judicial. Quando a revisão é aceita, o beneficiário pode ter: aumento no valor mensal do benefício; pagamento de valores atrasados (retroativos). É uma forma de garantir que você esteja recebendo exatamente o que a lei assegura.',
      details: [
        'Revisão da Vida Toda - considera todas as contribuições desde 1994',
        'Revisão do Teto - para quem contribuiu acima do teto',
        'Revisão de Atividade Especial - reconhecimento de tempo especial',
        'Revisão do Buraco Negro - período de 1999 a 2003',
        'Correção de vínculos e salários de contribuição',
        'Recuperação de valores retroativos dos últimos 5 anos'
      ]
    },
    
    benefits: [
      {
        icon: 'trending-up',
        title: 'Aumento do Benefício',
        description: 'Correção pode aumentar seu benefício em até 50% ou mais'
      },
      {
        icon: 'file-check',
        title: 'Valores Retroativos',
        description: 'Receba as diferenças dos últimos 5 anos de uma só vez'
      },
      {
        icon: 'shield-check',
        title: 'Análise Especializada',
        description: 'Doutora em Direito analisa cada detalhe do seu caso'
      },
      {
        icon: 'clock',
        title: 'Sem Burocracia',
        description: 'Cuidamos de todo o processo judicial ou administrativo'
      }
    ],
    
    testimonials: [
      {
        name: 'José Santos',
        location: 'São Paulo, SP',
        text: 'A revisão aumentou meu benefício em 40%! Recebi R$ 85 mil de retroativos. A Dra. Raquel é excepcional!',
        result: 'Revisão aprovada +40%'
      },
      {
        name: 'Roberta Lima',
        location: 'Brasília, DF',
        text: 'Nem sabia que tinha direito à revisão. Consegui R$ 120 mil de atrasados. Valeu cada centavo!',
        result: 'R$ 120 mil recebidos'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Análise Gratuita',
        description: 'Analisamos seu benefício gratuitamente para verificar se há direito à revisão.'
      },
      {
        step: 2,
        title: 'Cálculo Detalhado',
        description: 'Fazemos cálculos precisos para identificar o valor correto do seu benefício.'
      },
      {
        step: 3,
        title: 'Ação de Revisão',
        description: 'Entramos com pedido administrativo ou judicial para corrigir seu benefício.'
      },
      {
        step: 4,
        title: 'Recebimento',
        description: 'Você recebe o aumento mensal e os valores retroativos.'
      }
    ],
    
    finalCTA: {
      headline: 'Não Perca Mais Dinheiro',
      subheadline: 'Cada mês que passa sem revisar é dinheiro que você deixa de receber',
      urgency: 'Análise gratuita - Descubra quanto você pode receber'
    },
    
    whatsappMessage: 'Olá Dra. Raquel, gostaria de uma análise gratuita para revisão do meu benefício.'
  },

  {
    slug: 'auxilios-e-beneficios',
    title: 'Auxílios e Benefícios',
    subtitle: 'Proteção Quando Você Mais Precisa',
    headline: 'Garanta os Auxílios que São Seus por Direito',
    subheadline: 'Auxílio-Doença, Salário-Maternidade, Pensão por Morte e mais. Acompanhamento completo do início ao fim.',
    image: '/images/serviços/RAQUEL ESCRITORIO 6.JPG',
    imageAlt: 'Dra. Raquel Rinaldi - Especialista em Auxílios e Benefícios Previdenciários',
    
    painPoints: {
      title: 'Quando a vida muda, você precisa de segurança.',
      description: 'Doença, maternidade, acidente ou a perda de um ente querido. Em momentos como esses, você pode ter direito a benefícios que fazem toda a diferença.',
      questions: [
        'Está doente e impossibilitado de trabalhar?',
        'Sofreu um acidente que deixou sequelas?',
        'Está grávida e precisa do salário-maternidade?',
        'Perdeu um familiar que era segurado do INSS?',
        'Conhecer e acessar seus direitos é essencial para garantir proteção e segurança nesses momentos.'
      ]
    },
    
    explanation: {
      title: 'Auxílios e Benefícios Disponíveis',
      description: 'O INSS oferece diversos benefícios para proteger você e sua família em momentos de necessidade. Garantimos que você receba tudo que tem direito.',
      details: [
        'Auxílio-Doença - para quem está temporariamente incapaz de trabalhar',
        'Auxílio-Acidente - para sequelas que reduzem capacidade de trabalho',
        'Salário-Maternidade - 120 dias para mães (CLT, autônomas, MEI)',
        'Pensão por Morte - para dependentes de segurado falecido',
        'Auxílio-Reclusão - para família de segurado preso',
        'Acompanhamento em perícias médicas do INSS'
      ]
    },
    
    benefits: [
      {
        icon: 'heart',
        title: 'Proteção Familiar',
        description: 'Segurança financeira para você e sua família nos momentos difíceis'
      },
      {
        icon: 'shield',
        title: 'Acompanhamento em Perícias',
        description: 'Orientação especializada para perícias médicas do INSS'
      },
      {
        icon: 'users',
        title: 'Para Toda Família',
        description: 'Benefícios para mães, dependentes e familiares'
      },
      {
        icon: 'check-circle',
        title: 'Processo Rápido',
        description: 'Agilizamos seu processo para você receber o quanto antes'
      }
    ],
    
    testimonials: [
      {
        name: 'Fernanda Lima',
        location: 'Porto Alegre, RS',
        text: 'Consegui meu salário-maternidade como MEI em apenas 2 meses. A Dra. Raquel foi essencial!',
        result: 'Salário-Maternidade aprovado'
      },
      {
        name: 'Carlos Eduardo',
        location: 'Brasília, DF',
        text: 'Meu auxílio-doença foi negado 2 vezes. A Dra. Raquel conseguiu reverter e ainda orientou na perícia.',
        result: 'Auxílio-Doença concedido'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Consulta Inicial',
        description: 'Conte sua situação e vamos identificar qual benefício você tem direito.'
      },
      {
        step: 2,
        title: 'Documentação',
        description: 'Orientamos sobre todos os documentos necessários para o pedido.'
      },
      {
        step: 3,
        title: 'Pedido e Acompanhamento',
        description: 'Fazemos o pedido e acompanhamos todo o processo, incluindo perícias.'
      },
      {
        step: 4,
        title: 'Concessão',
        description: 'Você recebe seu benefício com toda segurança jurídica.'
      }
    ],
    
    finalCTA: {
      headline: 'Não Enfrente Isso Sozinho',
      subheadline: 'Tenha o suporte jurídico especializado que você merece',
      urgency: 'Consulta gratuita - Descubra seus direitos agora'
    },
    
    whatsappMessage: 'Olá Dra. Raquel, preciso de ajuda com auxílios e benefícios previdenciários.'
  },

  {
    slug: 'planejamento-previdenciario',
    title: 'Planejamento Previdenciário',
    subtitle: 'Estratégia Personalizada para Seu Futuro',
    headline: 'Planeje Hoje, Garanta Seu Futuro',
    subheadline: 'Análise estratégica do seu caso para definir o melhor momento de se aposentar e maximizar seus benefícios.',
    image: '/images/serviços/RAQUEL ESCRITORIO 9.JPG',
    imageAlt: 'Dra. Raquel Rinaldi - Especialista em Planejamento Previdenciário',
    
    painPoints: {
      title: 'Decisões erradas hoje podem custar caro no futuro.',
      description: 'O planejamento previdenciário é essencial para que você tome as melhores decisões e alcance o melhor benefício possível.',
      questions: [
        'Quando é o melhor momento para se aposentar?',
        'Qual regra de transição é mais vantajosa para o seu caso?',
        'Vale a pena continuar contribuindo?',
        'Seu CNIS está regularizado para evitar perdas de direitos?'
      ]
    },
    
    explanation: {
      title: 'O Que é Planejamento Previdenciário',
      description: 'É uma análise estratégica completa da sua situação previdenciária para tomar decisões informadas e maximizar seus benefícios futuros.',
      details: [
        'Análise completa do seu histórico contributivo (CNIS)',
        'Identificação do melhor momento para se aposentar',
        'Cálculo de diferentes cenários de aposentadoria',
        'Regularização de vínculos e contribuições',
        'Estratégias para aumentar o valor do benefício',
        'Orientação sobre contribuições futuras',
        'Assessoria preventiva para evitar problemas'
      ]
    },
    
    benefits: [
      {
        icon: 'trending-up',
        title: 'Maximização de Benefícios',
        description: 'Estratégias para você receber o maior valor possível'
      },
      {
        icon: 'clock',
        title: 'Timing Perfeito',
        description: 'Identifique o momento exato para se aposentar'
      },
      {
        icon: 'file-check',
        title: 'Regularização',
        description: 'Corrija problemas no CNIS antes de se aposentar'
      },
      {
        icon: 'shield-check',
        title: 'Segurança',
        description: 'Tome decisões informadas com orientação especializada'
      }
    ],
    
    testimonials: [
      {
        name: 'Pedro Henrique',
        location: 'Fortaleza, CE',
        text: 'O planejamento me mostrou que eu poderia me aposentar 3 anos antes! Economizei tempo e ganhei dinheiro.',
        result: 'Aposentadoria antecipada'
      },
      {
        name: 'Juliana Martins',
        location: 'Curitiba, PR',
        text: 'Descobri que tinha tempo especial que não sabia. O planejamento aumentou meu benefício em 25%!',
        result: 'Benefício +25%'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Análise do CNIS',
        description: 'Estudamos todo seu histórico contributivo e identificamos oportunidades.'
      },
      {
        step: 2,
        title: 'Simulações',
        description: 'Calculamos diferentes cenários para encontrar a melhor opção.'
      },
      {
        step: 3,
        title: 'Plano Estratégico',
        description: 'Elaboramos um plano personalizado com todas as orientações.'
      },
      {
        step: 4,
        title: 'Acompanhamento',
        description: 'Acompanhamos você até o momento ideal de requerer o benefício.'
      }
    ],
    
    finalCTA: {
      headline: 'Invista no Seu Futuro Hoje',
      subheadline: 'Um bom planejamento pode significar milhares de reais a mais na sua aposentadoria',
      urgency: 'Consulta gratuita - Faça seu planejamento agora'
    },
    
    whatsappMessage: 'Olá Dra. Raquel, gostaria de fazer um planejamento previdenciário.'
  },
  {
    slug: 'especializacao-em-atendimento-tea',
    title: 'Especialização em atendimento TEA',
    subtitle: 'Atuação Jurídica na Defesa Integral dos Direitos dos Autistas',
    headline: 'Defendendo a Dignidade, Saúde, Educação e Futuro das Pessoas Autistas',
    subheadline: 'Advocacia altamente especializada para autistas e famílias atípicas conquistarem seus direitos constitucionais.',
    image: '/images/serviços/novo.jpeg',
    imageAlt: 'Dra. Raquel Rinaldi - Especialista em Direitos dos Autistas e Famílias TEA',
    
    painPoints: {
      title: 'A legislação garante inclusão e direitos, mas o acesso real costuma ser negado.',
      description: 'Muitas famílias atípicas enfrentam negativas arbitrárias de planos de saúde, barreiras na inclusão escolar e dificuldades para obter o BPC/LOAS ou isenções.',
      questions: [
        'Seu plano de saúde negou ou limitou o tratamento de terapias especializadas (ABA)?',
        'A escola recusa matrícula, cobra taxa extra ou nega o mediador escolar para seu filho?',
        'Você teve o pedido de BPC/LOAS indeferido sob alegação de renda ou falta de incapacidade?',
        'Sabia que famílias de autistas têm direito a isenções tributárias significativas de IPVA, IPI, ICMS?',
        'Nossa atuação garante que a lei seja cumprida na prática, com todo o acolhimento que sua família merece.'
      ]
    },
    
    explanation: {
      title: 'Proteção e Defesa Integral dos Direitos Autistas',
      description: 'Oferecemos uma assessoria jurídica completa, artesanal e profundamente especializada em todas as frentes de direito ligadas ao Transtorno do Espectro Autista (TEA). Nosso objetivo é poupar as famílias do desgaste burocrático e assegurar tudo que a lei lhes concede.',
      details: [
        'Garantia de Terapias Multidisciplinares pelo Método ABA sem limitação de sessões',
        'Pedidos judiciais urgentes com liminares contra negativas de planos de saúde',
        'Garantia de Mediador Escolar especializado e adaptações pedagógicas (PEI) gratuitas',
        'Combate à cobrança de taxas extras e recusa de matrículas por instituições de ensino',
        'Obtenção e restabelecimento do Benefício de Prestação Continuada (BPC/LOAS)',
        'Isenções completas de tributos (IPVA, IPI, ICMS) na aquisição de veículos',
        'Planejamento previdenciário atípico, curatela humanizada e proteção patrimonial sucessória'
      ]
    },
    
    benefits: [
      {
        icon: 'heart',
        title: 'Atendimento Acolhedor',
        description: 'Advocacia sensível às dores e necessidades das mães atípicas e suas famílias'
      },
      {
        icon: 'shield-check',
        title: 'Domínio da Legislação',
        description: 'Vasta expertise nas leis inclusivas (Lei Berenice Piana, Estatuto do PCD)'
      },
      {
        icon: 'trending-up',
        title: 'Atuação Estratégica',
        description: 'Mais de 15 anos de trajetória com sólida taxa de resoluções favoráveis'
      },
      {
        icon: 'file-check',
        title: 'Ações Ágeis e Liminares',
        description: 'Pedidos judiciais rápidos para início imediato ou continuidade de terapias'
      }
    ],
    
    testimonials: [
      {
        name: 'Juliana Medeiros',
        location: 'Rio de Janeiro, RJ',
        text: 'A Dra. Raquel foi o anjo que apareceu em nossas vidas. O plano de saúde havia cortado as terapias ABA do meu filho de 4 anos. Ela entrou com ação e em menos de 48 horas o juiz concedeu a liminar obrigando o restabelecimento total. Indico de olhos fechados!',
        result: 'Liminar de Terapias ABA deferida em 48h'
      },
      {
        name: 'Márcia Ferreira',
        location: 'São Paulo, SP',
        text: 'A escola do meu filho autista dizia que não tinha obrigação de fornecer mediador sem cobrar a mais. Graças à Dra. Raquel, garantimos o direito ao mediador e à adaptação pedagógica correta na Justiça. O desenvolvimento dele disparou!',
        result: 'Inclusão Escolar com Mediador Garantida'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Análise do Laudo e Contrato',
        description: 'Avaliamos detalhadamente os laudos médicos, contratos de planos de saúde e documentos escolares para traçar a melhor estratégia.'
      },
      {
        step: 2,
        title: 'Estruturação Jurídica',
        description: 'Coletamos evidências e elaboramos peças jurídicas robustas, focadas no direito à saúde, educação ou benefício específico.'
      },
      {
        step: 3,
        title: 'Medidas de Urgência',
        description: 'Protocolamos ações judiciais urgentes com pedidos de liminar para garantir direitos essenciais de imediato.'
      },
      {
        step: 4,
        title: 'Acompanhamento Próximo',
        description: 'Mantemos um contato contínuo e humanizado com as famílias, cuidando do processo até a vitória definitiva.'
      }
    ],
    
    finalCTA: {
      headline: 'Garanta o Desenvolvimento e a Dignidade de Quem Você Mais Ama',
      subheadline: 'Não se resigne com negativas arbitrárias. Defendemos os direitos do seu filho com acolhimento e a máxima dedicação jurídica.',
      urgency: 'Consulta jurídica especializada - Entenda os direitos do autista agora'
    },
    
    whatsappMessage: 'Olá Dra. Raquel, gostaria de agendar uma consulta sobre direitos dos autistas e da minha família.'
  }
];

// Função helper para buscar serviço por slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.slug === slug);
};

// Lista de slugs para geração de rotas
export const servicesSlugs = servicesData.map(service => service.slug);
