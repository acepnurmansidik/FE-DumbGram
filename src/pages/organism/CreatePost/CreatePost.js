import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";

export default function CreatePost() {
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
                <div className="menu-history-status">
                  <h1>Create Post</h1>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="file" name="image" />
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
