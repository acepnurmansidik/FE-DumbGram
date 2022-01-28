import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../molecules/Navigation/Navigation";
import CardMessagePeoples from "./CardMessagePeoples";
import Chat from "./Chat";

export default function Message() {
  const [chatList, setChatList] = useState(null);

  const dataContact = [
    {
      id: 8,
      message: "hai lisa",
      idSender: 2,
      idReceiver: 4,
      createdAt: "2022-01-23T04:55:13.000Z",
      user: {
        id: 2,
        username: "acep",
        fullname: "acepnurmansidik",
        image: "Rectangle 10.png",
      },
    },
    {
      id: 9,
      message: "hai juga acep",
      idSender: 4,
      idReceiver: 2,
      createdAt: "2022-01-23T04:57:31.000Z",
      user: {
        id: 4,
        username: "lisa",
        fullname: "lisa",
        image: "Rectangle 10.png",
      },
    },
    {
      id: 10,
      message: "how are you?",
      idSender: 4,
      idReceiver: 2,
      createdAt: "2022-01-23T05:16:09.000Z",
      user: {
        id: 4,
        username: "lisa",
        fullname: "lisa",
        image: "Rectangle 10.png",
      },
    },
    {
      id: 12,
      message: "i'am fine lisa, how about you?",
      idSender: 2,
      idReceiver: 4,
      createdAt: "2022-01-26T23:02:58.000Z",
      user: {
        id: 2,
        username: "acep",
        fullname: "acepnurmansidik",
        image: "Rectangle 10.png",
      },
    },
    {
      id: 13,
      message: "i'am fine acep",
      idSender: 4,
      idReceiver: 2,
      createdAt: "2022-01-23T05:16:09.000Z",
      user: {
        id: 4,
        username: "lisa",
        fullname: "lisa",
        image: "Rectangle 10.png",
      },
    },
    {
      id: 13,
      message: "i want married with you acep",
      idSender: 4,
      idReceiver: 2,
      createdAt: "2022-01-23T05:16:09.000Z",
      user: {
        id: 4,
        username: "lisa",
        fullname: "lisa",
        image: "Rectangle 10.png",
      },
    },
  ];
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
                    dataContact={dataContact}
                    setContact={setChatList}
                    contact={chatList}
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
                <Chat contact={chatList} dataContact={dataContact} />
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
