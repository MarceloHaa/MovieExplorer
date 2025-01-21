import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <nav className={styles.nav}>
                <div className={styles.navContent}>
                    <NavLink to="/" className={styles.logo}>
                        Movie Explorer
                    </NavLink>
                    <div className={styles.links}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.link
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : styles.link
                            }
                        >
                            Buscar Filmes
                        </NavLink>
                    </div>
                </div>
            </nav>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
