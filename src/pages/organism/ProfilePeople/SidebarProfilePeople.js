/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getUserAPI,
  getFollowings,
  getFollowers,
  getPosts,
  getStatusFollow,
  actionBtnToggleFollow,
} from "../../../services/user";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function SidebarProfilePeople(props) {
  const { paramID } = props;
  const router = useNavigate();
  const [followers, setFollowers] = useState([]);
  const [statusFollow, setStatusFollow] = useState({});
  const [following, setFollowing] = useState([]);
  const [post, setPost] = useState([]);
  const [userInfo, setUserInfo] = useState("");

  // GET user info
  useEffect(async () => {
    const response = await getUserAPI(paramID);
    setUserInfo(response.data.user);
  }, []);

  // GET user followers
  useEffect(async () => {
    const response = await getFollowers(paramID);
    setFollowers(response.data.followers);
  }, []);

  // GET user following
  useEffect(async () => {
    const response = await getFollowings(paramID);
    setFollowing(response.data.following);
  }, []);

  // GET user post
  useEffect(async () => {
    const response = await getPosts(paramID);
    setPost(response.data.feed);
  }, []);

  // GET status follow
  useState(async () => {
    const response = await getStatusFollow(paramID);
    setStatusFollow(response.data.following);
  }, []);

  // handle button=========================================
  // handle toggle follow
  const handleToggleFollow = async () => {
    await actionBtnToggleFollow(paramID);
  };

  const handleLogOut = () => {
    Cookies.remove("token");
    router(`/`);
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
                {userInfo.image ? (
                  <ImageProfile image={userInfo.image} />
                ) : (
                  <NoImageProfile />
                )}
              </div>
              <div className="sidebar-user-info">
                <h4>{userInfo.fullname}</h4>
                <p>@{userInfo.username}</p>
              </div>
              <div className="sidebar-btn-follow">
                <div className="sidebar-btn-pp">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Button
                          onClick={() => router(`/message/${userInfo.id}`)}
                          className="btn gradient-btn"
                        >
                          Message
                        </Button>
                      </Form.Group>
                    </Col>

                    <Col>
                      {statusFollow.length ? (
                        <Button
                          onClick={() => {
                            handleToggleFollow();
                            window.location.reload();
                          }}
                          className="unfollow-btn"
                        >
                          Unfollow
                        </Button>
                      ) : (
                        <Form>
                          <Button
                            onClick={() => {
                              handleToggleFollow();
                              window.location.reload();
                            }}
                            className="unfollow-btn"
                          >
                            Follow
                          </Button>
                        </Form>
                      )}
                    </Col>
                  </Row>
                </div>
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
              <p>{userInfo.bio}</p>
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
