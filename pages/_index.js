import React, { useState, useEffect } from "react";
import Head from "next/head";
import Feed from "../components/POSTS/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import S_INFO from "../components/SETTINGS/S_INFO";
import { useStateContext } from "../contexts/NoxGram";

export default function HomePage() {
  const {
    Modal,
    ModalTransition,
    openModal,
    closeModal,
    user,
    modTimer,
    setMODTimer,
  } = useStateContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      setMODTimer(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    main: "bg-black min-h-screen flex max-w-[1500px] mx-auto",
  };
  return (
    <>
      {!user.attributes.pAccount && (
        <>
          {" "}
          {modTimer && (
            <Modal isOpen={openModal} transition={ModalTransition.SCALE}>
              <S_INFO close={closeModal} />
            </Modal>
          )}
        </>
      )}

      <div className="">
        <Head>
          <title>Home / NoxGram</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      </div>
    </>
  );
}
