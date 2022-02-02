import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [form, setForm] = useState({
    search: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelOnSubmit = async () => {};
  return (
    <>
      <div className="menu-btn-nav">
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
        <div className="menu-nav-btn">
          <div className="btn-group">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img src="/assets/icons/notif.svg" alt="" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile-people" className="dd-card">
                  <div className="dd-card-img">
                    <img src="/assets/img/Rectangle 10.png" alt="" />
                  </div>
                  <div className="card-info-people">
                    <label htmlFor="" className="mt-3">
                      Acep
                    </label>
                    <p>Hello lisa.</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="btn-group">
            <Link to="/message" className="btn-notif">
              <img src="/assets/icons/Vector.svg" alt="" />
            </Link>
          </div>
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
