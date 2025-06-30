import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel {
    statusCode: string;
    body: any;
    message?: string;
    timestamp?: string;

}

export interface ErrorResponse {
    error: string;
    statusCode: number;
    timestamp: string;
}