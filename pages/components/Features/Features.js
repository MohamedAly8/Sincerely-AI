import React, {useEffect} from 'react';
import styles from './features.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Features = () => {
    const featuresList = [
        {
            title: 'AI-Powered',
            description: 'Powered by state-of-the-art GPT-4 architecture, providing highly accurate, relevant and context-aware translations.'
        },
        {
          title: 'Data Privacy',
          description: 'User data is secure and not stored, ensuring your conversations and corporate information remain confidential.'
      },
        {
          title: 'Tailored Tone & Style',
          description: 'Choose from a range of tones and styles to match your brand voice, message purpose or receiver\'s preference.'
        },
        {
            title: 'Saves Time & Effort',
            description: 'No need to spend countless hours writing and revising - get a professional, ready-to-send text in seconds.'
        },

    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);



return (
  <div className={styles.features}>
      <h2 className={styles.featuresHeader}>Features</h2>
      <div className={styles.featuresGrid}>
          {featuresList.map((feature, index) => (
              <div className={styles.featureBox} key={index} data-aos="zoom-out-up" data-aos-anchor-placement="center-bottom">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
              </div>
          ))}
      </div>
  </div>
);
};

export default Features;