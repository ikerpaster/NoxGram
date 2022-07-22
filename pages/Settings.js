import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconFilled,
  ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

import { ArrowLeftIcon } from "@heroicons/react/solid";

import Head from "next/head";

function Settings() {
  const router = useRouter();
  const [_followers, _setFollowers] = useState(0);
  const [_thLIkes, _setTheLikes] = useState();
  const [_theViews, _setTheViews] = useState();
  const [_thePosts, _setThePosts] = useState();

  const [plani, setPlan] = useState({});
  const [loader, setLoader] = useState(false);
  // const [resFollowers, setResFollowers] = useState();
  // const _id = session?.user?.uid;
  // const _tag = session?.user?.tag;
  // const _email = session?.user?.email;

  const [formData, setFormData] = useState({
    followers: 0,
    thLIkes: 0,
    theViews: 0,
    thePosts: 0,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  console.log(formData);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoader(true);
    // start folowers
    let res_followers;
    if (formData.followers == 1) {
      res_followers = 1;
    }
    if (formData.followers == 3) {
      res_followers = 1.5;
    }
    if (formData.followers == 5) {
      res_followers = 2;
    }
    if (formData.followers == 10) {
      res_followers = 3;
    }
    if (formData.followers == 20) {
      res_followers = 4;
    }
    console.log("res_followers " + res_followers);

    // end followers

    // start res_thLIkes
    let res_thLIkes;
    if (formData.thLIkes == 2) {
      res_thLIkes = 1;
    }
    if (formData.thLIkes == 5) {
      res_thLIkes = 1.5;
    }
    if (formData.thLIkes == 10) {
      res_thLIkes = 2;
    }
    if (formData.thLIkes == 50) {
      res_thLIkes = 2.5;
    }

    console.log("res_thLIkes " + res_thLIkes);

    // end res_thLIkes

    // start theViews
    let res_theViews;
    if (formData.theViews == 5) {
      res_theViews = 1;
    }
    if (formData.theViews == 20) {
      res_theViews = 1.5;
    }
    if (formData.theViews == 100) {
      res_theViews = 2;
    }

    console.log("res_theViews " + res_theViews);

    // end theViews

    // start theViews
    let res_thePosts;
    if (formData.thePosts == 5) {
      res_thePosts = 0.5;
    }
    if (formData.thePosts == 25) {
      res_thePosts = 1;
    }

    console.log("res_thePosts " + res_thePosts);

    // end theViews
  }

  const mystyle = {
    // display: plani.userid == _id ? "block" : "block",
    display: "block",
  };

  const res_style = {
    // display: plani.userid != _id ? "block" : "block",
    display: "block",
  };

  return (
    <div>
      <Head>
        <title>Settings</title>
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
            ikerpaster
          </div>

          <div className="bg-[#16304b] w-auto h-auto py-6 flex justify-center mx-14 ">
            <div className="max-w-sm pb-4 bg-[#aec2c0] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://www.teachingideas.co.uk/sites/default/files/styles/718w/public/bannersettings_0.jpg?itok=-_PM_KQU"
                  alt=""
                />
              </a>
              <div className="mt-12">
                <form className="form" onSubmit={handleSubmit}>
                  {/* start selectos  */}
                  <div className="p-5" style={mystyle}>
                    <div className="inline-block relative w-64">
                      <label> Followers:</label>
                      <select
                        name="followers"
                        onChange={handleChange}
                        value={formData.followers}
                        // value={followers}
                        // onChange={(e) => setFollowers(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>0</option>
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-5 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                      {/* <span>Result: {resFollowers} % / Day. </span> */}
                    </div>
                  </div>
                  {/* end the selectos  */}
                  {/* start selectos  */}
                  <div className="p-5" style={mystyle}>
                    <div className="inline-block relative w-64">
                      <label> Likes:</label>
                      <select
                        name="thLIkes"
                        onChange={handleChange}
                        value={formData.thLIkes}
                        // value={thLIkes}
                        // onChange={(e) => setTheLikes(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>0</option>
                        <option>2</option>
                        <option>5</option>
                        <option>10</option>
                        <option>50</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-5 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                      {/* <span>Result: {resFollowers} % / Day. </span> */}
                    </div>
                  </div>
                  {/* end the selectos  */}
                  {/* start selectos  */}
                  <div className="p-5" style={mystyle}>
                    <div className="inline-block relative w-64">
                      <label> Posts Views:</label>
                      <select
                        name="theViews"
                        onChange={handleChange}
                        value={formData.theViews}
                        // value={theViews}
                        // onChange={(e) => setTheViews(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>0</option>
                        <option>5</option>
                        <option>20</option>
                        <option>100</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-5 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                      {/* <span>Result: {resFollowers} % / Day. </span> */}
                    </div>
                  </div>
                  {/* end the selectos  */}
                  {/* start selectos  */}
                  <div className="p-5" style={mystyle}>
                    <div className="inline-block relative w-64">
                      <label> Posts :</label>
                      <select
                        name="thePosts"
                        onChange={handleChange}
                        value={formData.thePosts}
                        // value={thePosts}
                        // onChange={(e) => setThePosts(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>0</option>
                        <option>5</option>
                        <option>25</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-5 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {/* <span>Result: {resFollowers} % / Day. </span> */}
                  </div>{" "}
                  <h3
                    style={res_style}
                    className="text-orange-500  font-serif font-bold ml-10 pb-4 underline decoration-wavy text-4xl "
                  >
                    Result
                  </h3>{" "}
                  <hr />
                  {/* start alert box  */}
                  {/* {plani &&
                      plani.map((e) => {
                        return ( */}
                  <div style={res_style}>
                    {/* {e._followers} <br />
                            {e._theViews} */}

                    <div
                      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                      role="alert"
                    >
                      <div className="flex">
                        <div className="py-1">
                          <svg
                            className="fill-current h-6 w-6 text-teal-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">Followers</p>
                          <p className="text-sm">
                            {plani && plani.followers}
                            <span className="block">
                              {plani && plani._followers} %
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end alert box  */}
                    {/* start alert box  */}
                    <div
                      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                      role="alert"
                    >
                      <div className="flex">
                        <div className="py-1">
                          <svg
                            className="fill-current h-6 w-6 text-teal-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">Likes</p>
                          <p className="text-sm">
                            {plani && plani.likes}
                            <span className="block">
                              {plani && plani._likes} %
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end alert box  */}
                    {/* start alert box  */}
                    <div
                      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                      role="alert"
                    >
                      <div className="flex">
                        <div className="py-1">
                          <svg
                            className="fill-current h-6 w-6 text-teal-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">Views</p>
                          <p className="text-sm">
                            {plani && plani.views}
                            <span className="block">
                              {plani && plani._views} %
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end alert box  */}
                    {/* start alert box  */}
                    <div
                      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                      role="alert"
                    >
                      <div className="flex">
                        <div className="py-1">
                          <svg
                            className="fill-current h-6 w-6 text-teal-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold">Posts</p>
                          <p className="text-sm">
                            {plani && plani.posts}
                            <span className="block">
                              {plani && plani._posts} %
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end alert box  */}
                    <br />

                    <a
                      href="Pplan"
                      className="bg-gradient-to-r from-green-400 to-blue-500 
                      hover:from-pink-500 hover:to-yellow-500 border-blue-400 shadow-2xl
                      hover:bg-blue-500 hover:shadow-lg  hover:shadow-indigo-500/40
                      backdrop-blur-xl hover:duration-1000
                      
                      text-2xl bg-black text-white border-2 rounded-lg p-4 mt-8 ml-8 animate-bounce"
                    >
                      {" "}
                      NEXT PAYMENT PLAN
                    </a>
                  </div>
                  {/* end the selectos  */}
                  {/* <button className="inline-flex items-center py-2 px-5 mx-5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Check
                    </button> */}
                  <span style={mystyle} className="mt-5">
                    <button
                      // onClick={() => handleSubmitdata()}
                      style={{
                        background: loader ? "#ccc" : " rgb(2, 2, 110)",
                      }}
                      // type="button"
                      className="inline-flex items-center py-2 px-5 mx-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Accept
                    </button>
                  </span>
                </form>
                {/* ending the form  */}
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

export default Settings;
