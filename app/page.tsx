"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from 'wagmi/connectors'


const ConnectWalletComponent = () => {
  const { address, isConnected} = useAccount();
  const { connect } = useConnect()
  const { disconnect } = useDisconnect();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [points, setPoints] = useState(0);


  const handleConnect = () => {
    if (isConnected) {
      disconnect();
      setPoints(0);
    } else {
      connect({ connector: injected() })
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setPoints(points + 100);
  };

  useEffect(() => {
    if (address) {
      setPoints(points + 100);
    }
  }
  , [address]);

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent("I just connected my wallet and shared my email!")}`;

  return (
    <div>
      <h1>Engagement Quests - POC </h1>
      <p>Points: {points}</p>
      <button onClick={handleConnect} className={styles['connect-btn']}>
        {isConnected ? `Disconnect from ${address}`  : "Connect"}
      </button>
      {isConnected && !isSubmitted && (
        <div className={styles['email-wrapper']}>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Submit</button>
        </form>
        </div>
      )}
      {isSubmitted && (<div className={styles['twitter-share']}>
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          Share on Twitter
        </a></div> 
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <ConnectWalletComponent />
        </div>
      </main>
      <footer className={styles.footer}>
      
      </footer>
    </div>
  );
}
