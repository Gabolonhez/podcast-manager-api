
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    // Return Interface
    let responseFormat: PodcastTransferModel = {
        statusCode: "",
        body: []
    } 


    // Search data
    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);
        
    // Verify if content is empty

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK.toString() : StatusCode.NO_CONTENT.toString();

    // if (data.length !==0) {
    //     responseFormat.statusCode = StatusCode.OK.toString();
    
    // } else {
    //     responseFormat.statusCode = StatusCode.NO_CONTENT.toString(); 
    // }

    responseFormat.body = data;
    return responseFormat;

}