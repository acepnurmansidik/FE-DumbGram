/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";
import StatusPost from "./StatusPost";

export default function Feed() {
  const [modalShow, setModalShow] = React.useState(false);

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

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
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
