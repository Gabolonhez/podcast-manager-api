export interface PodcastEpisode {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}

export interface PodcastTransferModel {
  statusCode: string;
  body: PodcastEpisode[];
}

export interface ApiResponse<T> {
  statusCode: string;
  body: T;
}
