import Head from "next/head";
import { use, useState, useEffect } from "react";
import styles from "./demo.module.css";
import Navbar from "./components/Navbar/Navbar";
import {RingLoader} from 'react-spinners';
import PromptInput from "./components/PromptInput/PromptInput";

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
      <PromptInput />

    </div>
  );
}