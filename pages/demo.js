import Head from "next/head";
import { use, useState, useEffect } from "react";
import styles from "./demo.module.css";
import Navbar from "./components/Navbar/Navbar";
import {RingLoader} from 'react-spinners';

export default function Demo() {
  const [promptInput, setpromptsInput] = useState("");
  const [toneInput, setToneInput] = useState("Angry");
  const [recieverInput, setRecieverInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(1);

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



  return (
    <div>
      <Head>
        <title>Sincerely</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h3>Sincerely</h3>
        <p>As professional as it gets</p>
        <form onSubmit={onSubmit}>
          <input 
            type="recepient"
            name="reciever"
            placeholder="Who is this for?"
            value={recieverInput}
            onChange={(e) => setRecieverInput(e.target.value)}
          />
          <input
            type="prompt"
            name="prompt"
            placeholder="What do you want to say?"
            value={promptInput}
            onChange={(e) => setpromptsInput(e.target.value)}
          />
          <div className={styles.toneHeaderContainer}>
            <h4 className={styles.toneHeader}>Tone</h4>
          </div>

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
          <RingLoader color="#9119e8" loading={loading} />
        }
        <div>
          {result && result.split("\n").map((line, index) => (
            <p className={styles.result} key={index}>{line}</p>   
          ))}
        </div>
        
      </main>
    </div>
  );
}