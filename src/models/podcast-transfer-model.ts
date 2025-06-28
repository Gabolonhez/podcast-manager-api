import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel {
    statusCode: string;
    body: PodcastModel[];

}