import React from "react";
import { Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function ModalDetailStatus({
  comments,
  detailStatus,
  ...props
}) {
  console.log(detailStatus);
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
              {/* {detailStatus.user.image ? (
                <ImageProfile image={detailStatus.user.image} />
              ) : (
                <NoImageProfile />
              )} */}
              {/* <ImageProfile image={detailStatus.user.image} /> */}
              <p>{detailStatus.caption}</p>
            </div>
            <hr />
            <div className="modal-comments-response">
              {/* {comments.map((item) => (
                <div href="/people" className="modal-card-people">
                  {item.user.image ? (
                    <Link to="/profile-people" className="modal-card-img">
                      <ImageProfile image={item.user.image} />
                    </Link>
                  ) : (
                    <Link to="/profile-people" className="modal-card-img">
                      <NoImageProfile />
                    </Link>
                  )}
                  <div className="modal-info-people">
                    <label htmlFor="" className="mt-3">
                      {item.user.fullname}
                    </label>
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))} */}
            </div>
            <Card.Body>
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
