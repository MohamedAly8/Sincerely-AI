import React, {useRef} from "react";
import styles from "./footer.module.css";
import {AiFillLinkedin, AiOutlineSend} from "react-icons/ai"
  
const Footer = ({forwardRef}) => {
  return (
    <div className={styles.footer} ref={forwardRef}>
        <div className={styles.footerContainer}>
            
            <div className={styles.footerBrand}>
                <div className={styles.startUsing}>
                    <h2 className={styles.sincerelytext}>Sign up to get notified for feature updates</h2>
                    
                    <div className={styles.emailContainer}>
                        <form className={styles.emailContainer} netlify>
                            <input type="text" placeholder="Enter your email..." className={styles.emailfield}></input>
                        </form>
                        
                        <AiOutlineSend className={styles.sendBtn} />
                    </div>
                </div>
                {/* <div className={styles.imageContainer}> */}
                    <img src="/herobg.png" className={styles.heroimage} />
                {/* </div> */}
            </div>

            <div className={styles.footerColumns}>
                <div className={styles.logoAndQuote}>
                    <div className={styles.navbarBrand}>
                      <img src="/icon.png"></img><h2>SincerelyAI</h2>
                    </div>
                    <p>As professional as it gets.</p>
                </div>
                <div className={styles.footerColumn}>
                    <ul>
                        <li className={styles.footerItem}>About</li>
                        <li className={styles.footerItem}>Features</li>
                        <li className={styles.footerItem}>Contact</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <ul>
                        <li className={styles.footerItem}>Terms of Use</li>
                        <li className={styles.footerItem}>Privacy Policy</li>
                        <li className={styles.footerItem}>Cookie Policy</li>
                    </ul>
                </div>
                {/* <div className={styles.footerColumn}>
                    <h4>Let's chat!</h4>
                    <p>ayed@mohamed.ca</p>
                </div> */}
            </div>
        </div>
    </div>

  );
};
export default Footer;