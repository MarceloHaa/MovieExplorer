import React from 'react';
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.movieDetails}>
                <button onClick={onClose} className={styles.closeButton}>
                    ✕
                </button>
                <header>
                    <h2 className={styles.title}>
                        {movie.Title} ({movie.Year})
                    </h2>
                </header>
                <div className={styles.content}>
                    <div className={styles.posterContainer}>
                        <img
                            src={movie.Poster}
                            alt={`Poster do filme ${movie.Title}`}
                            className={styles.poster}
                            onError={(e) => {
                                e.target.src =
                                    'https://via.placeholder.com/300x450?text=No+Poster';
                            }}
                        />
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>Sinopse</dt>
                            <dd>{movie.Plot || 'Sinopse não disponível'}</dd>

                            <dt>Diretor</dt>
                            <dd>
                                {movie.Director || 'Diretor não disponível'}
                            </dd>

                            <dt>Elenco</dt>
                            <dd>{movie.Actors || 'Elenco não disponível'}</dd>

                            <dt>Gênero</dt>
                            <dd>{movie.Genre || 'Gênero não disponível'}</dd>

                            <dt>Duração</dt>
                            <dd>{movie.Runtime || 'Duração não disponível'}</dd>

                            <dt>Avaliação IMDb</dt>
                            <dd>
                                <span className={styles.rating}>
                                    ⭐ {movie.imdbRating || 'N/A'}/10
                                </span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
