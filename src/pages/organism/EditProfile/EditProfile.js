import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarEditProfile from "./SidebarEditProfile";

export default function EditProfile() {
  return (
    <>
      <Container fluid>
        <div className="general-container">
          <Row>
            <SidebarEditProfile />
            <Col sm={8} className="nav-menu-content">
              <Row>
                <Navigation />
              </Row>
              <Row>
                <div className="menu-history-status">
                  <h1>Edit Profile</h1>
                  <Form>
                    <Form.Group
                      className="mb-3 edit-upload"
                      controlId="formBasicEmail"
                    >
                      <Form.Control type="file" name="image" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
                      />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <textarea
                          className="form-control textarea"
                          name="bio"
                          id="bio"
                          placeholder="Bio"
                        ></textarea>
                      </Form.Group>
                    </Form.Group>

                    <div className="createpost-btn-container">
                      <Button className="gradient-btn" type="submit">
                        Submit
                      </Button>
                    </div>
                    <Form.Group
                      className="mb-2 mt-3"
                      controlId="formBasicPassword"
                    ></Form.Group>
                  </Form>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
