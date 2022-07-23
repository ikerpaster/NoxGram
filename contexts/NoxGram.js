import React, { createContext, useContext, useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import { useRecoilState } from "recoil";
import { db, storage } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState(1);
  const { openModal, isModalOpen, closeModal } = useModal();
  const { logout, Moralis, user, authenticate, authError, isAuthenticating } =
    useMoralis();
  // const user = Moralis.User.current();
  const contractProcessor = useWeb3ExecuteFunction();

  const [balance, setBalance] = useState(0);
  // const [userid, setUserid] = useState(user?.attributes?.accounts);
  const [nickname, setNickname] = useState("");
  const [payableAccount, setPayableAccount] = useState("");
  const [payableAcc, setPayableAcc] = useState("");
  const [modTimer, setMODTimer] = useState(false);
  const userid = String(user?.attributes?.accounts);
  const fetchBalance = async () => {
    try {
      const options = { chain: Moralis.Chains.ETH_ROPSTEN };
      const balance = await Moralis.Web3API.account.getNativeBalance(options);
      setBalance(balance.balance / 10 ** 18);
    } catch {}
  };
  useEffect(() => {
    // fetchBalance();
    handleSetInfo();
  }, []);

  // useEffect(async () => {
  //   // const currentPayableAccount = await user?.get("pAccount");
  //   // setPayableAcc(currentPayableAccount);
  // }, [setPayableAcc]);

  // const getUserInfo = async () => {
  //   try {
  //     await enableWeb3();
  //     const query = new Moralis.Query("_User");
  //     query.equalTo("prodID", parseInt(proID));
  //     query.limit(1);
  //     const results = await query.find();

  //     setSingleAssets(results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log("salama" + String(user?.attributes?.accounts));
  const handleSetInfo = () => {
    if (user) {
      if (nickname && payableAccount) {
        user.set("username", nickname);
        user.set("pAccount", String(payableAccount));
        user.save();
        // window.location.reload();
        // setDoc(doc(db, "invumo", "LA"), {

        setDoc(doc(db, "_User", userid), {
          userid: userid,
          username: user.attributes.username,
          userImg: userLOGO,
          payableAccount: String(payableAccount),
        });
        toast("Succesfully Saved!");
        setTimeout(() => {
          setMODTimer(false);
        }, 6000);
        // setMODTimer(false);
        // setPayableAccount("");
        // setNickname("");
      } else {
        toast("Can't set empty Field");
        // console.log("Can't set empty Field ");
      }
    } else {
      console.log("No user");
    }
  };

  const userLOGO =
    "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";

  return (
    <StateContext.Provider
      value={{
        fetchBalance,
        balance,
        logout,
        Moralis,
        user,
        authenticate,
        authError,
        isAuthenticating,
        useMoralis,
        useWeb3ExecuteFunction,
        handleSetInfo,
        setNickname,
        nickname,
        setPayableAccount,
        payableAccount,
        Modal,
        useModal,
        ModalTransition,
        openModal,
        isModalOpen,
        closeModal,
        payableAcc,
        ToastContainer,
        toast,
        modTimer,
        setMODTimer,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
