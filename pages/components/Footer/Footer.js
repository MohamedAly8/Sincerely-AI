import React, {useRef} from "react";
import styles from "./footer.module.css";
  
const Footer = ({forwardRef}) => {
  return (
    <div className={styles.footer} ref={forwardRef}>
        <div className={styles.footerContainer}>
            
            <div className={styles.footerBrand}>
                <h2>SincerelyAI</h2>
            </div>

            <div className={styles.footerColumns}>
                <div className={styles.footerColumn}>
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Features</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  );
};
export default Footer;