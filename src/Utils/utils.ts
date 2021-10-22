import axios from 'axios';

export const apiController = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});
