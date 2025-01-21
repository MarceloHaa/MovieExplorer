import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={styles.container}>
            <div
                className={`${styles.contentWrapper} ${
                    isVisible ? styles.visible : ''
                }`}
            >
                <div className={styles.heroSection}>
                    <h1 className={styles.title}>
                        <span className={styles.welcomeText}>Bem-vindo ao</span>
                        <span className={styles.mainTitle}>Movie Explorer</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Descubra, explore e encontre informações sobre seus
                        filmes favoritos
                    </p>
                </div>
                <div className={styles.buttonWrapper}>
                    <Link to="/movies" className={styles.button}>
                        <div className={styles.dots_border}></div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className={styles.sparkle}
                        >
                            <path
                                className={styles.path}
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke="black"
                                fill="black"
                                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                            ></path>
                            <path
                                className={styles.path}
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke="black"
                                fill="black"
                                d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                            ></path>
                        </svg>
                        <span className={styles.text_button}>
                            Buscar Filmes
                        </span>
                    </Link>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>🎬</div>
                        <h3>Busca Inteligente</h3>
                        <p>
                            Encontre filmes rapidamente com nossa busca
                            otimizada
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>📱</div>
                        <h3>Responsivo</h3>
                        <p>
                            Acesse de qualquer dispositivo com uma experiência
                            perfeita
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>🌟</div>
                        <h3>Detalhes Completos</h3>
                        <p>Informações detalhadas sobre cada filme</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>⚡</div>
                        <h3>Rápido e Fácil</h3>
                        <p>
                            Interface intuitiva para uma navegação sem esforço
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.backgroundAnimation} />
        </div>
    );
};

export default Home;
