/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../molecules/Navigation/Navigation";
import ChatListUser from "./ChatListUser";
import Chat from "./Chat";
import { io } from "socket.io-client";
import Cookies from "js-cookie";

// initial variable outside socket
// eslint-disable-next-line no-unused-vars
let socket;
export default function SendMessage() {
  const { id } = useParams();
  const [chatList, setChatList] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: atob(Cookies.get("token")),
      },
      query: {
        params: id,
      },
    });

    socket.on("new message", () => {
      socket.emit("load messages", id);
    });

    // listen error sent from server
    socket.on("connect_error", (err) => {
      console.error(err.message); // not authorized
    });

    // GET user chat list
    loadUserChats();
    // GET personal chat user
    loadMessage();

    return () => {
      socket.disconnect();
    };
  }, []);

  // Handle ===================================
  const loadUserChats = () => {
    socket.emit("load user sender");
    socket.on("user sender", (dataItem) => {
      let data = [];
      dataItem[0].dataSender.map((item) => {
        data.push(item);
      });

      dataItem[0].dataReceiver.map((item) => {
        data.push({
          id: item.id,
          message: item.message,
          createdAt: item.createdAt,
          receiver: item.sender,
          sender: item.receiver,
        });
      });

      const arr = [];
      // Filter data duplicate/delete data duplicate
      data.reduce((acc, curr) => {
        if (acc.indexOf(curr.receiver.id) === -1) {
          acc.push(curr.receiver.id);
          arr.push(curr);
        }
        return acc;
      }, []);

      setChats(arr);
    });
  };

  const loadMessage = () => {
    socket.emit("load messages", id);
    socket.on("messages", async (data) => {
      setChatList(data);
    });
  };

  // POST send message
  const onSendMessage = (e) => {
    if (e.key === "Enter") {
      const data = {
        idReceiver: id,
        message: e.target.value,
      };
      socket.emit("send message", data);
      e.target.value = "";
    }
  };

  return (
    <>
      <Container fluid>
        <div className="general-container">
          <Row>
            <Col sm={4} className="sidebar-profile-container">
              <div className="sidebar-profile-container">
                <Link to="/explore">
                  <div className="sidebar-logo position-relative mb-5">
                    <div className="position-absolute top-0 start-0 mt-3">
                      <img
                        className="img1-logo-dumbgram"
                        src="../assets/icons/DumbGram.svg"
                        alt=""
                      />
                    </div>
                    <div className="position-absolute top-0 start-0">
                      <img src="../assets/icons/shadow.svg" alt="" />
                    </div>
                  </div>
                </Link>
                <div className="sidebar-message-menu">
                  <ChatListUser
                    chats={chats}
                    setChatList={setChatList}
                    chatList={chatList}
                  />
                </div>
              </div>
            </Col>
            <Col sm={8} className="nav-menu-content">
              <Row>
                <Navigation />
              </Row>
              <Row>
                <h1>Message</h1>
              </Row>
              <Row>
                <Chat chatList={chatList} sendMessage={onSendMessage} />
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
