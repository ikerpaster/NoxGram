import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Head from "next/head";

function Tasks() {
  const router = useRouter();
  const [userInfo, getuserInfo] = useState([]);
  const [todayDateMena, setTodayDateMena] = useState("");
  const [updCounter, setUpdCounter] = useState(0);
  const [taske, setTaske] = useState(0);

  const TaskLoop = ({ n, onClick }) => {
    return (
      <div className="">
        <button
          onClick={onClick}
          type="button"
          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Do task{n}
        </button>
      </div>
    );
  };

  const runCallback = (cb) => {
    return cb();
  };

  //   date formate
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join("");
  }

  useEffect(() => {
    setTodayDateMena(formatDate(new Date()));
  }, []);

  const cash = 500;
  return (
    <div>
      <Head>
        <title>Tasks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
          <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
            <div
              className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="h-5 text-white" />
            </div>
            TASKS:: $30
          </div>

          <div className="bg-[#16304b] w-auto h-auto py-6 flex justify-center mx-14 mt-10 rounded-md">
            <div className="max-w-sm pb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg border border-gray-200 shadow-md  ">
              <a href="#">
                <img
                  className="rounded-t-lg  mb-10"
                  src="http://www.zaarapp.com/assets/images/inner-banner.png"
                  alt=""
                />
              </a>

              <div
                class="flex mx-4 justify-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert"
              >
                <svg
                  class="inline flex-shrink-0 mr-3 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div>
                  <span class="font-medium block ">MY DAILY TASKS</span>
                  Total Tasks is 5.
                </div>
              </div>

              <div className="w-full p-5 grid grid-cols-4 justify-center">
                {runCallback(() => {
                  var loopTask;
                  if (cash == 100) {
                    loopTask = 2;
                  }
                  if (cash == 250) {
                    loopTask = 5;
                  }
                  if (cash == 500) {
                    loopTask = 10;
                  }
                  if (cash == 1000) {
                    loopTask = 20;
                  }
                  const row = [];

                  // const genIDV = taske + "_" + todayDateMena + "_" + _id;
                  // onSnapshot(
                  //   query(
                  //     collection(db, "Tasks"),
                  //     where("ownerid", "==", _id),
                  //     where("dateCode", "==", todayDateMena)
                  //   ),
                  //   (snapshot) => {

                  //   }
                  // );
                  // setUpdCounter(7);
                  // console.log("final=> " + taske + " updCounter" + updCounter);
                  const newcounter = loopTask - updCounter;
                  for (var i = 1; i <= newcounter; i++) {
                    row.push(
                      <div key={i}>
                        <TaskLoop
                          n={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            // alert("ok");
                          }}
                        />
                      </div>
                    );
                  }

                  if (updCounter == loopTask) {
                    return (
                      <div
                        className="w-28  text-white h-28 flex items-center p-5 text-sm
                      bg-gradient-to-r from-purple-400 md:from-yellow-500
                      "
                      >
                        You Completed Your Daily Tasks
                      </div>
                    );
                  }
                  return row;
                })}
              </div>

              <div>
                <div
                  class="flex mx-4 justify-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <svg
                    class="inline flex-shrink-0 mr-3 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <span class="font-medium flex">
                      <b>
                        {" "}
                        TASK{" "}
                        <span className="text-2xl w-10 h-10 border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-2 ">
                          <span className="p-px animate-ping text-white">
                            {" "}
                            {updCounter}
                          </span>
                        </span>{" "}
                        COMPLETE{" "}
                      </b>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>{" "}
              </div>

              {/* end card  */}
            </div>{" "}
          </div>
        </div>
        <Widgets />

        {/* {isOpen && <Modal />} */}
      </main>
    </div>
  );
}

export default Tasks;
