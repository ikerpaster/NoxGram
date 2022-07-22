import Image from "next/image";
import { useMoralis } from "react-moralis";

import Logo from "../assets/NG-logo.png";
import { useState } from "react";

export default function SignIn() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId:
        "BF5Yg99p09lhrzh2SHpc8n57L01rZXIs1ygwunmlWS5F-gLkReFO6QirCejHXfnZLNLWSx8nCQsxei5m9mnw2VA",
      chainId: Moralis.Chains.POLYGON_MUMBAI,
    });
  };

  const styles = {
    msg: "w-full px-5 mb-12 text-center text-sm",
  };
  return (
    <div className="w-full h-full  flex justify-center ">
      <div className=" ">
        <Image className="align-center " src={Logo} />
        <span className="block mt-[-100px] absolute text-font w-full text-center  text-[rgb(255,20,189)] animate-pulse text-xs md:w-[40%] ">
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
          <button className="neon-button" onClick={handleCustomLogin}>
            Login with Web3Auth
          </button>
        </div>
      </div>
    </div>
  );
}
