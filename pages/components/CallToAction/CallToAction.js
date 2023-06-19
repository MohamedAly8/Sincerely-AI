import React from 'react';
import styles from './calltoaction.module.css';
import { useRouter } from 'next/router';

const CallToAction = () => {
  const router = useRouter();

  const handleClick = () => {
    // Use the Next.js router to redirect to your demo page
    router.push('/demo');
  };

  return (
    <div className={styles.videoBackground}>
      <video autoPlay={true} loop={true} muted={true} className={styles.vid}>
        <source src='/writingemailvid.mp4' type='video/mp4' />
        Your browser does not support.
      </video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.contentElements}>
          <h2>Experience the Power of SincerelyAI Today!</h2>
          <p>Transform your communication style and make your professional interactions seamless and efficient. Try out our AI-powered writing assistant now!</p>
          <button onClick={handleClick} className={styles.demoButton}>
            Try the Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;