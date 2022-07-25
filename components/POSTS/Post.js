import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  addDoc,
  where,
  getDocs,
  getDoc,
} from "@firebase/firestore";
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
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../atoms/modalAtom";
import { db } from "../../firebase";
import Link from "next/link";
import { async } from "@firebase/util";
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
import Modal from "./MODAL";
import { useStateContext } from "../../contexts/NoxGram";
function Post({ id, post, postPage }) {
  const { user, userid } = useStateContext();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [_likes, _setLikes] = useState([]);
  const [_liked, _setLiked] = useState(false);
  // const [flows, setFlows] = useState([]);
  // const [flowed, setFlowed] = useState(false);
  const [fld, setFld] = useState(false);
  const router = useRouter();

  const [active, setActivated] = useState("");
  const [ViewDisplay, seViewDisplay] = useState(0);
  const [openShareModal, setOpenShareModal] = useState("hidden");
  const [receivedTransID, setTransIDtoModal] = useState(0);
  const [u, setUserInfo] = useState({});
  const _userid = u.userid;
  // const userid = session?.user?.uid;

  const closeModal = () => {
    setOpenShareModal("hidden");
  };
  const docRefUser = doc(db, "_User", post?.userid);
  useEffect(
    () =>
      onSnapshot(docRefUser, (snapshot) => {
        setUserInfo(snapshot.data(), doc.id);
      }),
    []
  );
  // const colUserActi = collection(db, "users");
  // const userQ = query(colUserActi, where("id", "==", userid));

  // useEffect(
  //   () =>
  //     onSnapshot(userQ, (snapshot) => {
  //       let po = [];
  //       snapshot.docs.forEach((doc) => {
  //         setActivated({ ...doc.data(), id: doc.id });

  //         return;
  //       });
  //     }),
  //   []
  // );
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "_Posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  // starting likes functionalities

  useEffect(
    () =>
      onSnapshot(collection(db, "_Posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () => setLiked(likes.findIndex((like) => like.id === userid) !== -1),
    [likes]
  );

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "_Posts", id, "likes", userid));
    } else {
      await setDoc(doc(db, "_Posts", id, "likes", userid), {
        username: user.attributes.username,
        owner: _userid,
      });
    }
  };

  // ending likes functionalities

  // STARTING FOLOWERS FUNCTIONALITIES
  // ------------------------------------------
  useEffect(
    () =>
      onSnapshot(
        collection(db, "_User", post?.userid, "followers"),
        (snapshot) => _setLikes(snapshot.docs)
      ),
    [db, _userid]
  );

  useEffect(
    () => _setLiked(_likes.findIndex((like) => like.id === userid) !== -1),
    [_likes]
  );

  const _likePost = async () => {
    if (_liked) {
      await deleteDoc(doc(db, "_User", _userid, "followers", userid));
    } else {
      await setDoc(doc(db, "_User", _userid, "followers", userid), {
        username: user.attributes.username,
        owner: _userid,
      });
    }
  };
  // ENDING FOLLOWERS FUNCTIONALIES

  // try to get profile to next level

  // const name = "soso mado";
  // const age = 20;
  // const job = "IT";
  // function sendProps(l, t) {
  //   router.push({
  //     pathname: "/Profile",
  //     query: {
  //       l,
  //       t,
  //     },
  //   });
  // }

  const iconSize = 40;
  const iconRound = 5;
  const iconBorderRadius = 4;
  const iconColor = "white";
  const pmdx = "py-5 px-6";

  return (
    <>
      <div
        className="p-3 flex cursor-pointer border-b border-gray-700"
        onClick={() => router.push(`/${id}`)}
      >
        {!postPage && (
          <img
            src={u?.userImg}
            alt=""
            className="h-11 w-11 rounded-full mr-4"
          />
        )}
        <div className="flex flex-col space-y-2 w-full">
          <div className={`flex ${!postPage && "justify-between"}`}>
            {postPage && (
              <img
                src={u?.userImg}
                alt="Profile Pic"
                className="h-11 w-11 rounded-full mr-4"
              />
            )}
            <div className="text-[#6e767d]">
              <div className="inline-block group">
                {/* start modifiying here for paster */}
                {}
                <h4
                  onClick={(e) => {
                    e.stopPropagation();
                    // router.push("/Profile");
                    const tago = post.id;
                    // const tag = session.user.tag;
                    sendProps(tago, tag);
                  }}
                  className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                    !postPage && "inline-block"
                  }`}
                >
                  {u?.username}
                </h4>
                <span
                  className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}
                >
                  @{" "}
                  {`${(_userid || "").slice(0, 4)}...${(_userid || "").slice(
                    38
                  )}`}
                </span>
              </div>
              ·{" "}
              <span className="hover:underline text-sm sm:text-[15px]">
                <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
              </span>{" "}
              {!postPage && (
                <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                  {post?.text}
                </p>
              )}
            </div>
            <div
              className="icon group flex-shrink-0 ml-auto"
              onClick={(e) => {
                e.stopPropagation();
                {
                  _likePost();
                }
              }}
            >
              <div className="icon group-hover:bg-pink-600/10">
                {/* folo  */}
                {_liked ? (
                  <HeartIconFilled className="h-5 text-[rgb(123,160,39)] animate-pulse" />
                ) : (
                  <HeartIcon className="h-5 text-[#fefce8] group-hover:text-[#fefc11]" />
                )}
              </div>
              {/* <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" /> */}
            </div>
          </div>
          {postPage && (
            <p className="text-[#d9d9d9] mt-0.5 text-xl">{post?.text}</p>
          )}
          <img
            src={post?.image}
            alt=""
            className="rounded-2xl max-h-[700px] object-cover mr-2"
          />
          <div
            className={`text-[#6e767d] flex justify-between w-10/12 ${
              postPage && "mx-auto"
            }`}
          >
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                setPostId(id);
                setIsOpen(true);
              }}
            >
              <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
              </div>
              {comments.length > 0 && (
                <span className="group-hover:text-[#1d9bf0] text-sm">
                  {comments.length}
                </span>
              )}
            </div>

            {userid === post?.userid ? (
              <div
                className="flex items-center space-x-1 group"
                onClick={async (e) => {
                  e.stopPropagation();
                  deleteDoc(doc(db, "_Posts", id));

                  // const colREF = collection(db, "likePost");
                  // const q = query(colREF, where("postId", "==", id));
                  // let res = await getDocs(q);

                  // const results = res.docs.map((doc) => ({
                  //   ...doc.data(),
                  //   id: doc.id,
                  // }));

                  // results.forEach(async (result) => {
                  //   const docREF = doc(db, "likePost", result.id);
                  //   await deleteDoc(docREF);
                  // });

                  router.push("/");
                }}
              >
                <div className="icon group-hover:bg-red-600/10">
                  <TrashIcon className="h-5 group-hover:text-red-600" />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-1 group">
                <div className="icon group-hover:bg-green-500/10">
                  <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
                </div>
              </div>
            )}

            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                {
                  likePost();
                }
              }}
            >
              <div className="icon group-hover:bg-pink-600/10">
                {liked ? (
                  <HeartIconFilled className="h-5 text-pink-600" />
                ) : (
                  <HeartIcon className="h-5 group-hover:text-pink-600" />
                )}
              </div>
              {likes.length > 0 && (
                <span
                  className={`group-hover:text-pink-600 text-sm ${
                    liked && "text-pink-600"
                  }`}
                >
                  {likes.length}
                </span>
              )}
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
                {/* {id} */}
                {onSnapshot(
                  query(collection(db, "viewPost"), where("postId", "==", id)),
                  (snapshot) => {
                    console.log("fooo " + snapshot.size);
                    seViewDisplay(snapshot.size);
                  }
                )}
                {ViewDisplay}
              </span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Modal />}
      {/* sharing post modal here please */}
    </>
  );
}

export default Post;
