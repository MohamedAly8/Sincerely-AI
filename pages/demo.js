import Head from "next/head";
import { useState } from "react";
import styles from "./demo.module.css";
import Navbar from "./components/Navbar/Navbar";
import {RingLoader} from 'react-spinners';

export default function Demo() {
  const [promptInput, setpromptsInput] = useState("");
  const [toneInput, setToneInput] = useState("");
  const [recieverInput, setRecieverInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  function changeTone(e, tone) {
    e.preventDefault();
    setToneInput(tone);
  }

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
        <link rel="icon" href="/dog.png" />
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
          <div className={styles.toneBtns}>
            <button className={toneInput === "Passive Aggressive" ? styles.selectedToneBtn : styles.toneBtn} onClick={(e) => changeTone(e, "Passive Aggressive")}>Passive Aggressive</button>
            <button className={toneInput === "Respectful" ? styles.selectedToneBtn : styles.toneBtn} onClick={(e) => changeTone(e, "Respectful")}>Respectful</button>
            <button className={toneInput === "Angry" ? styles.selectedToneBtn : styles.toneBtn} onClick={(e) => changeTone(e, "Angry")}>Angry</button>
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
