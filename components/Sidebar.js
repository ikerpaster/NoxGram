import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  CashIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
  EyeIcon,
  XCircleIcon,
} from "@heroicons/react/outline";

import SidebarLink from "./SidebarLink";

import { useEffect, useState } from "react";

import { useMoralis } from "react-moralis";
import { useStateContext } from "../contexts/NoxGram";
function Sidebar() {
  // const { logout, Moralis, user } = useMoralis();
  const { user, logout, imgUser } = useStateContext();
  const [openMenuModal, setOpenMenuModal] = useState("hidden");
  const closeModal = () => {
    setOpenMenuModal("hidden");
  };

  const opeopeMenu = () => {
    setOpenMenuModal("show");
  };

  const TheMenu = ({ txt, linkto }) => {
    return (
      <a
        href={linkto}
        className="bg-gradient-to-r from-green-400 to-blue-500 
hover:from-pink-500 hover:to-yellow-500
flex justify-center items-center   border-8 
border-blue-400 shadow-2xl 
mb-3    text-white w-28 h-28 relative mt-10   rounded-full 
hover:bg-blue-500 hover:shadow-lg  hover:shadow-indigo-500/40
backdrop-blur-xl hover:duration-1000 text-center 
text-sm font-thin p-4 "
      >
        <span className="block">{txt}</span>
      </a>
    );
  };

  return (
    <>
      <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
        {/* <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full"> */}
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
          <Image src="https://rb.gy/ogau5a" width={30} height={30} />
        </div>
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <SidebarLink text="Home" Icon={HomeIcon} />

          <SidebarLink text="Settings" Icon={BellIcon} />

          <SidebarLink text="Tasks" Icon={ClipboardListIcon} />

          {/* <SidebarLink text="Profile" Icon={UserIcon} /> */}
        </div>
        <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
          NOXGRAM
        </button>
        <div
          className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
          // onClick="Login"
          onClick={logout}
        >
          <img
            src={!user.attributes.userImg ? imgUser : user.attributes.userImg}
            alt=""
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />{" "}
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">
              {" "}
              {user.attributes.username.slice(0, 6)}
            </h4>
            <p className="text-[#6e767d]">
              @
              {`${user.attributes.ethAddress.slice(
                0,
                4
              )}...${user.attributes.ethAddress.slice(38)}`}
            </p>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
        </div>
      </div>

      {/* Menu Modal   */}
      <div
        id="popup-modal"
        tabindex="-1"
        className={`${openMenuModal} overflow-y-auto
         overflow-x-hidden fixed
          top-10 right-0 left-0 z-50 
         md:inset-0 h-modal md:h-full 
         justify-center items-center"
            aria-hidden="true`}
      >
        <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
          <div
            className="relative text-white rounded-lg shadow border-2 overflow-hidden
        
          "
          >
            <img
              className="absolute w-full h-full object-cover mix-blend-overlay"
              src="https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_960_720.jpg"
            />
          </div>
        </div>
      </div>

      <div
        className=" flex  cursor-pointer md:hidden lg:hidden
              w-16 h-16 fixed bottom-1 left-1 rounded-full
            bg-blue-400 shadow-lg shadow-cyan-500/50 
            animate-spin  mr-3
            "
        onClick={opeopeMenu}
      >
        <DotsCircleHorizontalIcon className="w-fit h-fit " />
      </div>
    </>
  );
}

export default Sidebar;
