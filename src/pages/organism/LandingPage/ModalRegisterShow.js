import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { setRegister } from "../../../services/auth";
import { setNotification } from "../../atom/notif";

export default function ModalRegisterShow({
  setModalRegister,
  setModalLogin,
  ...props
}) {
  const handleOpenModal = () => {
    setModalLogin(true);
    setModalRegister(false);
  };

  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // send form data to API
    const response = await setRegister(form);
    if (response.status === "success") {
      // show notification
      setNotification(response.status, "Account registered successfully");
      // close modal register
      setModalRegister(false);
    } else {
      // show notification
      setNotification(response.status, response.message.statusText);
    }
  };

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
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
            Register
          </Modal.Title>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Fullname"
                name="fullname"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Password (min 6 character))"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button className="gradient-btn btn-submit" type="submit">
              Submit
            </Button>
            <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
              <Form.Text
                className="text-muted text-pointer"
                onClick={handleOpenModal}
              >
                Already have an account ? Klik Here
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
