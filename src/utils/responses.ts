import { ServerResponse } from "http";
import { ContentType } from "./content-type";

const defaultHeaders = {
    'Content-Type': ContentType.JSON,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

export const sendResponse = (
    response: ServerResponse, 
    statusCode: number, 
    data: any,
    headers = defaultHeaders
) => {
    response.writeHead(statusCode, headers);
    response.write(JSON.stringify(data));
    response.end();
};

export const sendError = (
    response: ServerResponse, 
    statusCode: number = 500, 
    message: string = 'Internal Server Error'
) => {
    console.error(`Error ${statusCode}: ${message}`);
    sendResponse(response, statusCode, { error: message });
};