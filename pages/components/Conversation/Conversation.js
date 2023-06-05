import React, { useState } from 'react';
import styles from './conversation.module.css';

const Conversation = () => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you'd handle sending the user's message to your API for a response.
        console.log(userInput);
        setUserInput('');
    }

    return (
        <div className={styles.conversationwrapper}>
            
            <h1>Transform Your Communication</h1>
        
        <div className={styles.samples}>

        <div className={styles.conversation}>
            <div className={styles.contact}>
                {/* placeholdren for css */}
            <p className={styles.userimg}>S</p>
            <h2>SincerelyAI</h2>
            </div>
            <div className={styles.messages}>
                <div className={styles.messageUser}>
                    <p>I need to ask for a vacation but I also want a raise.</p>
                </div>
                <div className={styles.messageAI}>
                    <p> 
                    Dear [Boss's Name],
                    <br></br>
                    <br></br>
                    I hope this message finds you well. Considering the significant progress we've made on our project and its current stable status, I believe it would be beneficial for me to take some time off to rejuvenate and return with renewed energy.
                        <br></br>
                        <br></br>
                        Additionally, I'd like to discuss the potential for salary adjustments to reflect the added responsibilities I've taken on. Looking forward to our discussion.
                        <br></br>
                        <br></br>
                        Sincerely,
                        <br></br>
                        [Your Name]

                    </p>
                </div>
            </div>
        </div>
        <div className={styles.conversation}>
            <div className={styles.contact}>
                {/* placeholdren for css */}
            <p className={styles.userimg}>S</p>
            <h2>SincerelyAI</h2>
            </div>
            <div className={styles.messages}>
                <div className={styles.messageUser}>
                    <p>Yo boss, need some more time. The project's a tough cookie!' Help?</p>
                </div>
                <div className={styles.messageAI}>
                    <p> 
                        Dear [Boss's Name],
                        <br></br>
                        <br></br>
                        I hope this message finds you well. I am reaching out to discuss the project deadline. Our team has been diligently working on it, however, due to its complexity and our desire to maintain a high standard of quality, we find ourselves requiring a bit more time.
                        <br></br>
                        <br></br>
                        Could we potentially consider an extension for the deadline to ensure that our deliverables are up to the mark?
                        <br></br>
                        <br></br>
                        Thank you for understanding.
                        <br></br>
                        <br></br>
                        Sincerely,
                        <br></br>
                        [Your Name]





                    </p>
                </div>

            </div>

        </div>
        </div>
        </div>
    );
};

export default Conversation;