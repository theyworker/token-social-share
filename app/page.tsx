import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";


export default function Home() {

  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    const provider: any = await detectEthereumProvider();

    if (provider) {
      try {
        const accounts = await provider.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Connect Wallet
          </a>
        
        </div>
      </main>
      <footer className={styles.footer}>
       
      
      </footer>
    </div>
  );
}
