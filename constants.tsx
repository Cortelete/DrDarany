import React from 'react';
import type { PracticeArea, Article } from './types';

export const WHATSAPP_NUMBER = "5541985011382";

// Icons
export const FamilyIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5c0-1.1.9-2 2-2h2"/><path d="M17 3h2c1.1 0 2 .9 2 2v2"/><path d="M21 17v2c0 1.1-.9 2-2 2h-2"/><path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/><path d="M12 8a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M8 20v-5.5c0-1.4 1.1-2.5 2.5-2.5h3c1.4 0 2.5 1.1 2.5 2.5V20"/></svg>
);
export const GavelIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-8.5 8.5"/><path d="m18 17 2 2"/><path d="m12.5 18.5 3.5 3.5"/><path d="M14 21h4v-4"/><path d="m16 16-1.5-1.5"/><path d="M11 9.5 2 20.5"/><path d="M2 15h4v4"/><path d="M11 2.5 18.5 10l-1.5 1.5-7-7L11 2.5Z"/></svg>
);
export const BuildingIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);
export const ShieldIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
export const ShoppingCartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/></svg>
);
export const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
);

export const MedalIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);

export const ScalesOfJusticeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h20"/><path d="M12 2v20"/><path d="M5 7c-1.5 0-3 1.5-3 3v0c0 1.5 1.5 3 3 3h14c1.5 0 3-1.5 3-3v0c0-1.5-1.5-3-3-3"/><path d="M5 7L3 5"/><path d="M19 7l2-2"/></svg>
);

