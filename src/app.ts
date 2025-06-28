import * as http from 'http';
import { getListEpisodes, getFilterEpisodes } from './controllers/podcasts-controller.js';
import { Routes } from './routes/routes.js';
import { HttpMethods } from './utils/http-methods.js';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];

    // List podcasts
    if (request.method === HttpMethods.GET && baseUrl === Routes.LISTPODCASTS) {
        await getListEpisodes(request, response);
    }

    // Filter podcasts
    if (request.method === HttpMethods.GET && baseUrl === Routes.FILTEREPISODE) {
        await getFilterEpisodes(request, response);
    }

}