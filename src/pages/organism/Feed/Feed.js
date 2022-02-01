/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";
import StatusPost from "./StatusPost";

export default function Feed() {
  return (
    <>
      <Container fluid>
        <div className="general-container">
          <Row>
            <SidebarProfile />
            <Col sm={8} className="nav-menu-content">
              <Row>
                <Navigation />
              </Row>
              <Row>
                <h1>Feed</h1>
                <StatusPost />
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
