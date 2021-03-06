const knaCategories = () => {
  return {
    '000': 'GENERALIDADES',
    '001': 'CONHECIMENTO',
    '002': 'O LIVRO',
    '003': 'SISTEMAS',
    '004': 'PROCESSAMENTO DE DADOS. CIÊNCIA DA COMPUTAÇÃO (INFORMÁTICA)',
    '005': 'PROGRAMAÇAO DE COMPUTADOR, PROGRAMAS, DADOS',
    '006': 'MÉTODOS ESPECIAIS DE COMPUTADOR',
    '010': 'BIBLIOGRAFIA',
    '020': 'BIBLIOTECONOMIA E CIÊNCIA DA INFORMAÇÃO',
    '030': 'ENCICLOPÉDIAS GERAIS',
    '050': 'PUBLICAÇÕES SERIADAS',
    '060': 'ORGANIZAÇÕES DE CARÁTER GERAL E MUSEOLOGIA',
    '070': 'MÍDIA DOCUMENTÁRIA, JORNALISMO, EDITORES E EDIÇÃO',
    '080': 'COLETÂNEAS',
    '090': 'MANUSCRITOS E LIVROS RAROS',
    '100': 'FILOSOFIA',
    '110': 'METAFÍSICA',
    '120': 'EPISTEMOLOGIA, CAUSALIDADE, O HOMEM',
    '130': 'FENÔMENOS E ARTES PARANORMAIS. PARAPSICOLOGIA E OCULTISMO',
    '140': 'SISTEMAS FILOSÓFICOS',
    '150': 'PSICOLOGIA',
    '160': 'LÓGICA',
    '170': 'ÉTICA (FILOSOFIA MORAL)',
    '180': 'FILOSOFIA ANTIGA, MEDIEVAL, ORIENTAL',
    '190': 'FILOSOFIA MODERNA. FILOSOFIA CRISTÃ',
    '200': 'RELIGIÃO',
    '210': 'FILOSOFIA E TEORIA DA RELIGIÃO',
    '220': 'BÍBLIA',
    '230': 'TEOLOGIA CRISTÃ. DOUTRINA CRISTÃ',
    '240': 'CRISTIANISMO. TEOLOGIA MORAL E DEVOCIONAL',
    '250': 'IGREJA CRISTÃ E ORDENS RELIGIOSAS',
    '260': 'CRISTIANISMO. TEOLOGIA SOCIAL E ECLESIÁSTICA',
    '270': 'IGREJA CRISTÃ. HISTÓRIA DA IGREJA',
    '280': 'IGREJA CRISTÃ. CREDOS E SEITAS',
    '290': 'RELIGIÃO COMPARADA E OUTRAS RELIGIÕES',
    '300': 'CIÊNCIAS SOCIAIS',
    '301': 'SOCIOLOGIA E ANTROPOLOGIA',
    '302': 'INTERAÇÃO SOCIAL. COMUNICAÇÃO',
    '303': 'PROCESSOS SOCIAIS',
    '304': 'FATORES INFLUENCIANDO O COMPORTAMENTO SOCIAL',
    '305': 'GRUPOS SOCIAIS',
    '306': 'CULTURA E INSTITUIÇÕES',
    '307': 'COMUNIDADES',
    '309': 'CONDIÇÕES SOCIAIS',
    '310': 'ESTATÍSTICA',
    '320': 'CIÊNCIA POLÍTICA (POLÍTICA E GOVERNO)',
    '330': 'ECONOMIA',
    '340': 'DIREITO',
    '341': 'DIREITO PÚBLICO',
    '342': 'DIREITO PRIVADO',
    '343': 'DIREITO CANÔNICO E ECLESIÁSTICO',
    '344': 'DIREITO ROMANO',
    '350': 'ADMINISTRAÇÃO PÚBLICA. PODER EXECUTIVO.CIÊNCIA MILITAR',
    '360': 'PATOLOGIA SOCIAL. SERVIÇOS SOCIAIS. ASSOCIAÇÕES',
    '370': 'EDUCAÇÃO',
    '380': 'COMÉRCIO, COMUNICAÇÕES, TRANSPORTES',
    '390': 'COSTUMES, ETIQUETA, FOLCLORE',
    '400': 'LINGUAGEM E LÍNGUA',
    '410': 'LINGUÍSTICA',
    '420': 'LÍNGUA INGLESA',
    '430': 'LÍNGUAS GERMÂNICAS. ALEMÃO',
    '440': 'LÍNGUAS ROMÂNICAS. FRANCÊS',
    '450': 'LÍNGUAS ITALIANA, SARDO, DALMÁCIO, ROMENO, RETRO-ROMÂNICO',
    '460': 'LÍNGUA ESPANHOLA E PORTUGUESA',
    '470': 'LÍNGUAS ITÁLICAS. LATIM',
    '480': 'LÍNGUA HELÊNICAS. GREGO',
    '490': 'OUTRAS LÍNGUAS',
    '500': 'CIÊNCIAS NATURAIS. CIÊNCIAS APLICADAS',
    '510': 'MATEMÁTICA',
    '520': 'ASTRONOMIA',
    '530': 'FÍSICA',
    '540': 'QUÍMICA E CIÊNCIAS AFINS',
    '550': 'CIÊNCIAS DA TERRA : GEOFÍSICA',
    '560': 'PALEONTOLOGIA, PALEOZOOLOGIA',
    '570': 'CIÊNCIAS DA VIDA. BIOLOGIA',
    '580': 'CIÊNCIAS BOTÂNICAS. JARDINS BOTÂNICOS. PLANTAS',
    '590': 'CIÊNCIAS ZOOLÓGICAS. JARDINS ZOOLÓGICOS. ANIMAIS',
    '600': 'TECNOLOGIA (CIÊNCIAS APLICADAS), PATENTES E INVENÇÕES',
    '610': 'CIÊNCIAS MÉDICAS. SAÚDE PÚBLICA. FARMACOLOGIA. DOENÇAS',
    '620': 'ENGENHARIA',
    '630': 'AGRICULTURA',
    '640': 'ECONOMIA DOMÉSTICA E VIDA FAMILIAR',
    '650': 'PRÁTICA COMERCIAL. NEGÓCIOS',
    '660': 'ENGENHARIA QUÍMICA E TECNOLOGIAS RELACIONADAS',
    '670': 'FÁBRICAS. FABRICAÇÃO DE PRODUTOS',
    '680': 'PRODUTOS MANUFATURADOS',
    '690': 'CONSTRUÇÕES',
    '700': 'BELAS ARTES E ARTES DECORATIVAS',
    '709': 'HISTÓRIA, GEOGRAFIA E TRATAMENTO DE PESSOAS NAS ARTES-BIOGRAFIA',
    '710': 'URBANISMO E ARQUITETURA PAISAGÍSTICA',
    '720': 'ARQUITETURA',
    '730': 'ARTES PLÁSTICAS. ESCULTURA',
    '740': 'DESENHO. ARTES DECORATIVAS E ARTES MENORES',
    '750': 'PINTURA',
    '760': 'ARTES GRÁFICAS, GRAVURAS',
    '770': 'FOTOGRAFIA , ARTE POR COMPUTADOR',
    '780': 'MÚSICA',
    '790': 'RECREAÇÕES E ESPETÁCULOS ARTÍSTICOS',
    '800': 'LITERATURA E RETÓRICA',
    '810': 'LITERATURA AMERICANA',
    '820': 'LITERATURA INGLESA',
    '830': 'LITERATURA ALEMÃ',
    '840': 'LITERATURA DE LÍNGUAS ROMÂNICAS. LITERATURA FRANCESA',
    '850': 'LITERATURAS ITALIANA, ROMENA, RÉTICA',
    '860': 'LITERATURA EM LÍNGUA ESPANHOLA E PORTUGUESA',
    '870': 'LITERATURA ITÁLICA. LITERATURA LATINA',
    '880': 'LITERATURA CLÁSSICA GREGA E LATINA',
    '890':
      'LITERATURAS DE LÍNGUAS DIVERSAS (EXCETO GERMÂNICA, LATINAS E GREGAS)',
    '900': 'GEOGRAFIA. HISTÓRIA E CIÊNCIAS AUXILIARES',
    '909': 'HISTÓRIA UNIVERSAL. CIVILIZAÇÃO',
    '910': 'GEOGRAFIA E VIAGENS',
    '920': 'BIOGRAFIAS',
    '930': 'HISTÓRIA ANTIGA ATÉ CA. 499',
    '940': 'HISTÓRIA. EUROPA',
    '950': 'HISTÓRIA. ÁSIA. EXTREMO ORIENTE',
    '960': 'HISTÓRIA. ÁFRICA',
    '970': 'HISTÓRIA : AMÉRICA DO NORTE',
    '980': 'HISTÓRIA. AMÉRICA DO SUL. AMERICA LATINA',
    '990': 'HISTÓRIA. OCEANIA. OUTRAS REGIÕES. MUNDOS EXTRATERRESTRES'
  }
}

