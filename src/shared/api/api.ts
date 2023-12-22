import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://6581181f3dfdd1b11c4268bd.mockapi.io/api/v1',
});