export const PRACTICE_AREAS: PracticeArea[] = [
  { id: 'militar', name: 'Direito Militar', 
    description: 'Defesa especializada em crimes militares e processos administrativos disciplinares (PAD, sindicância). Atuação em favor de Policiais Militares, Civis, Guardas Municipais e membros das Forças Armadas.', 
    examples: 'Defesa em inquéritos (IPM), deserção, insubordinação, PADs, anulação de atos, reintegração.', 
    icon: ShieldIcon,
    modalContent: (<>
        <p className="mb-4">O Direito Militar é um ramo especializado que lida com as normas que regulam as Forças Armadas e Forças Auxiliares (Policiais e Bombeiros Militares). Nossa atuação é focada em proteger a carreira e os direitos dos militares que dedicam suas vidas à segurança da sociedade.</p>
        <p>Compreendemos as particularidades da vida na caserna e a rigidez da hierarquia e disciplina, oferecendo uma defesa técnica que considera todos esses aspectos.</p>
    </>),
    simpleExamples: [
        'Estou respondendo a um Processo Administrativo Disciplinar (PAD).',
        'Fui acusado de um crime militar (deserção, insubordinação, etc.).',
        'Preciso de ajuda para anular um ato administrativo injusto.',
        'Busco minha reintegração ao serviço ativo.',
    ]
  },
  { id: 'penal', name: 'Direito Penal Comum', 
    description: 'Defesa técnica e estratégica em todas as fases do processo criminal, desde o inquérito policial até a execução da pena, assegurando os direitos e garantias fundamentais do acusado.', 
    examples: 'Acompanhamento em delegacias, audiências de custódia, defesa em processos criminais.', 
    icon: GavelIcon,
    modalContent: (<>
        <p className="mb-4">O Direito Penal trata dos crimes e das punições. Se você está sendo investigado ou acusado de um crime, é seu direito fundamental ter uma defesa justa. Atuamos de forma estratégica para garantir que seus direitos sejam respeitados em todas as etapas.</p>
        <p>Desde o acompanhamento na delegacia até a sua defesa perante o juiz, nosso objetivo é buscar o melhor resultado possível para o seu caso.</p>
    </>),
    simpleExamples: [
        'Fui intimado a comparecer na delegacia.',
        'Fui preso em flagrante ou tenho uma audiência de custódia.',
        'Estou sendo processado criminalmente.',
        'Preciso de um habeas corpus ou de recorrer de uma sentença.',
    ]
  },
  { id: 'familia', name: 'Direito de Família e Sucessões', 
    description: 'Atuação em questões como divórcio, guarda de filhos, pensão alimentícia, inventários e testamentos, buscando soluções justas e humanas.', 
    examples: 'Divórcio consensual e litigioso, partilha de bens, inventário judicial e extrajudicial.', 
    icon: FamilyIcon,
    modalContent: (<>
        <p className="mb-4">Questões de família e herança são delicadas e exigem uma abordagem sensível e ao mesmo tempo firme. Nosso trabalho é encontrar soluções que preservem os laços e o patrimônio, mesmo em momentos de conflito.</p>
        <p>Seja para formalizar um divórcio, definir a guarda dos filhos, ou realizar a partilha de bens de um ente querido, estamos aqui para orientar e garantir que o processo seja o mais tranquilo e justo possível.</p>
    </>),
    simpleExamples: [
        'Quero me divorciar e preciso dividir os bens.',
        'Preciso resolver a guarda e a pensão dos meus filhos.',
        'Um familiar faleceu e precisamos fazer o inventário.',
        'Gostaria de fazer um planejamento sucessório ou testamento.',
    ]
  },
  { id: 'civil', name: 'Direito Civil', 
    description: 'Soluções para uma vasta gama de questões civis, incluindo contratos, responsabilidade civil, obrigações e direitos reais.', 
    examples: 'Ações de indenização por danos morais e materiais, cobranças, elaboração de contratos.', 
    icon: BuildingIcon,
    modalContent: (<>
        <p className="mb-4">O Direito Civil rege as relações do dia a dia entre pessoas e empresas. Problemas com contratos, dívidas, ou situações que causaram algum tipo de dano (moral ou material) se enquadram aqui.</p>
        <p>Atuamos para resolver esses conflitos, seja através de acordos ou de ações judiciais, buscando sempre a reparação do seu direito de forma ágil e eficaz.</p>
    </>),
    simpleExamples: [
        'Preciso cobrar uma dívida de alguém.',
        'Sofri um dano moral ou material e quero uma indenização.',
        'Tenho um problema relacionado a um contrato que assinei.',
        'Questões envolvendo imóveis (posse, propriedade, etc.).',
    ]
  },
  { id: 'consumidor', name: 'Direito do Consumidor', 
    description: 'Proteção dos direitos do consumidor em conflitos com fornecedores, buscando reparações e cumprimento da lei.', 
    examples: 'Ações contra cobranças indevidas, produtos defeituosos, publicidade enganosa.', 
    icon: ShoppingCartIcon,
    modalContent: (<>
        <p className="mb-4">Como consumidor, você tem direitos. Se uma empresa não cumpriu o combinado, vendeu um produto com defeito, ou fez uma cobrança indevida, a lei está do seu lado.</p>
        <p>Nossa função é fazer valer o Código de Defesa do Consumidor, buscando a troca do produto, a devolução do seu dinheiro, ou uma indenização pelo transtorno causado.</p>
    </>),
    simpleExamples: [
        'Recebi uma cobrança que não reconheço.',
        'Meu nome foi negativado indevidamente (SPC/Serasa).',
        'Comprei um produto que veio com defeito e a loja não quer trocar.',
        'Tive um problema com uma companhia aérea (voo cancelado, bagagem extraviada).',
    ]
  },
];

