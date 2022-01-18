import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-css";
import ModalRegisterShow from "./ModalRegisterShow";
import ModalLoginShow from "./ModalLoginShow";

export default function LandingPage() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegsiter, setModalRegister] = useState(false);

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
                  />

                  {/* BTN & MODAL REGISTER */}

                  <Button onClick={() => setModalRegister(true)}>
                    Register
                  </Button>

                  <ModalRegisterShow
                    show={modalRegsiter}
                    onHide={() => setModalRegister(false)}
                  />
                </div>
              </Row>
            </Col>
            <Col sm={7}>
              <h2>2 of 2</h2>
              <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {/* array of JSX items */}
              </Masonry>
              {/* <div className="col lp-images">
                <div>
                  <img src="../assets/img/Rectangle 6.png" alt="" />
                </div>
                <div>
                  <img src="../assets/img/Rectangle 3.png" alt="" />
                </div>
                <div>
                  <img src="../assets/img/Rectangle 4.png" alt="" />
                </div>
                <div>
                  <img src="../assets/img/Rectangle 8.png" alt="" />
                </div>
                <div>
                  <img src="../assets/img/Rectangle 5.png" alt="" />
                </div>
                <div>
                  <img src="../assets/img/Rectangle 9.png" alt="" />
                </div>
                <div>
                  <img src="../assets/img/Rectangle 10.png" alt="" />
                </div>
                <div>
                  <img src="../assets/img/Rectangle 12.png" alt="" />
                </div>
              </div> */}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
