

import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../constants';
import type { Article } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import Modal from '../components/Modal';
import { useModal } from '../hooks/useModal';
import RealTimeNews from '../components/RealTimeNews';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { isOpen, open, close } = useModal();

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
    open();
  };

  const filteredArticles = useMemo(() => {
    if (!searchTerm) {
      return ARTICLES;
    }
    return ARTICLES.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      {selectedArticle && (
        <Modal isOpen={isOpen} onClose={close} title={selectedArticle.title.toUpperCase()}>
          <div className="space-y-4">
            <img src={selectedArticle.imageUrl} alt={selectedArticle.title} className="w-full h-auto max-h-72 object-cover rounded-lg mb-4" />
            <p className="text-sm font-semibold text-brand-gold uppercase tracking-wider text-shadow-heading">{selectedArticle.category}</p>
            <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {selectedArticle.fullContent}
            </div>
          </div>
        </Modal>
      )}

      <div className="bg-transparent">
        
        {/* Real-Time News Section */}
        <RealTimeNews />

        {/* Authored Articles Section */}
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider text-gold-gradient text-shadow-heading">Nossos Artigos</h1>
                    <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-shadow-heading">
                    Conteúdo aprofundado para você entender melhor seus direitos e o universo jurídico.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12 max-w-lg mx-auto">
                    <input
                    type="text"
                    placeholder="Pesquisar em nossos artigos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-brand-light-gray dark:bg-brand-gray border border-gray-300 dark:border-gray-700 rounded-full shadow-sm focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    />
                </AnimatedSection>
                
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <AnimatedSection key={article.id} delay={index * 0.1}>
                        <button
                            onClick={() => handleReadMore(article)}
                            className="group relative bg-brand-light-gray dark:bg-brand-gray rounded-lg shadow-lg overflow-hidden h-full flex flex-col text-left w-full transition-transform duration-300 hover:-translate-y-2 reflection-hover"
                        >
                            <div className="overflow-hidden">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                            <p className="text-sm font-semibold text-brand-gold mb-2 uppercase tracking-wider text-shadow-heading">{article.category}</p>
                            <h3 className="text-lg md:text-xl font-serif font-bold text-brand-text-dark dark:text-brand-text-light mb-3 flex-grow uppercase text-shadow-heading">{article.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{article.summary}</p>
                            <div className="mt-auto">
                                <span className="font-bold text-brand-gold group-hover:underline uppercase text-sm tracking-wide">
                                    Leia mais &rarr;
                                </span>
                            </div>
                            </div>
                        </button>
                        </AnimatedSection>
                    ))}
                    </div>
                ) : (
                    <AnimatedSection className="text-center py-16">
                        <p className="text-xl text-gray-500 dark:text-gray-400">Nenhum artigo encontrado para sua busca.</p>
                    </AnimatedSection>
                )}
            </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;