export const ARTICLES: Article[] = [
    { id: '4', title: 'Processo Administrativo Disciplinar (PAD): Como se defender?', summary: 'Passos essenciais e estratégias de defesa para militares e servidores que enfrentam um PAD.', category: 'Direito Militar', imageUrl: 'https://picsum.photos/400/250?random=4', fullContent: `Enfrentar um Processo Administrativo Disciplinar (PAD) é um momento crítico na carreira de um militar ou servidor público. A defesa técnica por um advogado especialista é crucial desde o início. O acusado tem direito à ampla defesa e ao contraditório. \n\nIsso inclui o direito de ser notificado de todos os atos do processo, de apresentar defesa prévia, arrolar testemunhas, solicitar a produção de provas e ser assistido por advogado em todas as fases. É fundamental analisar cuidadosamente a acusação, buscar nulidades processuais e construir uma narrativa coesa dos fatos. Uma defesa bem estruturada pode resultar no arquivamento do processo ou na aplicação de uma sanção mais branda.` },
    { id: '2', title: 'O que fazer ao ser abordado pela polícia?', summary: 'Conheça seus direitos e os procedimentos corretos durante uma abordagem policial para garantir sua segurança jurídica.', category: 'Direito Penal', imageUrl: 'https://picsum.photos/400/250?random=2', fullContent: `Uma abordagem policial pode ser uma situação de alta tensão, mas conhecer seus direitos é fundamental para garantir que o procedimento ocorra de forma legal e segura. \n\nPrimeiramente, mantenha a calma e não faça movimentos bruscos. Você tem o direito de permanecer em silêncio e não produzir provas contra si mesmo. A polícia pode realizar uma busca pessoal (revista) se houver fundada suspeita. Você tem o direito de saber o motivo da abordagem e o nome do policial. Grave a abordagem, se possível, pois isso é um direito seu e serve como proteção. Lembre-se: desacato é crime, então seja respeitoso, mas firme na garantia de seus direitos. Em caso de qualquer abuso, contate um advogado imediatamente.` },
    { id: '1', title: 'Entenda a Guarda Compartilhada', summary: 'Um guia completo sobre como funciona a guarda compartilhada de filhos, seus direitos e deveres.', category: 'Família', imageUrl: 'https://picsum.photos/400/250?random=1', fullContent: `A guarda compartilhada tem se tornado o modelo preferencial no sistema judiciário brasileiro, pois entende-se que ela atende melhor ao princípio do melhor interesse da criança e do adolescente. Neste modelo, pai e mãe dividem de forma equilibrada as responsabilidades e o tempo de convivência com os filhos.\n\nDiferente da guarda unilateral, onde apenas um dos genitores toma as decisões importantes, na compartilhada, ambos participam ativamente da vida da criança, desde a escolha da escola até questões de saúde e lazer. Isso não significa que a criança viverá em duas casas, mas sim que as decisões serão conjuntas. A residência fixa da criança, ou lar de referência, continua existindo para garantir estabilidade, mas o tempo de convivência com o outro genitor é ampliado e flexibilizado.` },
    { id: '5', title: 'Inventário: Por que é importante e como proceder?', summary: 'Descubra a importância de realizar o inventário e os passos necessários para a partilha de bens após o falecimento.', category: 'Sucessões', imageUrl: 'https://picsum.photos/400/250?random=5', fullContent: `O inventário é o procedimento obrigatório para apurar os bens, direitos e dívidas de uma pessoa falecida para que a herança possa ser partilhada entre os herdeiros. Sem ele, os bens ficam bloqueados e não podem ser vendidos ou transferidos legalmente.\n\nExistem duas formas de fazer o inventário: judicial e extrajudicial. O extrajudicial, feito em cartório, é mais rápido e barato, mas exige que todos os herdeiros sejam maiores, capazes e estejam de acordo com a partilha, além da ausência de testamento. O inventário judicial é necessário nos demais casos. Em ambos, a presença de um advogado é obrigatória. É importante iniciar o processo em até 2 meses após o óbito para evitar multas sobre o imposto de transmissão (ITCMD).` },
    { id: '3', title: 'Compra online: quais os seus direitos?', summary: 'Saiba como se proteger em compras pela internet e o que fazer em caso de problemas com produtos ou entregas.', category: 'Consumidor', imageUrl: 'https://picsum.photos/400/250?random=3', fullContent: `O Código de Defesa do Consumidor (CDC) também se aplica às compras online e garante uma série de direitos. O mais conhecido é o "Direito de Arrependimento", que permite ao consumidor desistir da compra em até 7 dias após o recebimento do produto, sem precisar de justificativa, e com direito à devolução integral dos valores pagos, incluindo o frete.\n\nAlém disso, o site deve fornecer informações claras sobre o produto, preço, frete e prazo de entrega. A publicidade enganosa é proibida. Se o produto chegar com defeito, você tem o direito de solicitar o conserto, a troca ou a devolução do dinheiro. Guarde todos os e-mails e comprovantes da compra para se resguardar.` },
];