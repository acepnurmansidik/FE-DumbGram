/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getMessageUserDetail } from "../../../services/message";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function CardMessagePeoples({ chats, setChatList, chatList }) {
  const clickContact = async (id) => {
    const response = await getMessageUserDetail(id);
    setChatList(response.data.Message);
  };

  return (
    <>
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => clickContact(chat.receiver.id)}
          className={`card-message-peoples ${
            chatList?.idReceiver === chat?.idReceiver && "contact-active"
          }`}
        >
          <div className="dd-card-img">
            {chat.receiver.image ? (
              <ImageProfile image={chat.receiver.image} />
            ) : (
              <NoImageProfile className="text-pointer" />
            )}
          </div>
          <div className="card-info-people">
            <div className="mt-3">{chat.receiver.fullname}</div>
            <p>{chat.message}</p>
          </div>
        </div>
      ))}
    </>
  );
}
