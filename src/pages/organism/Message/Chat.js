/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import moment from "moment";
import { setSendMessage } from "../../../services/message";
import { Link } from "react-router-dom";

export default function Chat({ chatList, targetChat }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const result = jwtDecode(atob(Cookies.get("token")));
    setUser(result);
  }, []);

  return (
    <>
      {chatList ? (
        <MessageResponse
          chatList={chatList}
          user={user}
          targetChat={targetChat}
        />
      ) : (
        <NoMessageResponse />
      )}
    </>
  );
}

function NoMessageResponse() {
  return (
    <>
      <div className="history-message-rell">
        <div className="no-message-status">
          <h1>No Message</h1>
        </div>
      </div>
    </>
  );
}

function MessageResponse({ chatList, user, targetChat }) {
  const [form, setForm] = useState({
    message: "",
  });
  // Handle================================
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await setSendMessage(form, targetChat);
    console.log(response.data.Message);
  };
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="history-message-rell">
        {chatList.map((msgItem) => {
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
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              id="input-message"
              placeholder="Send message..."
              name="message"
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
