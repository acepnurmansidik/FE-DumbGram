import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../molecules/Navigation/Navigation";
import CardMessagePeoples from "./CardMessagePeoples";
import Chat from "./Chat";

export default function Message() {
  const [contact, setContact] = useState(null);

  const dataContact = [
    {
      id: 1,
      titleName: "Teressa",
      chat: "Yes, Is there anything I can help",
      thumbnail: "Rectangle 10.png",
    },
    {
      id: 1,
      titleName: "Teressa",
      chat: "homework?",
      thumbnail: "Rectangle 10.png",
    },
    {
      id: 2,
      titleName: "Yuki",
      chat: "Hello World",
      thumbnail: "Rectangle 10.png",
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
                    setContact={setContact}
                    contact={contact}
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
                <Chat contact={contact} dataContact={dataContact} />
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
