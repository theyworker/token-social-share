"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useReadContract } from "wagmi";
  // import { USDTAbi } from "../abi/USDTAbi";

export default function Home() {

  const [account, setAccount] = useState<string | null>(null);
   
  const USDTAddress = "0x...";
   

    const result = useReadContract({
      // abi: USDTAbi,
      address: USDTAddress,
      functionName: "totalSupply",
    });
  


  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
          
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
