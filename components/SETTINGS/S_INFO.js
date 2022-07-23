import React from "react";
import { useStateContext } from "../../contexts/NoxGram";
function S_INFO({ close }) {
  const {
    setNickname,
    handleSetInfo,
    nickname,
    setPayableAccount,
    payableAccount,
    ToastContainer,
  } = useStateContext();
  const styles = {
    inputsContainer:
      "overflow-hidden neon-button w-full items-center rounded-sm border-white border-2 shadow-md bg-gradient-to-b from-black to-blue-600  to-white to-black",
    inputs:
      "mx-5 my-2 rounded-md px-3 text-sm h-8 text-black fonts-sans  md:mx-[32%]",
    setInfoBTN: "neon-button my-5",
    InfoWarning:
      " shadow-md shadow-black mt-8 p-4 mb-4 text-center text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800",
    warningText: " font-medium block",
  };

  return (
    <>
      <ToastContainer />
      <div>
        <span
          onClick={() => {
            close();
          }}
        ></span>
        <div className={styles.inputsContainer}>
          <div>
            <input
              type="text"
              placeholder="Username...."
              className={styles.inputs}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Payable Account...."
              className={styles.inputs}
              value={payableAccount}
              onChange={(e) => setPayableAccount(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <button className={styles.setInfoBTN} onClick={handleSetInfo}>
              Set Info
            </button>
          </div>
        </div>
      </div>

      <div className={styles.InfoWarning} role="alert">
        <span className={styles.warningText}>Warning alert!</span>
        Please Double check your Payable Account!
      </div>
    </>
  );
}

export default S_INFO;
