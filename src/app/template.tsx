"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { Liff } from "@line/liff";
import { useCallback, useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'


export default function Template({ children }: { children: React.ReactNode }) {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        console.log("LIFF init...");
        liff
          .init({ 
            liffId: process.env.NEXT_PUBLIC_LIFF_ID! ,
            withLoginOnExternalBrowser: true, // 外部ブラウザでもログインできるように
          })
          .then(() => {
            console.log("LIFF init succeeded.");
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ liff: liffObject, liffError: liffError }}>
      <ChakraProvider theme={theme}>
        <div>{children}</div>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}
