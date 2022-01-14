import axios from 'axios';

export const API_URL = `https://api.jikan.moe/v3/search`;

export const API = axios.create({
    baseURL: API_URL,
});
