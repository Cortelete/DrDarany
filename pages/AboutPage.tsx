import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MedalIcon, ScalesOfJusticeIcon } from '../constants';

const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);


const AboutPage: React.FC = () => {
  const values = [
    { title: 'Excelência', description: 'Busca incessante pela mais alta qualidade técnica e estratégica em cada caso que assumimos.' },
    { title: 'Compromisso', description: 'Dedicação total à defesa dos direitos e interesses de nossos clientes, com lealdade e transparência.' },
    { title: 'Integridade', description: 'Atuação pautada pela ética, honestidade e respeito, construindo relações de confiança mútua.' },
  ];

  return (
    <div className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider text-gold-gradient text-shadow-heading">Nossa Trajetória</h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-shadow-heading">Conheça a história, os princípios e o compromisso que nos movem a cada dia.</p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mb-20">
          <div className="md:col-span-3 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-text-dark dark:text-brand-text-light mb-6 uppercase tracking-wide text-shadow-heading">Dr. Darany Luiz Alves de Oliveira</h2>
            <div className="space-y-8">
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-brand-light dark:bg-brand-gray p-4 rounded-full border border-brand-gold/10">
                  <MedalIcon className="w-8 h-8 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-brand-text-dark dark:text-brand-text-light mb-2 uppercase tracking-wide transition-colors duration-300 hover:text-brand-gold text-gold-glow-hover cursor-default text-shadow-heading">Da Caserna ao Tribunal</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Antes de enveredar pelos caminhos da advocacia, Dr. Darany Luiz Alves de Oliveira serviu às Forças Armadas, uma experiência que lhe proporcionou um profundo entendimento sobre a vida na caserna, a hierarquia e a disciplina. Foi essa vivência que despertou sua vocação para o Direito, ao testemunhar de perto os desafios jurídicos únicos enfrentados por militares.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-brand-light dark:bg-brand-gray p-4 rounded-full border border-brand-gold/10">
                  <ScalesOfJusticeIcon className="w-8 h-8 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-brand-text-dark dark:text-brand-text-light mb-2 uppercase tracking-wide transition-colors duration-300 hover:text-brand-gold text-gold-glow-hover cursor-default text-shadow-heading">Defesa Estratégica</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Motivado a defender aqueles que servem ao país, ele trilhou o caminho acadêmico, graduando-se em Direito e especializando-se em Direito Militar e Penal. Hoje, sua prática jurídica é a fusão de seu conhecimento técnico com a experiência prática da vida militar. Essa combinação rara permite que ele ofereça uma defesa que não apenas aborda a lei, mas também compreende a cultura e os valores dos seus clientes, atuando como um verdadeiro parceiro na proteção de suas carreiras e direitos.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center items-center">
            <div className="bg-brand-light-gray dark:bg-brand-gray p-8 rounded-lg shadow-xl overflow-hidden border-4 border-brand-gold/20 w-full max-w-[350px] aspect-square">
              <img 
                src="/images/logoDrD.png" 
                alt="Logo Darany Advocacia" 
                className="object-contain w-full h-full dark:mix-blend-screen"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wider text-gold-gradient text-shadow-heading">Nossos Pilares</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {values.map((item, index) => (
                <div key={index} className="bg-brand-light-gray dark:bg-brand-gray p-8 rounded-lg shadow-md border-b-4 border-brand-gold">
                    <h3 className="text-xl md:text-2xl font-serif text-brand-gold mb-3 uppercase tracking-wide text-shadow-heading">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                ))}
            </div>
        </AnimatedSection>
        
        <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 uppercase tracking-wider text-gold-gradient text-shadow-heading">Qualificações</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                    'Ex-militar das Forças Armadas',
                    'Especialista em Direito Militar e Processos Disciplinares',
                    'Pós-graduado em Direito Penal e Processo Penal',
                    'Advocacia para Forças de Segurança Pública',
                    'Membro atuante da OAB/PR',
                    'Defesa em todas as instâncias judiciais'
                ].map(cert => (
                    <li key={cert} className="flex items-center text-gray-700 dark:text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0" />
                        <span className="uppercase tracking-wide text-sm font-medium">{cert}</span>
                    </li>
                ))}
            </ul>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default AboutPage;