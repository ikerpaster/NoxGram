import React from "react";
import { useMoralis } from "react-moralis";
import HomePage from "./_index";
import SignIn from "./SignIn";
export default function Home() {
  const { isAuthenticated } = useMoralis();

  return (
    <div>
      <div>{isAuthenticated ? <HomePage /> : <SignIn />}</div>
    </div>
  );
}
