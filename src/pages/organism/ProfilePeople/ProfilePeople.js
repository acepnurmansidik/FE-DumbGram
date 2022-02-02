/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfilePeople from "./SidebarProfilePeople";
import StatusPost from "./StatusPost";

export default function ProfilePeople(props) {
  const params = useParams();
  return (
    <>
      <Container fluid>
        <div className="general-container">
          <Row>
            <SidebarProfilePeople paramID={params.id} />
            <Col sm={8} className="nav-menu-content">
              <Row>
                <Navigation />
              </Row>
              <Row>
                <h1>Profile People</h1>
                <StatusPost paramID={params.id} />
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
