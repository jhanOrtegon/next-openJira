import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/themes";
import type { AppProps } from "next/app";
import "@/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
