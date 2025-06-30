import React, { useState, useEffect } from 'react';
import { podcastService } from '../services/api';
import { PodcastEpisode } from '../types/podcast';
import PodcastCard from '../components/PodcastCard';
import { Search, Loader } from 'lucide-react';

const PodcastList: React.FC = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await podcastService.getEpisodes();
      
      if (response.statusCode === '200') {
        setEpisodes(response.body);
      } else {
        setError('Nenhum episódio encontrado');
      }
    } catch (err) {
      setError('Erro ao carregar episódios. Verifique se a API está rodando.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredEpisodes = episodes.filter(episode =>
    episode.podcastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.episode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.categories.some(category => 
      category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 animate-spin text-primary-600" />
        <span className="ml-2 text-gray-600">Carregando episódios...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={fetchEpisodes}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Episódios de Podcast</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar episódios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {filteredEpisodes.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          Nenhum episódio encontrado.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((episode, index) => (
            <PodcastCard key={`${episode.videoId}-${index}`} episode={episode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PodcastList;
