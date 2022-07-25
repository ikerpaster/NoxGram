import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
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
  orderBy,
} from "@firebase/firestore";
import { db } from "../../firebase";
import Post from "./Post";
// import { useSession } from "next-auth/react";
import { useStateContext } from "../../contexts/NoxGram";
function Feed() {
  const { userid } = useStateContext();
  // const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [userinfo, setUserinfo] = useState();
  // const [active, setActivated] = useState("");

  // const userid = session?.user?.uid;
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

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "_Posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-xl sm:ml-[73px] xl:ml-[370px] ">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      {/* {active.activated == "yes" && <Input />} */}
      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
