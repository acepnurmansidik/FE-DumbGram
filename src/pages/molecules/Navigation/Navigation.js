import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="menu-btn-nav">
        <div className="menu-nav-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="menu-nav-btn">
          <div className="btn-group">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img src="/assets/icons/notif.svg" alt="" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/people" className="dd-card">
                  <div className="dd-card-img">
                    <img src="/assets/img/Rectangle 10.png" alt="" />
                  </div>
                  <div className="card-info-people">
                    <label for="" className="mt-3">
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
