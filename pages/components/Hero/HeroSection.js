import React from 'react';
import styles from './herosection.module.css';
import { useRouter } from 'next/router';  



const HeroSection = () => {
  const router = useRouter();

    const gotoDemo = () => {
        router.push('/demo');
    };
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>SincerelyAI</h1>
        <p className={styles.description}>
          Transform your <span className={styles.bizcoms}>business communications</span> with <span className={styles.AI}>AI-Enhanced</span> text refinement.
        </p>
        <p className={styles.tagline}>
          Sincerely, as professional as it gets
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.buttongs} onClick={gotoDemo}>Get Started</button>
          <button className={styles.button} onClick={gotoDemo}>Try Demo</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/herobg.png" />
      </div>
      
    </div>
  );
};

export default HeroSection;