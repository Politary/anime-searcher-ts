import axios from 'axios';

export const API_URL = `https://api.jikan.moe/v4`;

export const API = axios.create({
    baseURL: API_URL,
});
