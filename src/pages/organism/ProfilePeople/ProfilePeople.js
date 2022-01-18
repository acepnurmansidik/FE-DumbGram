import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfilePeople from "./SidebarProfilePeople";

export default function ProfilePeople() {
  return (
    <>
      <Container fluid>
        <div className="general-container">
          <Row>
            <SidebarProfilePeople />
            <Col sm={8} className="nav-menu-content">
              <Row>
                <Navigation />
              </Row>
              <Row>
                <h1>Profile People</h1>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
