/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setPostComment } from "../../../services/user";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function ModalExplore({
  detailStatus,
  commentList,
  countLike,
  handleLike,
  user,
  ...props
}) {
  const router = useNavigate();
  const [userToken, setUserToken] = useState({});
  const [form, setForm] = useState({
    comment: "",
  });

  // GET User from token
  useEffect(() => {
    let userInfo = jwtDecode(atob(Cookies.get("token")));
    setUserToken(userInfo);
  }, []);

  // Handle===========================
  const handelOnSubmit = async (e) => {
    let data = {
      ...form,
      idFeed: detailStatus.id,
    };
    await setPostComment(data);
    router("/explore");
  };

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body key={detailStatus.id}>
        <div className="statusRell-modal-container">
          <div className="modal-thumbnail-status">
            <img src={detailStatus.filename} alt="" />
          </div>
          <div className="status-modalinfo">
            <div className="owner-status-modal">
              {user.image ? (
                userToken.id === user.id ? (
                  <Link to={`/feed`}>
                    <ImageProfile className="text-pointer" image={user.image} />
                  </Link>
                ) : (
                  <Link to={`/profile-people/${user.id}`}>
                    <ImageProfile className="text-pointer" image={user.image} />
                  </Link>
                )
              ) : (
                <Link to={`/profile-people/${user.id}`}>
                  <NoImageProfile className="text-pointer" />
                </Link>
              )}
              <div>
                <h6>{user.fullname}</h6>
                <p>{detailStatus.caption}</p>
              </div>
            </div>
            <hr />
            <div className="modal-comments-response">
              {commentList.map((comment) => (
                <div key={comment.id} className="modal-card-people">
                  <div className="modal-card-img">
                    {comment.user.image ? (
                      userToken.id === comment.user.id ? (
                        <Link to={`/feed`}>
                          <ImageProfile image={comment.user.image} />
                        </Link>
                      ) : (
                        <Link to={`/profile-people/${comment.user.id}`}>
                          <ImageProfile image={comment.user.image} />
                        </Link>
                      )
                    ) : (
                      <NoImageProfile />
                    )}
                  </div>
                  <div className="modal-info-people">
                    <label htmlFor="" className="mt-3">
                      {comment.user.username}
                    </label>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <Card.Body>
              <Form onSubmit={handelOnSubmit}>
                <Form.Control
                  type="text"
                  className=""
                  placeholder="comments"
                  name="comment"
                  onChange={handleOnChange}
                />
              </Form>
              <div className="info-statusRell-modal">
                <div className="statusRell-nav-btnModal">
                  <div className="statusRell-nav-body">
                    <div className="statusRell-nav-btn">
                      <img
                        key={detailStatus.id}
                        onClick={() => handleLike(detailStatus.id)}
                        src="../assets/icons/love.svg"
                        alt=""
                      />
                      <img src="../assets/icons/comment.svg" alt="" />
                      <img src="../assets/icons/share.svg" alt="" />
                    </div>
                  </div>
                  <p>{countLike.length} Like</p>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
