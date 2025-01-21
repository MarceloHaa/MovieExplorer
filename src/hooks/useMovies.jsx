import { useQuery } from '@tanstack/react-query';
import { api } from '../api/moviesApi';

export function useMovies() {
    const useSearchMovies = (query) => {
        return useQuery({
            queryKey: ['movies', query],
            queryFn: () => api.searchMovies(query),
            enabled: !!query,
            staleTime: 5 * 60 * 1000,
            select: (data) => data.Search || [],
        });
    };

    const useMovieDetails = (movieId) => {
        return useQuery({
            queryKey: ['movie', movieId],
            queryFn: () => api.getMovieDetails(movieId),
            enabled: !!movieId,
            staleTime: 30 * 60 * 1000,
        });
    };

    return {
        useSearchMovies,
        useMovieDetails,
    };
}
