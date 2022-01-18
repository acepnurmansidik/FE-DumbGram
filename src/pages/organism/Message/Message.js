import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../molecules/Navigation/Navigation";
import CardMessagePeoples from "./CardMessagePeoples";

export default function Message() {
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
                    titleName={`Venelope`}
                    message={`i love you so much`}
                    thumbnail={`Rectangle 10.png`}
                  />
                  <CardMessagePeoples
                    titleName={`Lydia`}
                    message={`hey babe, can you bought underwear for me?`}
                    thumbnail={`Rectangle 8.png`}
                  />
                  <CardMessagePeoples
                    titleName={`Claudia`}
                    message={`please, come my home now`}
                    thumbnail={`Rectangle 3.png`}
                  />
                  <CardMessagePeoples
                    titleName={`Miya`}
                    message={`please hug me`}
                    thumbnail={`Rectangle 12.png`}
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
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
