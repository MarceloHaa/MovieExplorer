import axios from 'axios';

const API_KEY = '21abb5de';
const BASE_URL = 'https://www.omdbapi.com/';

export const api = {
    searchMovies: async (query) => {
        const response = await axios.get(BASE_URL, {
            params: {
                s: query,
                apikey: API_KEY,
            },
        });
        return response.data;
    },

    getMovieDetails: async (movieId) => {
        const response = await axios.get(BASE_URL, {
            params: {
                i: movieId,
                apikey: API_KEY,
            },
        });
        return response.data;
    },
};
