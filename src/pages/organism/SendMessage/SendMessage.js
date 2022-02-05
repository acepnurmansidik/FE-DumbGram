/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../molecules/Navigation/Navigation";
import {
  getChatListSender,
  getChatListReceiver,
  getMessageUserDetail,
} from "../../../services/message";
import CardMessagePeoples from "../Message/CardMessagePeoples";
import Chat from "./Chat";

export default function SendMessage() {
  const { id } = useParams();
  const [chatList, setChatList] = useState(null);
  const [chats, setChats] = useState([]);
  const [targetChat, setTargetChat] = useState("");

  useEffect(async () => {
    const response = await getMessageUserDetail(id);
    setChatList(response.data.Message);
  }, []);

  useEffect(async () => {
    let data = [];
    const responseSender = await getChatListSender();
    const dataSend = responseSender.data.chatList;
    dataSend.map((item) => {
      data.push(item);
    });

    const responseReceiver = await getChatListReceiver();
    responseReceiver.data.chatList.map((item) => {
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
  }, []);

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
                  <CardMessagePeoples
                    chats={chats}
                    setChatList={setChatList}
                    chatList={chatList}
                    setTargetChat={setTargetChat}
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
                <Chat chatList={chatList} targetChat={targetChat} />
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
