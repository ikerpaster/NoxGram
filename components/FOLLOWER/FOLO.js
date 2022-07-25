import React from "react";
import { useStateContext } from "../../contexts/NoxGram";

function FOLO({ id, folo }) {
  const {
    userid,
    collection,
    db,
    onSnapshot,
    query,
    deleteDoc,
    setDoc,
    doc,
    useEffect,
    useState,
    user,
  } = useStateContext();
  const imgUser =
    "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg";
  const [_likes, _setLikes] = useState([]);
  const [_liked, _setLiked] = useState(false);
  const [u, setUserInfo] = useState({});
  const _userid = folo?.userid;
  useEffect(
    () =>
      onSnapshot(collection(db, "_User", _userid, "followers"), (snapshot) =>
        _setLikes(snapshot.docs)
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

  //   get userInfo

  const docRefUser = doc(db, "_User", _userid);
  useEffect(
    () =>
      onSnapshot(docRefUser, (snapshot) => {
        setUserInfo(snapshot.data(), doc.id);
      }),
    []
  );
  return (
    <div>
      <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center">
        <img
          src={u?.userImg}
          width={50}
          height={50}
          objectFit="cover"
          className="rounded-full"
        />
        <div className="ml-4 leading-5 group">
          <h4 className="font-bold group-hover:underline">{u?.username}</h4>
          <h5 className="text-gray-500 text-[15px]">
            @ {`${(_userid || "").slice(0, 4)}...${(_userid || "").slice(38)}`}
          </h5>
        </div>

        {_liked ? (
          <>
            <button
              value=""
              id=""
              onClick={() => _likePost()}
              className="ml-auto   bg-pink-600 text-white rounded-full font-bold text-sm py-1.5 px-3.5"
            >
              unFollow
            </button>
          </>
        ) : (
          <>
            <button
              value=""
              id=""
              onClick={() => _likePost()}
              className="ml-auto   bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5"
            >
              Follow
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default FOLO;
