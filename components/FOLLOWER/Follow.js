// import { onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useStateContext } from "../../contexts/NoxGram";
import FOLO from "./FOLO";

function Follow() {
  const { db, onSnapshot, collection, query } = useStateContext();

  // ENDING FOLLOWERS FUNCTIONALIES
  const [userList, setUserList] = useState([]);
  useEffect(
    () =>
      onSnapshot(query(collection(db, "_User")), (snapshot) => {
        setUserList(snapshot.docs);
      }),
    [db]
  );
  return (
    <>
      {userList.map((folo) => (
        <FOLO key={folo.id} id={folo.id} folo={folo.data()} />
      ))}
    </>
  );
}

export default Follow;
