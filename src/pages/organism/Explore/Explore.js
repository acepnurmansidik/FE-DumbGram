/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getAllPosts, getComments } from "../../../services/user";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";
import ModalDetailStatus from "../../molecules/ModalDetailStatus/ModalDetailStatus";

export default function Explore() {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataList, setDataList] = useState([]);
  const [comments, setComments] = useState([]);
  const [detailStatus, setDetailStatus] = useState({});

  useEffect(async () => {
    const response = await getAllPosts();
    setDataList(response.data.feed);
  }, []);

  // get comments status selected
  const handleGetComments = async (id) => {
    const response = await getComments(id);
    setComments(response.data.comments);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  // =========================================

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
                <h1>Explore</h1>
                <div className="statusRell-style">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {dataList.map((item) => (
                      <div key={item.id} className="statusRell-img-item">
                        <Card style={{ width: "100%" }}>
                          <Card.Img
                            className="statusRell-btn-modal"
                            onClick={() => {
                              setModalShow(true);
                              handleGetComments(item.id);
                              setDetailStatus(item);
                            }}
                            variant="top"
                            src={`${item.filename}`}
                          />
                          <ModalDetailStatus
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            detailStatus={detailStatus}
                            commentList={comments}
                          />
                        </Card>
                      </div>
                    ))}
                  </Masonry>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
