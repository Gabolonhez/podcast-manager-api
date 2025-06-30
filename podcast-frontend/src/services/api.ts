import axios from 'axios';
import { PodcastTransferModel } from '../types/podcast';

const api = axios.create({
  baseURL: 'http://localhost:3333', // URL da sua API
  timeout: 10000,
});

export const podcastService = {
  async getEpisodes(): Promise<PodcastTransferModel> {
    try {
      const response = await api.get<PodcastTransferModel>('/list');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar episódios:', error);
      throw error;
    }
  },

  async getEpisodesByName(podcastName: string): Promise<PodcastTransferModel> {
    try {
      const response = await api.get<PodcastTransferModel>(`/episode?p=${encodeURIComponent(podcastName)}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar episódios por nome:', error);
      throw error;
    }
  }
};

export default api;
