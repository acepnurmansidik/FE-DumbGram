/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Chat({ chatList, sendMessage }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const result = jwtDecode(atob(Cookies.get("token")));
    setUser(result);
  }, []);
  // Handle================================
  return (
    <div>
      <div className="history-message-rell">
        {chatList?.map((msgItem) => {
          if (msgItem.receiver.id !== user.id) {
            return (
              <div key={msgItem.id} className="card-other">
                <p className="time-message-rell">
                  {moment(`${msgItem.createdAt}`).format("LT")}
                </p>
                <p>{msgItem.message}</p>
              </div>
            );
          } else if (msgItem.receiver.id === user.id) {
            return (
              <div key={msgItem.id} className="card-me">
                <Link to={`/profile-people/${msgItem.sender.id}`}>
                  <ImageProfile image={msgItem.sender.image} />
                </Link>
                <p>{msgItem.message}</p>
                <p className="time-message-rell">
                  {moment(`${msgItem.createdAt}`).format("LT")}
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="sender-message-input">
        <input
          type="text"
          id="input-message"
          placeholder="Send message..."
          name="message"
          onKeyPress={sendMessage}
        />
      </div>
    </div>
  );
}
