import React from 'react';
import MovieItem from './MovieItem';
import MovieDetails from './MovieDetails';
import styles from './MovieList.module.css';

const MovieList = ({
    movies,
    selectedMovie,
    onMovieClick,
    hasSearched,
    isLoading,
}) => {
    return (
        <div className={styles.movieListContainer}>
            {isLoading ? (
                <p>Buscando filmes...</p>
            ) : (
                <>
                    {movies && movies.length > 0
                        ? movies.map((movie) => (
                              <div
                                  key={movie.imdbID}
                                  className={styles.movieWrapper}
                              >
                                  <MovieItem
                                      movie={movie}
                                      onClick={() => onMovieClick(movie.imdbID)}
                                      isSelected={
                                          selectedMovie?.imdbID === movie.imdbID
                                      }
                                  />
                                  {selectedMovie &&
                                      selectedMovie.imdbID === movie.imdbID && (
                                          <div className={styles.movieDetails}>
                                              <MovieDetails
                                                  movie={selectedMovie}
                                              />
                                          </div>
                                      )}
                              </div>
                          ))
                        : hasSearched &&
                          !isLoading && <p>Nenhum filme encontrado.</p>}
                </>
            )}
        </div>
    );
};

export default MovieList;
