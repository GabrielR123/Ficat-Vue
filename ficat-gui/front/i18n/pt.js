export default {
  info: {},
  message: {},
  error: {
    errNotFound: 'Recurso não encontrado'
  },
  layout: {
    about: 'Sobre',
    talkToUs: 'Fale conosco',
    tutorial: 'Tutorial',
    next: 'Próximo passo',
    previous: 'Passo anterior',
    author: 'autor',
    secondaryAuthor: 'segundo autor',
    authorshipData: 'Dados do Autor',
    whosName: who => `Nome do ${who}`,
    whosSurname: who => `Sobrenome do ${who}`,
    nameTooltip:
      'Digite seu prenome, nome e primeiro sobrenome, se houver. Lembre-se de utilizar letra maiúscula na primeira letra de nomes próprios.',
    surnameTooltip:
      'Digite seu último sobrenome. Lembre-se de incluir sobrenomes compostos (exemplo: Castelo Branco) e agnomes (exemplos: Filho, Neto, Júnior, Segundo), caso tenha.',
    secondNameTooltip: 'Digite o nome do 2º autor.',
    secondSurnameTooltip: 'Digite o sobrenome do 2º autor.',
    institutionTooltip: 'Digite o nome da instituição',
    facultyTooltip: 'Digite o nome da faculdade',
    receiveEmailTooltip:
      'Marque se você deseja receber uma cópia do pdf no seu e-mail.',
    interinstitutional: 'Interinstitucional',
    required: 'Campo obrigatório.',
    optional: 'Campo opcional',
    minLength: min => `Mínimo de ${min} caracteres.`,
    alpha: alpha => `Por favor insira um ${alpha} válido.`,
    email: `Por favor insira um e-mail válido`,
    workData: 'Dados do Trabalho',
    workTitle: 'Título do trabalho',
    workTitleTooltip:
      'Digite o título do trabalho. Lembre-se de usar letra maiúscula somente na primeira letra da primeira palavra do título e na primeira letra de nomes próprios. O subtítulo deve ser digitado no campo seguinte, caso exista.',
    workSubtitle: 'Subtítulo do trabalho',
    workSubtitleTooltip:
      'Digite o subtítulo do trabalho iniciando com letra minúscula e utilizando letras maiúsculas somente para nomes próprios.',
    year: 'Ano',
    yearTooltip: 'Selecione o ano de defesa do seu trabalho.',
    totalPages: 'Total de Páginas',
    arabic: 'Arábicos',
    roman: 'Romanos',
    numberTypeTooltip:
      'Digite a quantidade de folhas de seu trabalho. Deve informar o número de páginas pré-textuais em algarismos romanos, seguido por uma vírgula e pelo número de páginas textuais em algarismos arábicos; ou somente em algarismos arábicos com o total de páginas.',
    minValue: min => `Não pode ser menor que ${min}`,
    pictures: 'Ilustração',
    picturesTooltip:
      'Selecione entre as opções “Não possui” (para trabalhos sem ilustração) ou “Coloridas” (no caso de possuir ilustrações coloridas) ou “Preto e branco” (no caso de possuir somente ilustrações em preto e branco). Ilustrações são elementos gráficos dos trabalhos acadêmicos, e engloba figuras, gráficos, mapas, quadros entre outros.',
    nocolor: 'Não possui',
    color: 'Coloridas',
    bw: 'Preto e branco',
    workType: 'Tipo de Trabalho',
    workTypeTooltip:
      'Selecione o tipo de trabalho entre Tese (doutorado), Dissertação (mestrado), TCC (especialização) e TCC (graduação).',
    thesis: 'Tese',
    dissertation: 'Dissertação',
    tccExpert: 'TCC Especialização',
    tccGraduation: 'TCC Graduação',
    knArea: 'Área de Conhecimento',
    knAreaTooltip:
      'Selecione o assunto que representa melhor o seu trabalho. A área do conhecimento do Ficat é baseada na Classificação Decimal de Dewey (CDD) e o assunto selecionado corresponde ao número de classificação da CDD.',
    acdUnity: 'Unidade Acadêmica',
    acdUnityTooltip:
      'Selecione a unidade acadêmica a que seu curso está vinculado.',
    course: 'Curso',
    courseTooltip: 'Selecione seu curso',
    noResultFound: 'Nenhum resultado encontrado',
    orientationData: 'Orientadores',
    advisor: 'Orientador',
    advisorTooltip:
      'Digite o nome completo do seu orientador(a) ou coorientador(a). No botão ao lado selecione a quem se refere essa informação, isto é, se é um orientador(a) ou coorientador(a).',
    cotutorshipAdvisorTooltip:
      'Digite o nome completo do seu orientador(a) ou coorientador(a).',
    lowAdvisor: 'orientador',
    coadvisor: 'Coorientador',
    lowCoadvisor: 'coorientador',
    femaleAdvisor: 'Orientadora',
    femaleCoadvisor: 'Coorientadora',
    advisorGender: 'Gênero',
    genderMale: 'Masculino',
    genderFemale: 'Feminino',
    advisorName: 'Nome completo',
    whosFemaleTooltip: whomst => `Marque se seu ${whomst} é uma mulher`,
    title: 'Titulação',
    advisorTitle:
      'Selecione a titulação do seu orientador(a) ou coorientador(a).',
    genderTooltip: whomst => `Selecione o gênero do(a) ${whomst}(a)`,
    graduate: 'Graduado(a)',
    expert: 'Especialista',
    master: 'Mestre',
    doctor: 'Doutor(a)',
    cotutelle: 'Cotutela',
    keywords: 'Palavras-chave',
    keyword: 'Palavra-chave ',
    keywordTooltip:
      'Lista de palavras ou expressões que representam o conteúdo da obra. Digite as palavras-chave em ordem decrescente de importância, evitando sinônimos, termos repetitivos e vagos. É obrigatório inserir, no mínimo, uma palavra-chave.',
    addAuthor: 'Adicionar coautor',
    removeAuthor: 'Remover coautor',
    addCoadvisor: 'Adicionar orientador ou coorientador',
    removeCoadvisor: 'Remover coorientador',
    vocabulary:
      'Indicamos o uso de vocabulários controlados palavras-chave, conforme link. Evite o uso de siglas nas palavras-chave. Em caso de dúvidas, entre em contato com o bibliotecário da biblioteca.',
    addKeyword: 'Adicionar palavra-chave',
    removeKeyword: 'Remover palavra-chave',
    font: 'Fonte',
    fontFamilyTooltip: 'Selecione a fonte da sua ficha catalográfica.',
    sendCopyToEmail:
      'Quero receber uma cópia da ficha catalografica por e-mail.',
    solveCaptcha: 'Resolva o captcha',
    generate: 'Gerar',
    generateTooltip: 'Clique para gerar sua ficha catalográfica!',
    prepareCard: 'Preparar ficha catalográfica',
    talkFormName: 'Nome',
    talkFormNameTooltip: 'Digite seu nome',
    talkFormEmail: 'E-mail',
    talkFormEmailTooltip: 'Digite seu e-mail',
    invalidEmail: 'Não é um endereço válido de e-mail',
    talkFormPhone: 'Telefone',
    talkFormPhoneTooltip: 'Digite seu número de telefone principal',
    numbersOnly: 'Use números ou "+" somente',
    internationalNumber: 'Use +[código de país] para números internacionais',
    talkFormMessage: 'Messagem',
    talkFormMessageTooltip: 'Digite uma mensagem descrevendo a questão',
    talkFormUpload: 'Arraste e solte seus arquivos aqui para fazer upload',
    talkFormUploadTooltip:
      'Você também pode apertar o botão para selecionar os anexos que precisar',
    submitBtnTooltip: 'Tudo certo? Envie a mensagem para nós!',
    submitBtn: 'Enviar'
  }
}
