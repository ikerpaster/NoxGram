import Image from "next/image";

import { useState, useContext } from "react";
import { useStateContext } from "../contexts/NoxGram";
import LOGO from "../assets/NG-logo.png";
export default function SignIn() {
  const { authenticate, authError, isAuthenticating, Moralis, useMoralis } =
    useStateContext();
  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId:
        "BF5Yg99p09lhrzh2SHpc8n57L01rZXIs1ygwunmlWS5F-gLkReFO6QirCejHXfnZLNLWSx8nCQsxei5m9mnw2VA",
      chainId: Moralis.Chains.POLYGON_MUMBAI,
      loginMethodsOrder: [
        "google",
        "facebook",
        "twitter",
        "github",
        "apple",
        "linkedin",
        "email_passwordless",
      ],
      theme: "dark",
      appLogo: "../assets/NG-logo.png",
    });
  };

  const styles = {
    msg: "w-full px-5 mb-12 text-center text-sm",
    noxTitle:
      "ml-[80px] md:ml-0 block mt-[-100px] absolute text-font w-full text-center  text-[rgb(255,20,189)] animate-bounce text-xs md:w-[40%] ",
    signInCard:
      "w-[600px] h-[1457px] pt-[40%]  bg-black/40 overflow-y-hidden  md:w-full  md:min-h-screen md:pt-0 md:bg-traparent  flex justify-center ",
  };
  return (
    <div className={styles.signInCard}>
      <div className="">
        <Image className="align-center " src={LOGO} />
        <span className={styles.noxTitle}>
          NOXGRAM (Social Media Helps Members to make money)
        </span>

        {isAuthenticating && (
          <p className={`${styles.msg} text-green-600`}>Authenticating</p>
        )}
        {authError && (
          <p className={`${styles.msg} text-red-600`}>
            {JSON.stringify(authError.message)}
          </p>
        )}
        <div className="text-center">
          <button
            className="neon-button animate-pulse"
            onClick={handleCustomLogin}
          >
            Login with Web3Auth
          </button>
        </div>
      </div>
    </div>
  );
}
