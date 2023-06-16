import React, {useRef} from 'react';
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
import Footer from './components/Footer/Footer';


const LandingPage = () => {
    const router = useRouter();

    const handleStartNowClick = () => {
        router.push('/demo');
    };

    const aboutRef = useRef(null);
    const featuresRef = useRef(null);
    const contactRef = useRef(null);
  
    // const scrollToRef = (ref) => {
    //     console.log(ref)
    //     ref.current.scrollIntoView({behavior: 'smooth'}) 
    // };

  return (
    <div>
      <Head>
        <title>SincerelyAI</title>
        {/* add icon on tab */}
        <link rel="icon" href="/icon.png" />

      </Head>

      <Navbar aboutRef={aboutRef} featuresRef={featuresRef} contactRef={contactRef}/>
      <HeroSection />
      <Conversation />
      <Features forwardRef={featuresRef} />
      <CallToAction />
      <About forwardRef={aboutRef} />
      <Footer forwardRef={contactRef} />

    </div>
  );
};

export default LandingPage;
