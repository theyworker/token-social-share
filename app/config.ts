// lib/config.ts
 
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { localhost } from "wagmi/chains";


 
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "4gt32";
 
if (!projectId) throw new Error("Project ID is not defined");
 
const metadata = {
  name: "Web3Modal Example",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};
 
export const config = defaultWagmiConfig({
  chains: [localhost],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});