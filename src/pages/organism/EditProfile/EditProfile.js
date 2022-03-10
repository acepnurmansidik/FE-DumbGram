/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getUserAPI, setUpdateProfile } from "../../../services/user";
import Navigation from "../../molecules/Navigation/Navigation";
import SidebarEditProfile from "./SidebarEditProfile";
import { setNotification } from "../../atom/notif";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const router = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [form, setForm] = useState({
    bio: "",
    username: "",
    email: "",
  });

  // GET data user
  useEffect(async () => {
    let userToken = atob(Cookies.get("token"));
    userToken = jwt_decode(userToken);
    const response = await getUserAPI(userToken.id);
    setUserInfo(response.data.user);
  }, []);

  // Handling =====================================================
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
    form.bio ? data.append("bio", form.bio) : data.append("bio", userInfo.bio);
    form.username
      ? data.append("username", form.username)
      : data.append("username", userInfo.username);
    form.email
      ? data.append("email", form.email)
      : data.append("email", userInfo.email);

    const dataUserCookies = atob(Cookies.get("token"));
    const dataUser = jwt_decode(dataUserCookies);

    const response = await setUpdateProfile(data, dataUser.id);
    if (response.status === "success") {
      setNotification("success", "Yeay, profile has been update");
      router("/feed");
    } else {
      setNotification("err", "See you next time!");
    }
  };
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
                  <Form onSubmit={handleOnSubmit}>
                    <Form.Group
                      className="mb-3 edit-upload"
                      controlId="formBasicEmail"
                    >
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

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
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
                    <img src={imagePreview} alt="" height={150} width={150} />
                  ) : (
                    <img
                      src={`https://dumbgram-app.herokuapp.com/uploads/${userInfo.image}`}
                      alt=""
                      height={150}
                      width={150}
                    />
                  )}
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
