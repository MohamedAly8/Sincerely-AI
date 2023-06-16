import React, {useEffect, useRef} from "react";
import styles from "./about.module.css";
// import icons from favicon icons
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const About = ({forwardRef}) => {

    const mohamedimgsource = "/mohamed.png";
    const ayedimgsource = "/ayed.png"

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div ref={forwardRef} className={styles.aboutcontainer}>
            <div className={styles.aboutText}>
                <h2>Our Team</h2>
            </div>

            <div className={styles.aboutGrid}>
                <div className={styles.aboutBox} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <img src={mohamedimgsource}/>
                    <h3>Mohamed Aly</h3>
                    <p>Full Stack Engineer</p>
                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/mohamed-aly08/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/MohamedAly8" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                    </div>
                </div>
                
                <div className={styles.aboutBox} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <img src={ayedimgsource} />
                    <h3>Ayed Naber</h3>
                    <p>Full Stack Developer</p>
                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/ayed-naber/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/ayednaber" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