const knaCatArray = () => {
  return [
    { code: '000', description: 'GENERALIDADES' },
    { code: '001', description: 'CONHECIMENTO' },
    { code: '002', description: 'O LIVRO' },
    { code: '003', description: 'SISTEMAS' },
    {
      code: '004',
      description: 'PROCESSAMENTO DE DADOS. CIÊNCIA DA COMPUTAÇÃO (INFORMÁTICA)'
    },
    { code: '005', description: 'PROGRAMAÇAO DE COMPUTADOR, PROGRAMAS, DADOS' },
    { code: '006', description: 'MÉTODOS ESPECIAIS DE COMPUTADOR' },
    { code: '010', description: 'BIBLIOGRAFIA' },
    { code: '020', description: 'BIBLIOTECONOMIA E CIÊNCIA DA INFORMAÇÃO' },
    { code: '030', description: 'ENCICLOPÉDIAS GERAIS' },
    { code: '050', description: 'PUBLICAÇÕES SERIADAS' },
    { code: '060', description: 'ORGANIZAÇÕES DE CARÁTER GERAL E MUSEOLOGIA' },
    {
      code: '070',
      description: 'MÍDIA DOCUMENTÁRIA, JORNALISMO, EDITORES E EDIÇÃO'
    },
    { code: '080', description: 'COLETÂNEAS' },
    { code: '090', description: 'MANUSCRITOS E LIVROS RAROS' },
    { code: '100', description: 'FILOSOFIA' },
    { code: '110', description: 'METAFÍSICA' },
    { code: '120', description: 'EPISTEMOLOGIA, CAUSALIDADE, O HOMEM' },
    {
      code: '130',
      description: 'FENÔMENOS E ARTES PARANORMAIS. PARAPSICOLOGIA E OCULTISMO'
    },
    { code: '140', description: 'SISTEMAS FILOSÓFICOS' },
    { code: '150', description: 'PSICOLOGIA' },
    { code: '160', description: 'LÓGICA' },
    { code: '170', description: 'ÉTICA (FILOSOFIA MORAL)' },
    { code: '180', description: 'FILOSOFIA ANTIGA, MEDIEVAL, ORIENTAL' },
    { code: '190', description: 'FILOSOFIA MODERNA. FILOSOFIA CRISTÃ' },
    { code: '200', description: 'RELIGIÃO' },
    { code: '210', description: 'FILOSOFIA E TEORIA DA RELIGIÃO' },
    { code: '220', description: 'BÍBLIA' },
    { code: '230', description: 'TEOLOGIA CRISTÃ. DOUTRINA CRISTÃ' },
    {
      code: '240',
      description: 'CRISTIANISMO. TEOLOGIA MORAL E DEVOCIONAL'
    },
    { code: '250', description: 'IGREJA CRISTÃ E ORDENS RELIGIOSAS' },
    {
      code: '260',
      description: 'CRISTIANISMO. TEOLOGIA SOCIAL E ECLESIÁSTICA'
    },
    { code: '270', description: 'IGREJA CRISTÃ. HISTÓRIA DA IGREJA' },
    { code: '280', description: 'IGREJA CRISTÃ. CREDOS E SEITAS' },
    { code: '290', description: 'RELIGIÃO COMPARADA E OUTRAS RELIGIÕES' },
    { code: '300', description: 'CIÊNCIAS SOCIAIS' },
    { code: '301', description: 'SOCIOLOGIA E ANTROPOLOGIA' },
    { code: '302', description: 'INTERAÇÃO SOCIAL. COMUNICAÇÃO' },
    { code: '303', description: 'PROCESSOS SOCIAIS' },
    {
      code: '304',
      description: 'FATORES INFLUENCIANDO O COMPORTAMENTO SOCIAL'
    },
    { code: '305', description: 'GRUPOS SOCIAIS' },
    { code: '306', description: 'CULTURA E INSTITUIÇÕES' },
    { code: '307', description: 'COMUNIDADES' },
    { code: '309', description: 'CONDIÇÕES SOCIAIS' },
    { code: '310', description: 'ESTATÍSTICA' },
    { code: '320', description: 'CIÊNCIA POLÍTICA (POLÍTICA E GOVERNO)' },
    { code: '330', description: 'ECONOMIA' },
    { code: '340', description: 'DIREITO' },
    { code: '341', description: 'DIREITO PÚBLICO' },
    { code: '342', description: 'DIREITO PRIVADO' },
    { code: '343', description: 'DIREITO CANÔNICO E ECLESIÁSTICO' },
    { code: '344', description: 'DIREITO ROMANO' },
    {
      code: '350',
      description: 'ADMINISTRAÇÃO PÚBLICA. PODER EXECUTIVO.CIÊNCIA MILITAR'
    },
    {
      code: '360',
      description: 'PATOLOGIA SOCIAL. SERVIÇOS SOCIAIS. ASSOCIAÇÕES'
    },
    { code: '370', description: 'EDUCAÇÃO' },
    { code: '380', description: 'COMÉRCIO, COMUNICAÇÕES, TRANSPORTES' },
    { code: '390', description: 'COSTUMES, ETIQUETA, FOLCLORE' },
    { code: '400', description: 'LINGUAGEM E LÍNGUA' },
    { code: '410', description: 'LINGUÍSTICA' },
    { code: '420', description: 'LÍNGUA INGLESA' },
    { code: '430', description: 'LÍNGUAS GERMÂNICAS. ALEMÃO' },
    { code: '440', description: 'LÍNGUAS ROMÂNICAS. FRANCÊS' },
    {
      code: '450',
      description: 'LÍNGUAS ITALIANA, SARDO, DALMÁCIO, ROMENO, RETRO-ROMÂNICO'
    },
    { code: '460', description: 'LÍNGUA ESPANHOLA E PORTUGUESA' },
    { code: '470', description: 'LÍNGUAS ITÁLICAS. LATIM' },
    { code: '480', description: 'LÍNGUA HELÊNICAS. GREGO' },
    { code: '490', description: 'OUTRAS LÍNGUAS' },
    { code: '500', description: 'CIÊNCIAS NATURAIS. CIÊNCIAS APLICADAS' },
    { code: '510', description: 'MATEMÁTICA' },
    { code: '520', description: 'ASTRONOMIA' },
    { code: '530', description: 'FÍSICA' },
    { code: '540', description: 'QUÍMICA E CIÊNCIAS AFINS' },
    { code: '550', description: 'CIÊNCIAS DA TERRA : GEOFÍSICA' },
    { code: '560', description: 'PALEONTOLOGIA, PALEOZOOLOGIA' },
    { code: '570', description: 'CIÊNCIAS DA VIDA. BIOLOGIA' },
    {
      code: '580',
      description: 'CIÊNCIAS BOTÂNICAS. JARDINS BOTÂNICOS. PLANTAS'
    },
    {
      code: '590',
      description: 'CIÊNCIAS ZOOLÓGICAS. JARDINS ZOOLÓGICOS. ANIMAIS'
    },
    {
      code: '600',
      description: 'TECNOLOGIA (CIÊNCIAS APLICADAS), PATENTES E INVENÇÕES'
    },
    {
      code: '610',
      description: 'CIÊNCIAS MÉDICAS. SAÚDE PÚBLICA. FARMACOLOGIA. DOENÇAS'
    },
    { code: '620', description: 'ENGENHARIA' },
    { code: '630', description: 'AGRICULTURA' },
    { code: '640', description: 'ECONOMIA DOMÉSTICA E VIDA FAMILIAR' },
    { code: '650', description: 'PRÁTICA COMERCIAL. NEGÓCIOS' },
    {
      code: '660',
      description: 'ENGENHARIA QUÍMICA E TECNOLOGIAS RELACIONADAS'
    },
    { code: '670', description: 'FÁBRICAS. FABRICAÇÃO DE PRODUTOS' },
    { code: '680', description: 'PRODUTOS MANUFATURADOS' },
    { code: '690', description: 'CONSTRUÇÕES' },
    { code: '700', description: 'BELAS ARTES E ARTES DECORATIVAS' },
    {
      code: '709',
      description:
        'HISTÓRIA, GEOGRAFIA E TRATAMENTO DE PESSOAS NAS ARTES-BIOGRAFIA'
    },
    { code: '710', description: 'URBANISMO E ARQUITETURA PAISAGÍSTICA' },
    { code: '720', description: 'ARQUITETURA' },
    { code: '730', description: 'ARTES PLÁSTICAS. ESCULTURA' },
    {
      code: '740',
      description: 'DESENHO. ARTES DECORATIVAS E ARTES MENORES'
    },
    { code: '750', description: 'PINTURA' },
    { code: '760', description: 'ARTES GRÁFICAS, GRAVURAS' },
    { code: '770', description: 'FOTOGRAFIA , ARTE POR COMPUTADOR' },
    { code: '780', description: 'MÚSICA' },
    { code: '790', description: 'RECREAÇÕES E ESPETÁCULOS ARTÍSTICOS' },
    { code: '800', description: 'LITERATURA E RETÓRICA' },
    { code: '810', description: 'LITERATURA AMERICANA' },
    { code: '820', description: 'LITERATURA INGLESA' },
    { code: '830', description: 'LITERATURA ALEMÃ' },
    {
      code: '840',
      description: 'LITERATURA DE LÍNGUAS ROMÂNICAS. LITERATURA FRANCESA'
    },
    { code: '850', description: 'LITERATURAS ITALIANA, ROMENA, RÉTICA' },
    {
      code: '860',
      description: 'LITERATURA EM LÍNGUA ESPANHOLA E PORTUGUESA'
    },
    { code: '870', description: 'LITERATURA ITÁLICA. LITERATURA LATINA' },
    { code: '880', description: 'LITERATURA CLÁSSICA GREGA E LATINA' },
    {
      code: '890',
      description:
        'LITERATURAS DE LÍNGUAS DIVERSAS (EXCETO GERMÂNICA, LATINAS E GREGAS)'
    },
    {
      code: '900',
      description: 'GEOGRAFIA. HISTÓRIA E CIÊNCIAS AUXILIARES'
    },
    { code: '909', description: 'HISTÓRIA UNIVERSAL. CIVILIZAÇÃO' },
    { code: '910', description: 'GEOGRAFIA E VIAGENS' },
    { code: '920', description: 'BIOGRAFIAS' },
    { code: '930', description: 'HISTÓRIA ANTIGA ATÉ CA. 499' },
    { code: '940', description: 'HISTÓRIA. EUROPA' },
    { code: '950', description: 'HISTÓRIA. ÁSIA. EXTREMO ORIENTE' },
    { code: '960', description: 'HISTÓRIA. ÁFRICA' },
    { code: '970', description: 'HISTÓRIA : AMÉRICA DO NORTE' },
    {
      code: '980',
      description: 'HISTÓRIA. AMÉRICA DO SUL. AMERICA LATINA'
    },
    {
      code: '990',
      description: 'HISTÓRIA. OCEANIA. OUTRAS REGIÕES. MUNDOS EXTRATERRESTRES'
    }
  ]
}

module.exports = { knaCategories, knaCatArray }
