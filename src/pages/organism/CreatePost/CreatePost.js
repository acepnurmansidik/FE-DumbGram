import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../services/user";
import { setNotification } from "../../atom/notif";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarProfile from "../../molecules/SidebarProfile/SidebarProfile";

export default function CreatePost() {
  const router = useNavigate();
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState({
    caption: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("caption", form.caption);

    const response = await createPost(data);

    if (response.status === "success") {
      setNotification("success", "Yeay, has been posting");
      router("/feed");
    } else {
      setNotification("err", "Please upload image or video");
    }
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
                <div className="menu-history-status">
                  <h1>Create Post</h1>
                  <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="file"
                        name="image"
                        onChange={(e) => {
                          const img = e.target.files[0];
                          setImagePreview(URL.createObjectURL(img));
                          setImage(img);
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <textarea
                          className="form-control textarea"
                          name="caption"
                          id="bio"
                          placeholder="caption"
                          onChange={handleOnChange}
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
                  {imagePreview ? (
                    <img src={imagePreview} alt="" height={250} width={250} />
                  ) : null}
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
