import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../../services/auth";
import { setNotification } from "../../atom/notif";
import Cookies from "js-cookie";

export default function ModalLoginShow(props) {
  const { setModalRegister, setModalLogin } = props;

  const router = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOpenModal = () => {
    setModalLogin(false);
    setModalRegister(true);
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return setNotification("err", "Form cannot be empty!");
    }
    const response = await setLogin(form);
    if (response.status === "success") {
      // show notification
      setNotification(response.status, "Login successful");
      // hash using btoa
      const tokenBase64 = btoa(response.data.user.token);
      // set Cookie
      Cookies.set("token", tokenBase64, { expires: 1 });
      setModalLogin(false);
      router("/feed");
    } else {
      // show notification
      setNotification(response.status, response.message.data.message);
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
            Login
          </Modal.Title>
          <Form onSubmit={handelOnSubmit}>
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
                placeholder="Password"
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
                Don't have an account ? Klik Here
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
