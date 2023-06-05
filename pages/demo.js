import Head from "next/head";
import { useState } from "react";
import styles from "./demo.module.css";
import Navbar from "./components/Navbar/Navbar";

export default function Demo() {
  const [promptInput, setpromptsInput] = useState("");
  const [toneInput, setToneInput] = useState("");
  const [recieverInput, setRecieverInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

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

      setResult(data.result);
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
          <input
            type="tone"
            name="tone"
            placeholder="What tone do you want to use?"
            value={toneInput}
            onChange={(e) => setToneInput(e.target.value)}
          />
          <input type="submit" value="Corporate it Up" />
        </form>
        
        {loading &&
          <div>Loading</div>
        }
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
