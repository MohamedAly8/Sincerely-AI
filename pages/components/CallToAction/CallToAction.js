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
    <section className={styles.ctaSection}>
      <h2>Experience the Power of SincerelyAI Today!</h2>
      <p>Transform your communication style and make your professional interactions seamless and efficient. Try out our AI-powered writing assistant now!</p>
      <button onClick={handleClick} className={styles.demoButton}>
        Try the Demo
      </button>
    </section>
  );
};

export default CallToAction;