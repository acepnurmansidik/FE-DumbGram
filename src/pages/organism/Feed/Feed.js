import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";

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
                <h1>asd</h1>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
