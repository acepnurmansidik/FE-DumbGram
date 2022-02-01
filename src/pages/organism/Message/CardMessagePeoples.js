/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { getChatList } from "../../../services/user";

export default function CardMessagePeoples({
  dataContact,
  setChatList,
  chatList,
}) {
  // const [chats, setChats] = useState({});
  const clickContact = (id) => {
    const data = dataContact.find((dateItem) => dateItem.idReceiver === id);
    setChatList(data);
  };

  // useEffect(async () => {
  //   const response = await getChatList();
  //   setChats(response.data.chatList);
  // }, []);
  return (
    <>
      {dataContact.map((dateItem) => (
        <div
          key={dateItem.idReceiver}
          onClick={() => clickContact(dateItem.idReceiver)}
          className={`card-message-peoples ${
            chatList?.idReceiver === dateItem?.idReceiver && "contact-active"
          }`}
        >
          <div className="dd-card-img">
            <img src={`/assets/img/${dateItem.user.image}`} alt="" />
          </div>
          <div className="card-info-people">
            <div className="mt-3">{dateItem.user.fullname}</div>
            <p>{dateItem.message}</p>
          </div>
        </div>
      ))}
    </>
  );
}
