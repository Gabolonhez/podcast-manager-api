import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { sendResponse, sendError } from "../utils/responses";

const defaultContent = {'Content-Type': ContentType.JSON};

 export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

   try {
    const content: PodcastTransferModel = await serviceListEpisodes();
    sendResponse(response, Number(content.statusCode), content.body);
 } catch (error) {
   sendError(response, 500, "Failed to fetch episodes")
 }
 }

 export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

  try {
      if (!request.url) {
         sendError(response, 400, "URL parameter is required");
         return;
      }
      const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);
      sendResponse(response, Number(content.statusCode), content.body);
  } catch (error) {
      sendError(response, 500, "Failed to filter episodes");
  }
};

export const handleOptions = (request: IncomingMessage, response: ServerResponse) => {
    sendResponse(response, 200, {}, {
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
       "Content-Type": ContentType.JSON
    });
};