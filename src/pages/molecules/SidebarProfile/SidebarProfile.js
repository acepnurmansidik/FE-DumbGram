/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import {
  getFollowers,
  getUserAPI,
  getFollowings,
  getPosts,
} from "../../../services/user";

export default function SidebarProfile() {
  const router = useNavigate();
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [post, setPost] = useState([]);

  // GET info user profile
  useEffect(async () => {
    // get & convert from cookies
    const getTokenCookies = atob(Cookies.get("token"));
    // decode token
    const getUserToken = jwt_decode(getTokenCookies);
    // get u=info user from token
    const getUserInfo = await getUserAPI(getUserToken.id);
    // set user
    setUser(getUserInfo.data.user);
  }, []);

  // GET info user followers
  useEffect(async () => {
    // get followers
    const dataFollowers = await getFollowers(user.id);
    setFollowers(dataFollowers.data.followers);
  }, []);

  // GET info user following
  useEffect(async () => {
    // get following
    const getFollowing = await getFollowings(user.id);
    setFollowing(getFollowing.data.following);
  }, []);

  // GET info user post
  useEffect(async () => {
    // get following
    const getPost = await getPosts(user.id);
    setPost(getPost.data.feed);
  }, []);

  const handleLogOut = () => {
    Cookies.remove("token");
    router("/");
  };

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
                {user.image ? (
                  <img src={`${user.image}`} alt="" width={180} height={180} />
                ) : (
                  <img
                    src="/assets/img/no-image.jpg"
                    alt=""
                    width={180}
                    height={180}
                  />
                )}
              </div>
              <div className="sidebar-user-info">
                <h4>{user.fullname}</h4>
                <p>{user.username}</p>
              </div>
              <div className="sidebar-info-followers">
                <div className="followers-branch">
                  <p>Post</p>
                  <p>{post.length}</p>
                </div>
                <div className="followers-branch">
                  <p>Followers</p>
                  <p>{followers.length}</p>
                </div>
                <div className="followers-branch">
                  <p>Following</p>
                  <p>{following.length}</p>
                </div>
              </div>
            </div>
            <hr className="dropdown-divider" />
            <div className="sidebar-bio-user">
              <p id="bio-sidebar">{user.bio}</p>
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
              <Link to="/" className="btn-link-basic" onClick={handleLogOut}>
                {" Logout"}
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
