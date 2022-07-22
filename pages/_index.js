import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

import Login from "../components/Login";
// import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { useMoralis } from "react-moralis";
export default function HomePage() {
  const { authenticate, isAuthenticated } = useMoralis();

  return (
    <>
      <div className="">
        <Head>
          <title>Home / NoxGram</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
          <Feed />

          <Widgets />

          {/* {isOpen && <Modal />} */}
        </main>
      </div>
    </>
  );
}
