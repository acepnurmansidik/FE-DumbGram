import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function ModalLoginShow(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-4">
          <Modal.Title id="contained-modal-title-vcenter" className="mb-3">
            Login
          </Modal.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button className="gradient-btn btn-submit" type="submit">
              Submit
            </Button>
            <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
              <Form.Text className="text-muted">
                Don't have an account ? Klik Here
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
