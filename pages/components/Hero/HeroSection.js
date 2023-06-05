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
          Transform your business communications with AI-enhanced text refinement.
        </p>
        <p className={styles.tagline}>Sincerely, as professional as it gets</p>

        <div className={styles.buttonContainer}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button} onClick={gotoDemo}>Try Now</button>
      </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/herobg.png" />
      </div>
      {/* add learn more and try now buttons beside each other */}
      
    </div>
  );
};

export default HeroSection;