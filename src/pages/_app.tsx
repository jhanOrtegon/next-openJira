import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/themes";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "@/index.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
