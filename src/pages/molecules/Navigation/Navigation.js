/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getNotifMessage,
  updateNotifMessage,
} from "../../../services/notification";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";

export default function Navigation() {
  const router = useNavigate();
  const [notifs, setNotifs] = useState([]);
  const [form, setForm] = useState({
    search: "",
  });

  useEffect(async () => {
    const response = await getNotifMessage();
    setNotifs(response.data.notif);
  }, []);

  // Handle ================================================
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // delete notif & redirect to message
  const handleValidateNotif = async (id) => {
    await updateNotifMessage(id);
    router(`/message/${id}`);
  };

  const handelOnSubmit = async () => {};
  return (
    <>
      <div className="menu-btn-nav">
        {/* FOR SEARCH */}
        <div className="menu-nav-search">
          <Form onSubmit={handelOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="search"
                name="search"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Form>
        </div>
        {/* NOTIFICATION */}
        <div className="menu-nav-btn">
          <div className="btn-group">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {notifs.length ? (
                  <img
                    src="/assets/icons/Notif.svg"
                    width={33}
                    height={33}
                    alt=""
                  />
                ) : (
                  <img
                    src="/assets/icons/notif.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
              </Dropdown.Toggle>
              {notifs.length ? (
                <Dropdown.Menu>
                  {notifs.map((notifItem) => (
                    <Dropdown.Item
                      key={notifItem.id}
                      className="dd-card"
                      onClick={() => handleValidateNotif(notifItem.sender.id)}
                    >
                      <div className="dd-card-img">
                        <ImageProfile image={notifItem.sender.image} />
                      </div>
                      <div className="card-info-people">
                        <label htmlFor="" className="mt-3">
                          {notifItem.sender.fullname}
                        </label>
                        <p>{notifItem.title}</p>
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              ) : (
                <Dropdown.Menu>
                  <Dropdown.Item className="dd-card">
                    <div className="dd-card-404">
                      <img src="/assets/icons/404.svg" alt="" />
                    </div>
                    <div className="card-info-people">
                      <label htmlFor="" className="mt-3">
                        404
                      </label>
                      <p>Notif Not Found</p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              )}
            </Dropdown>
          </div>
          {/* LINK TO MESSAGE */}
          <div className="btn-group">
            <Link to="/message" className="btn-notif">
              <img src="/assets/icons/Vector.svg" alt="" />
            </Link>
          </div>
          {/* CREATE POST */}
          <div className="btn-group">
            <Link to="/create-post" className="btn gradient-btn">
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
