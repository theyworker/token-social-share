 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import WagmiProviderComp from "@/lib/wagmi/wagmi-provider";

import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from './config';
import WagmiProviderComp from "./lib/wagmi-provider";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProviderComp initialState={initialState}>
          {children}
        </WagmiProviderComp>
      </body>
    </html>
  );
}