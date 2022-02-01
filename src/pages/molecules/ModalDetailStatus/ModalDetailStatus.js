import React, { useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setPostComment } from "../../../services/user";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function ModalDetailStatus({
  detailStatus,
  commentList,
  ...props
}) {
  const router = useNavigate();
  const [form, setForm] = useState({
    comment: "",
  });

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

  const handleDetail = (id) => {
    router(`/profile-people/${id}`);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="statusRell-modal-container">
          <div className="modal-thumbnail-status">
            <img src={detailStatus.filename} alt="" />
          </div>
          <div className="status-modalinfo">
            <div className="owner-status-modal">
              <img
                src={"/assets/img/no-image.jpg"}
                alt=""
                width={180}
                height={180}
              />
              <p>{detailStatus.caption}</p>
            </div>
            <hr />
            <div className="modal-comments-response">
              {commentList.map((comment) => (
                <div className="modal-card-people">
                  <div
                    onClick={() => handleDetail(comment.user.id)}
                    className="modal-card-img"
                  >
                    {comment.user.image ? (
                      <ImageProfile image={comment.user.image} />
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
                      <Link to="/feed">
                        <img src="../assets/icons/love.svg" alt="" />
                      </Link>
                      <Link to="/feed">
                        <img src="../assets/icons/comment.svg" alt="" />
                      </Link>
                      <Link to="/feed">
                        <img src="../assets/icons/share.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                  <p>{detailStatus.like} Like</p>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
