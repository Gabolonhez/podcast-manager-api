import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    // Search data
    const data = await repositoryPodcast();

    // Define contract
    
    let responseFormat: PodcastTransferModel = {
            statusCode:  "0",
            body: data,
    } 


    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK.toString() : StatusCode.NO_CONTENT.toString(),
        body: data,
    } 

    return responseFormat;
}