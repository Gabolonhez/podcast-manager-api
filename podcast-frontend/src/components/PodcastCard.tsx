import React from 'react';
import { PodcastEpisode } from '../types/podcast';
import { Play, Tag } from 'lucide-react';

interface PodcastCardProps {
  episode: PodcastEpisode;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ episode }) => {
  const handlePlay = () => {
    // Abre o vídeo do YouTube
    window.open(`https://www.youtube.com/watch?v=${episode.videoId}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">
          {episode.podcastName}
        </h3>
        <button
          onClick={handlePlay}
          className="ml-4 bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
          title="Reproduzir episódio"
        >
          <Play className="h-4 w-4" />
        </button>
      </div>
      
      <p className="text-gray-600 mb-4">
        Episódio: {episode.episode}
      </p>
      
      {episode.categories && episode.categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {episode.categories.map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
            >
              <Tag className="h-3 w-3 mr-1" />
              {category}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PodcastCard;
