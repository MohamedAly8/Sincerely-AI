// Navbar.js
import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div>
    <main className={styles.main}>
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <h2>Sincerely</h2>
      </div>
      <div className={styles.navbarMenu}>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#getStarted">Get Started</a>
      </div>
    </nav>
    </main>
    </div>
  );
};

export default Navbar;