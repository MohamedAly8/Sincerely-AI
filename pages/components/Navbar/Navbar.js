// Navbar.js
import React, {useRef} from 'react';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({aboutRef, featuresRef, contactRef}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

    const toLandingPage = () => {
        router.push('/');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    const scrollToRef = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>
    <main className={styles.main}>
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img src="/icon.png" onClick={toLandingPage}></img> <h2 onClick={toLandingPage}>SincerelyAI</h2>
      </div>
      <div className={menuOpen ? `${styles.navbarMenu} ${styles.open}` : styles.navbarMenu}>
        <a className={styles.navBarBtn} href="#about" onClick={() => scrollToRef(aboutRef)}>About</a>
        <a className={styles.navBarBtn} onClick={() => scrollToRef(featuresRef)} href="#features">Features</a>
        <a className={styles.navBarBtn} onClick={() => scrollToRef(contactRef)} href="#getStarted">Contact</a>
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