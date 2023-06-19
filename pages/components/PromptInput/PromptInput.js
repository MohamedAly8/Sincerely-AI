import React, {useState, useEffect, useRef} from 'react';
import styles from './promptinput.module.css';
import {RingLoader} from 'react-spinners';
import { FiClipboard } from 'react-icons/fi';


const PromptInput = () => {

    const [promptInput, setpromptsInput] = useState("");
    const [toneInput, setToneInput] = useState("Angry");
    const [recieverInput, setRecieverInput] = useState("");
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(1);
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  
      const handleChange = (event) => {
        setSelectedTab(parseInt(event.target.value));
      };
    
      useEffect(() => {
        let newTone = '';
        switch(selectedTab) {
          case 1:
            newTone = "Angry";
            break;
          case 2:
            newTone = "Passive Aggressive";
            break;
          case 3:
            newTone = "Delighted";
            break;
          default:
            console.log("error with setting tone");
        }
        setToneInput(newTone);
        console.log(newTone);
      }, [selectedTab]);
  
  
    async function onSubmit(event) {
      event.preventDefault();
      setLoading(true);
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            prompt: promptInput,
            tone: toneInput,
            reciever: recieverInput
           }),
        });
  
        
        const data = await response.json();
        if (response.status !== 200) {
          throw data.error || new Error(`Request failed with status ${response.status}`);
        }
  
        const actualData = data.result.split("Dear ")[1]
  
        setResult("Dear " + actualData);
        setpromptsInput("");
        setToneInput("");
        setRecieverInput("");
      } catch(error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
      finally {
        setLoading(false);
      }
    }

    const resultRef = useRef();

    const copyToClipboard = (e) => {
        e.stopPropagation();
        if (resultRef.current) {
            const resultText = resultRef.current.innerText;
            navigator.clipboard.writeText(resultText).then(() => {
                console.log('Copied to clipboard');
                setShowCopiedMessage(true);
                setTimeout(() => setShowCopiedMessage(false), 3000);
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        }
    }



return (


    <div className={styles.main}>
    <div className={styles.prompt}>
    <h3 className={styles.promptHeader}>Transform Away</h3>
    <form onSubmit={onSubmit}>
      <input 
        type="recepient"
        name="reciever"
        placeholder="Ex: John, my employee"
        value={recieverInput}
        onChange={(e) => setRecieverInput(e.target.value)}
      />
      <textarea
        type="prompt"
        name="multilinetextbox"
        placeholder="Ex: I am very disappointed in your performance, get better."
        value={promptInput}
        onChange={(e) => setpromptsInput(e.target.value)}
      />


      <div className={styles.container}>
        <div className={styles.tabs}>
          <input type="radio" id="radio-1" name="tabs" value={1} checked={selectedTab === 1} onChange={handleChange}/>
          <label className={styles.tab} htmlFor="radio-1">Angry</label>

          <input type="radio" id="radio-2" name="tabs" value={2} checked={selectedTab === 2} onChange={handleChange}/>
          <label className={styles.tab} htmlFor="radio-2">Passive</label>

          <input type="radio" id="radio-3" name="tabs" value={3} checked={selectedTab === 3} onChange={handleChange}/>
          <label className={styles.tab} htmlFor="radio-3">Happy</label>

          <span className={selectedTab === 1 ? styles.glider1 : selectedTab === 2 ? styles.glider2 : styles.glider3}></span>
        </div>
       </div>

        { !loading && <input type="submit" value="Corporate it Up" />}
        </form>


        {loading &&
        <RingLoader className={styles.loader} color="#9119e8" loading={loading} />
        }
        </div>

        <div className={styles.response}>
            <h3>Response</h3>
            <div ref={resultRef} className={styles.resultcontainer}>
                
                {showCopiedMessage && 
                <div className={styles.copySuccess}>
                    <p>Copied to clipboard!</p>
                </div>}

                {result &&<FiClipboard className={styles.clipboard} onClick={copyToClipboard}/>}
                {result && result.split("\n").map((line, index) => (
                    <p className={styles.result} key={index}>{line}</p>   
                ))}
                {!result && <p className={styles.noresult}>No response yet</p>}

            
            </div>
            
            
           
        </div>
        
    </div>

    





);



};
export default PromptInput;