import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
  EyeIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconFilled,
  ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../atoms/modalAtom";

import Link from "next/link";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

function Post() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [flows, setFlows] = useState([]);
  const [flowed, setFlowed] = useState(false);
  const [fld, setFld] = useState(false);
  const router = useRouter();

  const [active, setActivated] = useState("");
  const [ViewDisplay, seViewDisplay] = useState(0);
  const [openShareModal, setOpenShareModal] = useState("hidden");
  const [receivedTransID, setTransIDtoModal] = useState(0);

  const closeModal = () => {
    setOpenShareModal("hidden");
  };

  const iconSize = 40;
  const iconRound = 5;
  const iconBorderRadius = 4;
  const iconColor = "white";
  const pmdx = "py-5 px-6";
  const id = 1;
  const imgUser =
    "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";
  return (
    <>
      <div
        className="p-3 flex cursor-pointer border-b border-gray-700"
        onClick={() => router.push(`/${id}`)}
      >
        {/* <img src={imgUser} alt="" className="h-11 w-11 rounded-full mr-4" /> */}

        <div className="flex flex-col space-y-2 w-full">
          <div className="flex justify-between">
            <img
              src={imgUser}
              alt="Profile Pic"
              className="h-11 w-11 rounded-full mr-4"
            />

            <div className="text-[#6e767d]">
              <div className="inline-block group">
                {/* start modifiying here for paster */}
                {}
                <h4
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline  inline-block"
                >
                  ikerpaster
                </h4>
                <span className={`text-sm sm:text-[15px] `}>
                  @ikerpasterTag
                </span>
              </div>
              ·{" "}
              <span className="hover:underline text-sm sm:text-[15px]">
                <Moment fromNow>2days ago</Moment>
              </span>{" "}
              kaka
              <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                Because Tailwind is so low-level, it never encourages you to
                design the same site twice. Even with the same color palette and
                sizing scale, it's easy to build the same component with a
                completely different look in the next project.
              </p>
            </div>
            <div
              className="icon group flex-shrink-0 ml-auto"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="icon group-hover:bg-pink-600/10">
                <HeartIconFilled className="h-20 text-[#c2410c]" />
              </div>
              {/* <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" /> */}
            </div>
          </div>

          {/* <p className="text-[#d9d9d9] mt-0.5 text-xl">
              hey hey this th my first post testos
            </p> */}

          <img
            src={imgUser}
            alt=""
            className="rounded-2xl max-h-[700px] object-cover mr-2"
          />
          <div
            className={`text-[#6e767d] flex justify-between w-10/12 
              `}
          >
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
              </div>

              <span className="group-hover:text-[#1d9bf0] text-sm">2</span>
            </div>

            <div
              className="flex items-center space-x-1 group"
              onClick={async (e) => {
                e.stopPropagation();
              }}
            >
              <div className="icon group-hover:bg-red-600/10">
                <TrashIcon className="h-5 group-hover:text-red-600" />
              </div>
            </div>

            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="icon group-hover:bg-pink-600/10">
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              </div>
              <span className="group-hover:text-pink-600 text-sm ">3</span>
            </div>

            <div
              className="icon group"
              onClick={(e) => {
                e.stopPropagation();
                setTransIDtoModal(id);
                setOpenShareModal("");
              }}
            >
              <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>

            <div className="icon group">
              <EyeIcon className="h-5 group-hover:text-[#1d9bf0]" />
              <span className="group-hover:text-pink-600 text-sm  text-pink-600 ml-2">
                30
                {/* {ViewDisplay} */}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* // Modal */}
      <div
        id="popup-modal"
        tabindex="-1"
        className={`${openShareModal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
              aria-hidden="true`}
      >
        <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
          <div className="relative bg-blue-500/100 text-white rounded-lg shadow ">
            <div className="text-4xl absolute top-3 right-2.5 text-red-700 bg-transparent hover:bg-red-200 hover:text-white rounded-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
              <XCircleIcon onClick={closeModal} className=" w-5 h-5 " />
            </div>
            <h3 class="pt-10 text-center text-xl font-semibold text-gray-900 dark:text-white">
              Share Post
            </h3>
            <div className="flex   bg-gray-700/50  w-full text-ellipsis overflow-hidden min-w-fit">
              <div className="block">
                {" "}
                <div className={`${pmdx} text-center`}>
                  <FacebookShareButton url={`https://moralis.io/`}>
                    <FacebookIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </FacebookShareButton>
                </div>
                <div className={`${pmdx} text-center`}>
                  <TwitterShareButton url={`https://moralis.io/`}>
                    <TwitterIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </TwitterShareButton>
                </div>
                <div className={`${pmdx} text-center`}>
                  <WhatsappShareButton url={`https://moralis.io/`}>
                    <WhatsappIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </WhatsappShareButton>
                </div>
                <div className={`${pmdx} text-center`}>
                  <TelegramShareButton url={`https://moralis.io/`}>
                    <TelegramIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </TelegramShareButton>
                </div>
              </div>
              <div className="block">
                {/* okokok   */}
                <div className={`${pmdx} text-center`}>
                  <PinterestShareButton url={`https://moralis.io/`}>
                    <PinterestIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </PinterestShareButton>
                </div>

                <div className={`${pmdx} text-center`}>
                  <LinkedinShareButton url={`https://moralis.io/`}>
                    <LinkedinIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </LinkedinShareButton>
                </div>

                <div className={`${pmdx} text-center`}>
                  <ViberShareButton url={`https://moralis.io/`}>
                    <ViberIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </ViberShareButton>
                </div>

                <div className={`${pmdx} text-center`}>
                  <EmailShareButton url={`https://moralis.io/`}>
                    <EmailIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </EmailShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Post;
