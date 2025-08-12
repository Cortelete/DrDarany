
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

// --- ICONS ---
const StarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const GraduationCapIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"/></svg>
);
const BriefcaseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const GlobeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const AboutPage: React.FC = () => {

  const timelineEvents = [
    { title: "Início da Jornada Militar", description: "Ingressa nas Forças Armadas, dando os primeiros passos em uma carreira de serviço público e dedicação ao país." },
    { title: "Pioneirismo e Liderança", description: "Cria e comanda o Grupo de Operações Especiais (GOE) da PMPR, uma unidade de elite que se tornou referência em operações táticas." },
    { title: "Especialização Internacional", description: "Aprimora táticas e estratégias em cursos de renome mundial, incluindo Operações de Alto Risco na SWAT (Texas, USA)." },
    { title: "Reconhecimento por Bravura", description: "É promovido por um distinto Ato de Bravura, um marco de honra e reconhecimento por sua coragem e dedicação." },
    { title: "Ápice da Carreira na PMPR", description: "Atinge a patente de Coronel e assume o 6º Comando Regional, consolidando uma trajetória de liderança estratégica." },
    { title: "A Nova Missão: Advocacia", description: "Hoje, dedica-se à advocacia, aplicando sua vasta experiência para defender os direitos de seus clientes com uma visão única e combativa." },
  ];

  const qualifications = [
    { icon: BriefcaseIcon, title: 'Carreira Militar', details: 'Comandante de unidades de elite (GOE, BOPE), Chefe de seções estratégicas e Comandante do 6º Comando Regional.' },
    { icon: GraduationCapIcon, title: 'Formação Jurídica', details: 'Doutor em Segurança Pública, Pós-graduado em Direito Penal e Militar, e Bacharel em Direito (OAB/PR 130.714).' },
    { icon: GlobeIcon, title: 'Cursos Internacionais', details: 'Treinamentos com a SWAT (Texas) e T.E.E.S. (Tactical Explosive Entry School) nos Estados Unidos.' },
    { icon: StarIcon, title: 'Honrarias', details: 'Promoção por Ato de Bravura, mais de 35 medalhas de mérito e incontáveis moções de aplauso.' },
  ];

  return (
    <div className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-6 space-y-20 md:space-y-28">

        {/* --- INTRO SECTION --- */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light rounded-full blur-md opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-brand-light-surface dark:bg-brand-gray p-4 rounded-full shadow-xl border-2 border-brand-gold/30 w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                <img 
                  src="/images/logoDrD.png" 
                  alt="Logo Darany Advocacia" 
                  className="object-contain w-full h-full dark:mix-blend-screen p-4"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-serif text-brand-text-dark dark:text-brand-text-light uppercase tracking-wider text-shadow-heading">Dr. Darany Luiz Alves de Oliveira</h1>
            <p className="mt-2 text-xl md:text-2xl font-serif text-gold-gradient">Uma Vida Dedicada à Segurança e à Justiça</p>
            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Natural de Ponta Grossa-PR, Dr. Darany construiu uma carreira de 35 anos na Polícia Militar do Paraná, culminando no posto de Coronel, a mais alta patente da corporação. Sua jornada foi marcada por liderança, estratégia e um notável <strong>Ato de Bravura</strong>.
              <br/><br/>
              Agora, como advogado (OAB/PR 130.714), ele aplica toda a sua experiência para oferecer uma defesa técnica e diferenciada, com sedes em <strong>Curitiba e Ponta Grossa</strong>.
            </p>
          </div>
        </AnimatedSection>
        
        {/* --- TIMELINE SECTION --- */}
        <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-serif text-center uppercase tracking-wider text-gold-gradient text-shadow-heading mb-16">Trajetória de Destaque</h2>
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-brand-gold/20" aria-hidden="true"></div>
                {timelineEvents.map((event, index) => (
                    <div key={index} className="relative mb-12">
                        <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className={`w-full md:w-[calc(50%-2.5rem)] p-6 bg-brand-light-surface dark:bg-brand-gray rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-brand-gold/50 transition-colors duration-300 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-brand-text-dark dark:text-brand-text-light uppercase text-shadow-heading">{event.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 bg-brand-light-surface dark:bg-brand-gray rounded-full border-2 border-brand-gold p-1">
                          <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>

        {/* --- QUALIFICATIONS GRID --- */}
        <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-serif text-center uppercase tracking-wider text-gold-gradient text-shadow-heading mb-16">Qualificações Essenciais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {qualifications.map((q, index) => {
                    const Icon = q.icon;
                    return (
                        <div key={index} className="bg-brand-light-surface dark:bg-brand-gray p-8 rounded-xl shadow-lg text-center flex flex-col items-center border-b-4 border-brand-gold transition-transform duration-300 hover:-translate-y-2">
                            <div className="bg-brand-gold/10 p-4 rounded-full mb-4">
                                <Icon className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-brand-text-dark dark:text-brand-text-light mb-2 uppercase tracking-wide text-shadow-heading">{q.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{q.details}</p>
                        </div>
                    );
                })}
            </div>
        </AnimatedSection>
        
        {/* --- EDUCATION DETAILS --- */}
        <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-serif text-center uppercase tracking-wider text-gold-gradient text-shadow-heading mb-16">Formação Acadêmica</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 bg-brand-light-surface dark:bg-brand-gray p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                    <h3 className="text-xl font-serif font-bold text-brand-gold uppercase tracking-wide text-shadow-heading">Nível Superior</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                        <li>Bacharel em Direito</li>
                        <li>Bacharel em Segurança Pública</li>
                        <li>Bacharel em Teologia</li>
                        <li>Licenciatura Plena em Educação Física</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-serif font-bold text-brand-gold uppercase tracking-wide text-shadow-heading">Pós-Graduação e Doutorado</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                        <li><strong>Doutor</strong> em Segurança Pública</li>
                        <li><strong>Mestre</strong> em Segurança Pública</li>
                        <li><strong>Mestre</strong> em Teologia com Ênfase em Missiologia Urbana</li>
                        <li><strong>Especialista</strong> em Normas Penais</li>
                        <li>Pós-graduado em Direito Militar, Processual Penal, Ambiental, e outras áreas.</li>
                    </ul>
                </div>
            </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default AboutPage;
