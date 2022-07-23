import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { MoralisProvider } from "react-moralis";
import { ModalProvider } from "react-simple-hook-modal";
import { StateContextProvider } from "../contexts/NoxGram";
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <MoralisProvider
      serverUrl="https://tuiihgonynxq.usemoralis.com:2053/server"
      appId="MTpm9UaYg0oV9v1VFh941WlJTE5XlwokvEt07bow"
    >
      {" "}
      <StateContextProvider>
        <ModalProvider>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ModalProvider>
      </StateContextProvider>
    </MoralisProvider>
  );
}
