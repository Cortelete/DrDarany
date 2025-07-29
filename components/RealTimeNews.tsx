
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import AnimatedSection from './AnimatedSection';

// Define types for news and sources
interface NewsItem {
  title: string;
  summary: string;
}

interface Source {
  uri: string;
  title: string;
}

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
);

const RealTimeNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!process.env.API_KEY) {
          // In a real app, you might have a fallback or a more user-friendly error.
          // For this example, we show a generic error if the key isn't configured.
          throw new Error("API key not found.");
        }
        
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = "Busque as 3 notícias jurídicas mais recentes e relevantes do Brasil, de fontes confiáveis como portais da OAB, Conjur, ou Jusbrasil. Para cada notícia, formate a resposta com um título e um breve resumo. Use o formato: '[TÍTULO]: <título da notícia>\n[RESUMO]: <resumo da notícia>' e separe cada notícia com '---'.";
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            tools: [{ googleSearch: {} }],
          },
        });

        // Parse text response
        const text = response.text;
        const parsedNews = text.split('---')
          .map(item => item.trim())
          .filter(item => item && item.includes('[TÍTULO]:') && item.includes('[RESUMO]:'))
          .map(item => {
            const titleMatch = item.match(/\[TÍTULO\]: ([\s\S]*?)(\n\[RESUMO\]:|$)/);
            const summaryMatch = item.match(/\[RESUMO\]: ([\s\S]*)/);
            return {
              title: titleMatch ? titleMatch[1].trim() : 'Título não encontrado',
              summary: summaryMatch ? summaryMatch[1].trim() : 'Resumo não disponível',
            };
          });
        setNews(parsedNews);

        // Extract sources
        const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (groundingChunks) {
          const uniqueSources = new Map<string, Source>();
          groundingChunks.forEach((chunk: any) => {
             if(chunk.web && chunk.web.uri) {
                uniqueSources.set(chunk.web.uri, { uri: chunk.web.uri, title: chunk.web.title || chunk.web.uri });
             }
          });
          setSources(Array.from(uniqueSources.values()));
        }

      } catch (e: any) {
        console.error("Error fetching news:", e);
        setError("Não foi possível carregar as notícias no momento. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const NewsSkeleton = () => (
    <div className="space-y-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mt-2"></div>
        </div>
      ))}
    </div>
  );

  return (
    <AnimatedSection className="bg-brand-light-gray dark:bg-brand-gray py-16 md:py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif text-brand-gold uppercase tracking-wider">Notícias Jurídicas</h2>
                <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">As últimas atualizações do mundo do direito, em tempo real.</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-brand-light dark:bg-brand-dark p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                {loading && <NewsSkeleton />}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && news.length > 0 && (
                    <>
                        <div className="space-y-8">
                            {news.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                                    <h3 className="text-lg md:text-xl font-bold text-brand-text-dark dark:text-brand-text-light mb-2 uppercase tracking-wide">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{item.summary}</p>
                                </div>
                            ))}
                        </div>

                        {sources.length > 0 && (
                            <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700">
                                <h4 className="font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">Fontes</h4>
                                <ul className="space-y-2">
                                    {sources.map((source, index) => (
                                        <li key={index} className="flex items-start">
                                            <LinkIcon className="w-4 h-4 mr-3 mt-1 text-brand-gold flex-shrink-0" />
                                            <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gold hover:underline break-all">
                                                {source.title || 'Fonte externa'}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}
                 {!loading && !error && news.length === 0 && (
                     <p className="text-center text-gray-500 dark:text-gray-400">Nenhuma notícia encontrada no momento.</p>
                 )}
            </div>
        </div>
    </AnimatedSection>
  );
};

export default RealTimeNews;