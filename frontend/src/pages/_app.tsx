import React, { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { TransactionContextProvider } from "../context/Context";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return (
    <TransactionContextProvider>
      <Component {...pageProps} />
    </TransactionContextProvider>
  );
}

export default MyApp;
