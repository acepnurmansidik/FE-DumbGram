/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";
import StatusPost from "../../molecules/StatusPost/StatusPost";

export default function Feed() {
  let dataStatus = [
    {
      imageUrl: "Rectangle 6.png",
    },
    {
      imageUrl: "Rectangle 3.png",
    },
    {
      imageUrl: "Rectangle 4.png",
    },
    {
      imageUrl: "Rectangle 5.png",
    },
    {
      imageUrl: "Rectangle 9.png",
    },
    {
      imageUrl: "Rectangle 8.png",
    },
    {
      imageUrl: "Rectangle 10.png",
    },
    {
      imageUrl: "Rectangle 12.png",
    },
    {
      imageUrl: "Rectangle 6.png",
    },
    {
      imageUrl: "Rectangle 3.png",
    },
    {
      imageUrl: "Rectangle 4.png",
    },
    {
      imageUrl: "Rectangle 5.png",
    },
    {
      imageUrl: "Rectangle 9.png",
    },
    {
      imageUrl: "Rectangle 8.png",
    },
    {
      imageUrl: "Rectangle 10.png",
    },
    {
      imageUrl: "Rectangle 12.png",
    },
  ];

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
                <StatusPost dataStatus={dataStatus} />
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
