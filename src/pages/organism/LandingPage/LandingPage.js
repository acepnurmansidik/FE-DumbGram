import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-css";
import ModalRegisterShow from "./ModalRegisterShow";
import ModalLoginShow from "./ModalLoginShow";

export default function LandingPage() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegsiter, setModalRegister] = useState(false);

  let photosList = [
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
      imageUrl: "Rectangle 1000.png",
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
        <div className="lp-container">
          <Row>
            <Col sm={5} className="lp-container-content">
              <Row>
                <div className="logo-dumbgram position-relative">
                  <div className="position-absolute top-0 start-0 mt-3">
                    <img
                      className="img1-logo-dumbgram"
                      src="../assets/img/DumbGram.svg"
                      alt=""
                    />
                  </div>
                  <div className="position-absolute top-0 start-0">
                    <img src="../assets/img/shadow.svg" alt="" />
                  </div>
                </div>
              </Row>
              <Row>
                <div className="lp-desc-dumbgram">
                  <h1>
                    Share your best <br />
                    photos or videos
                  </h1>
                  <p>
                    Join now, share your creations with another <br />
                    people and enjoy other creations.
                  </p>
                </div>
                <div className="lp-btn-modal">
                  {/* BTN & MODAL LOGIN */}
                  <Button
                    className="gradient-btn"
                    onClick={() => setModalLogin(true)}
                  >
                    Login
                  </Button>
                  <ModalLoginShow
                    show={modalLogin}
                    onHide={() => setModalLogin(false)}
                    setModalRegister={setModalRegister}
                    setModalLogin={setModalLogin}
                  />

                  {/* BTN & MODAL REGISTER */}

                  <Button onClick={() => setModalRegister(true)}>
                    Register
                  </Button>

                  <ModalRegisterShow
                    show={modalRegsiter}
                    onHide={() => setModalRegister(false)}
                    setModalRegister={setModalRegister}
                    setModalLogin={setModalLogin}
                  />
                </div>
              </Row>
            </Col>
            <Col sm={7}>
              <div className="lp-mansory-images">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {photosList.map((item) => (
                    <div className="lp-img-item">
                      <img src={`../assets/img/${item.imageUrl}`} alt="" />
                    </div>
                  ))}
                </Masonry>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
