import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MedalIcon, ScalesOfJusticeIcon } from '../constants';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';

const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const InfoIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
);


const AboutPage: React.FC = () => {
  const { isOpen: isCasernaOpen, open: openCaserna, close: closeCaserna } = useModal();
  const { isOpen: isEstrategiaOpen, open: openEstrategia, close: closeEstrategia } = useModal();

  const values = [
    { title: 'Excelência', description: 'Busca incessante pela mais alta qualidade técnica e estratégica em cada caso que assumimos.' },
    { title: 'Compromisso', description: 'Dedicação total à defesa dos direitos e interesses de nossos clientes, com lealdade e transparência.' },
    { title: 'Integridade', description: 'Atuação pautada pela ética, honestidade e respeito, construindo relações de confiança mútua.' },
  ];

  return (
    <>
      <Modal isOpen={isCasernaOpen} onClose={closeCaserna} title="Da Caserna ao Tribunal: Uma Jornada de Vocação">
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
                A trajetória do Dr. Darany Luiz Alves de Oliveira é singular. Antes de se tornar advogado, ele integrou as fileiras das Forças Armadas, vivenciando em primeira mão o rigor, a dedicação e os valores que definem a vida militar. Essa experiência não foi apenas uma fase profissional, mas a fundação de sua verdadeira vocação.
            </p>
            <p>
                Na caserna, ele percebeu a complexidade das relações hierárquicas e as particularidades jurídicas que permeiam o cotidiano militar. Viu colegas enfrentarem processos disciplinares e criminais sem o devido amparo de uma defesa que compreendesse as nuances do seu mundo. Foi essa percepção que acendeu a chama do Direito em seu coração, motivando-o a buscar a formação jurídica para se tornar a voz e o escudo daqueles que servem e protegem a nação.
            </p>
        </div>
      </Modal>

      <Modal isOpen={isEstrategiaOpen} onClose={closeEstrategia} title="Defesa Estratégica: A Vantagem da Dupla Experiência">
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
                A advocacia do Dr. Darany não se baseia apenas em códigos e doutrinas. Ela é forjada na junção de duas realidades: a do militar e a do jurista. Essa fusão rara confere uma vantagem estratégica inestimável. Ele não apenas interpreta a lei; ele a aplica com a compreensão profunda da cultura, da linguagem e dos valores militares.
            </p>
            <p>
                Ao defender um cliente, ele não vê apenas um caso, mas a carreira, a honra e o futuro de um profissional. Sabe o peso de uma acusação injusta no ambiente militar e a importância de uma defesa que seja técnica, mas também empática e contextualizada. É essa capacidade de transitar entre os dois universos que lhe permite construir teses defensivas mais sólidas, antecipar argumentos e se comunicar de forma eficaz com seus clientes e com as autoridades, garantindo uma proteção completa e diferenciada.
            </p>
        </div>
      </Modal>

      <div className="bg-transparent py-16 md:py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider text-gold-gradient text-shadow-heading">Nossa Trajetória</h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-shadow-heading">Conheça a história, os princípios e o compromisso que nos movem a cada dia.</p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mb-20">
            <div className="md:col-span-3 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-text-dark dark:text-brand-text-light mb-6 uppercase tracking-wide text-shadow-heading">Dr. Darany Luiz Alves de Oliveira</h2>
              <div className="space-y-4">
                
                <div className="group rounded-lg transition-colors duration-300 hover:bg-brand-gold/5 dark:hover:bg-brand-gold/10">
                    <div className="flex items-start space-x-6 p-4">
                        <div className="flex-shrink-0 bg-brand-light-bg dark:bg-brand-gray p-4 rounded-full border border-brand-gold/10">
                            <MedalIcon className="w-8 h-8 text-brand-gold" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold font-serif text-brand-text-dark dark:text-brand-text-light uppercase tracking-wide text-shadow-heading">Da Caserna ao Tribunal</h3>
                            <button onClick={openCaserna} className="text-gray-400 dark:text-gray-500 hover:text-brand-gold transition-colors" aria-label="Saiba mais sobre a jornada">
                                <InfoIcon className="w-5 h-5" />
                            </button>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Antes de enveredar pelos caminhos da advocacia, Dr. Darany Luiz Alves de Oliveira serviu às Forças Armadas, uma experiência que lhe proporcionou um profundo entendimento sobre a vida na caserna, a hierarquia e a disciplina. Foi essa vivência que despertou sua vocação para o Direito, ao testemunhar de perto os desafios jurídicos únicos enfrentados por militares.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group rounded-lg transition-colors duration-300 hover:bg-brand-gold/5 dark:hover:bg-brand-gold/10">
                    <div className="flex items-start space-x-6 p-4">
                        <div className="flex-shrink-0 bg-brand-light-bg dark:bg-brand-gray p-4 rounded-full border border-brand-gold/10">
                        <ScalesOfJusticeIcon className="w-8 h-8 text-brand-gold" />
                        </div>
                        <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold font-serif text-brand-text-dark dark:text-brand-text-light uppercase tracking-wide text-shadow-heading">Defesa Estratégica</h3>
                            <button onClick={openEstrategia} className="text-gray-400 dark:text-gray-500 hover:text-brand-gold transition-colors" aria-label="Saiba mais sobre a defesa estratégica">
                                <InfoIcon className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Motivado a defender aqueles que servem ao país, ele trilhou o caminho acadêmico, graduando-se em Direito e especializando-se em Direito Militar e Penal. Hoje, sua prática jurídica é a fusão de seu conhecimento técnico com a experiência prática da vida militar. Essa combinação rara permite que ele ofereça uma defesa que não apenas aborda a lei, mas também compreende a cultura e os valores dos seus clientes, atuando como um verdadeiro parceiro na proteção de suas carreiras e direitos.
                        </p>
                        </div>
                    </div>
                </div>

              </div>
            </div>
            <div className="md:col-span-2 order-1 md:order-2 flex justify-center items-center">
              <div className="bg-brand-light-surface dark:bg-brand-gray p-8 rounded-lg shadow-xl overflow-hidden border-4 border-brand-gold/20 w-full max-w-[350px] aspect-square">
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
                  <div key={index} className="relative overflow-hidden bg-brand-light-surface dark:bg-brand-gray p-8 rounded-lg shadow-md border-b-4 border-brand-gold transition-transform duration-300 hover:-translate-y-2 reflection-hover">
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
                      <li key={cert} className="group flex items-center text-gray-700 dark:text-gray-300 p-3 rounded-lg transition-all duration-300 hover:bg-brand-gold/5 dark:hover:bg-brand-gold/10 hover:translate-x-1">
                          <CheckCircleIcon className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                          <span className="uppercase tracking-wide text-sm font-medium transition-colors duration-300 group-hover:text-brand-gold dark:group-hover:text-brand-gold-light">{cert}</span>
                      </li>
                  ))}
              </ul>
          </AnimatedSection>

        </div>
      </div>
    </>
  );
};

export default AboutPage;