import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SidebarProfile() {
  return (
    <>
      <Col sm={4} className="sidebar-profile-container">
        <div className="sidebar-profile-container">
          <Link to="/explore">
            <div className="sidebar-logo position-relative mb-5">
              <div className="position-absolute top-0 start-0 mt-3">
                <img
                  className="img1-logo-dumbgram"
                  src="../assets/icons/DumbGram.svg"
                  alt=""
                />
              </div>
              <div className="position-absolute top-0 start-0">
                <img src="../assets/icons/shadow.svg" alt="" />
              </div>
            </div>
          </Link>
          <div className="sidebar-menu-home">
            <div className="sidebar-edit-nav">
              <a href="/edit-profile">
                <img src="/assets/icons/edit.svg" alt="" />
                <i className="far fa-edit"></i>
              </a>
            </div>
            <div className="sidebar-menu-info">
              <div className="sidebar-img-profile">
                <img src="/assets/img/Rectangle 4.png" alt="" />
              </div>
              <div className="sidebar-user-info">
                <h4>Lisa</h4>
                <p>@lalisa_</p>
              </div>
              <div className="sidebar-info-followers">
                <div className="followers-branch">
                  <p>Post</p>
                  <p>5</p>
                </div>
                <div className="followers-branch">
                  <p>Followers</p>
                  <p>5</p>
                </div>
                <div className="followers-branch">
                  <p>Following</p>
                  <p>5</p>
                </div>
              </div>
            </div>
            <hr className="dropdown-divider" />
            <div className="sidebar-bio-user">
              <p>Okay</p>
            </div>
            <hr className="dropdown-divider" />
            <div className="sidebar-profile-nav">
              <div className="sidebar-sub-container">
                <img src="/assets/icons/feed.svg" alt="" />
                <Link to="/feed" className="btn-link-basic">
                  {" Feed"}
                </Link>
              </div>
              <div className="sidebar-sub-container mt-3">
                <img src="/assets/icons/explore.svg" alt="" />
                <Link to="/explore" className="btn-link-basic">
                  {" Explore"}
                </Link>
              </div>
            </div>
            <hr className="dropdown-divider" />
            <div className="sidebar-btn-logout">
              <img src="/assets/icons/logout.svg" alt="" />
              <Link to="/" className="btn-link-basic">
                {" Logout"}
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
