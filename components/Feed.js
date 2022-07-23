import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./POSTS/Input";

import Post from "./POSTS/Post";
import { useStateContext } from "../contexts/NoxGram";

// import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
// import "react-simple-hook-modal/dist/styles.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [active, setActivated] = useState("");
  const {
    user,
    setNickname,
    handleSetInfo,
    nickname,
    setPayableAccount,
    payableAccount,
  } = useStateContext();
  // const { openModal, isModalOpen, closeModal } = useModal();
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-xl sm:ml-[73px] xl:ml-[370px] ">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className=" text-lg sm:text-xl font-bold">Home</h2>

        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      {/* {active.activated == "yes" && <Input />} */}
      <Input />
      <div className="pb-72">
        {/* <Post key="{post.id}" id={post.id} post={post.data()} /> */}
        <Post />
      </div>
    </div>
  );
}

export default Feed;
