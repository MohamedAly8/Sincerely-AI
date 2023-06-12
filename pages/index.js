import React from 'react';
import Head from 'next/head';
import styles from './index.module.css';
import Navbar from './components/Navbar/Navbar';
import Conversation from './components/Conversation/Conversation';
import Features from './components/Features/Features';
import { Router } from 'next/router';
import { useRouter } from 'next/router';
import HeroSection from './components/Hero/HeroSection';
import About from './components/About/About';
import CallToAction from './components/CallToAction/CallToAction';


const LandingPage = () => {
    const router = useRouter();

    const handleStartNowClick = () => {
        router.push('/demo');
    };
  return (
    <div>
      <Head>
        <title>SincerelyAI</title>
        {/* add icon on tab */}
        <link rel="icon" href="/icon.png" />

      </Head>

      <Navbar/>
      <HeroSection />
      <Conversation />
      <Features />
      <About />
      <CallToAction />
      

      <main className={styles.main}>
    
        <section className={styles.about}>
          <h2>About Sincerely</h2>
          <p>
            Sincerely uses cutting-edge AI technology to elevate your business communication. 
            Replace placeholder with actual about text.
          </p>
        </section>

        <section className={styles.features}>
          <h2>Features</h2>
          <ul>
            <li>AI-enhanced text refinement</li>
            <li>Various styles of professional language</li>
            <li>Integration with your daily workflow</li>
    
          </ul>
        </section>

        <section className={styles.getStarted}>
          <h2>Get Started with Sincerely</h2>
          <button className={styles.button} onClick={handleStartNowClick}>Start Now</button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
