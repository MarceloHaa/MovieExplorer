import React from 'react';
import styles from './MovieItem.module.css';

const MovieItem = ({ movie, onClick, isSelected }) => {
    return (
        <div className={styles.movieItem}>
            <img
                src={movie.Poster}
                alt={`Poster do filme ${movie.Title}`}
                className={styles.poster}
                onError={(e) => {
                    e.target.src =
                        'https://via.placeholder.com/150x225?text=No+Poster';
                }}
            />
            <div className={styles.movieInfo}>
                <h3 className={styles.title}>{movie.Title}</h3>
                <p className={styles.year}>{movie.Year}</p>
                <button
                    onClick={() => onClick(movie.imdbID)}
                    className={styles.detailsButton}
                >
                    {isSelected ? 'Fechar Detalhes' : 'Mostrar Detalhes'}
                </button>
            </div>
        </div>
    );
};

export default MovieItem;
