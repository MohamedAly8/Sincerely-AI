// Navbar.js
import React from 'react';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

    const toLandingPage = () => {
        router.push('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

  return (
    <div>
    <main className={styles.main}>
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img src="/icon.png" onClick={toLandingPage}></img> <h2>SincerelyAI</h2>
      </div>
      <div className={menuOpen ? `${styles.navbarMenu} ${styles.open}` : styles.navbarMenu}>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#getStarted">Contact</a>
      </div>

        <div className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                  
        </div>
    </nav>
    </main>
    </div>
  );
};

export default Navbar;