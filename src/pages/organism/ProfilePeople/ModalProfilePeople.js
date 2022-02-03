/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setPostComment } from "../../../services/user";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function ProfilePeople({
  detailStatus,
  commentList,
  countLike,
  handleLike,
  setModalShow,
  userInfo,
  ...props
}) {
  const router = useNavigate();
  const [likeShow, setLikeShow] = useState();
  const [form, setForm] = useState({
    comment: "",
  });

  // compare
  useEffect(() => {
    countLike.map((like) => {
      if (like.user.id === userInfo.id && like.feed.id === detailStatus.id) {
        setLikeShow(true);
      } else {
        setLikeShow(false);
      }
    });
  }, []);

  // Handle ====================================================
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
              {userInfo.image ? (
                <div
                  className="text-pointer"
                  onClick={() => setModalShow(false)}
                >
                  <ImageProfile image={userInfo.image} />
                </div>
              ) : (
                <div
                  className="text-pointer"
                  onClick={() => setModalShow(false)}
                >
                  <NoImageProfile />
                </div>
              )}
              <p>{detailStatus.caption}</p>
            </div>
            <hr />
            <div className="modal-comments-response">
              {commentList.map((comment) => (
                <div key={comment.id} className="modal-card-people">
                  <div className="modal-card-img">
                    {comment.user.image ? (
                      userInfo.id === comment.user.id ? (
                        <div
                          className="text-pointer"
                          onClick={() => setModalShow(false)}
                        >
                          <ImageProfile image={comment.user.image} />
                        </div>
                      ) : (
                        <Link to={`/feed`}>
                          <ImageProfile image={comment.user.image} />
                        </Link>
                      )
                    ) : (
                      <NoImageProfile className="text-pointer" />
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
                      {likeShow ? (
                        <img
                          key={detailStatus.id}
                          onClick={() => {
                            handleLike(detailStatus.id);
                            setModalShow(false);
                          }}
                          src={`../assets/icons/loveColor.svg`}
                          alt=""
                        />
                      ) : (
                        <img
                          key={detailStatus.id}
                          onClick={() => {
                            handleLike(detailStatus.id);
                            setModalShow(false);
                          }}
                          src="../assets/icons/love.svg"
                          alt=""
                        />
                      )}
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
