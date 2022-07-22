import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { MoralisProvider } from "react-moralis";
export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <MoralisProvider
      serverUrl="https://tuiihgonynxq.usemoralis.com:2053/server"
      appId="MTpm9UaYg0oV9v1VFh941WlJTE5XlwokvEt07bow"
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MoralisProvider>
  );
}
