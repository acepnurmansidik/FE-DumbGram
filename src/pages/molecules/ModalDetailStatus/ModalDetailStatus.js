import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function ModalDetailStatus({
  detailStatus,
  commentList,
  ...props
}) {
  const [imageOwner, setImageOwner] = useState({});

  useEffect(() => {
    // setImageOwner(detailStatus);
    // console.log(imageOwner);
  }, []);

  console.log(detailStatus.user);
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
                <div href="/people" className="modal-card-people">
                  <Link to="/profile-people" className="modal-card-img">
                    {comment.user.image ? (
                      <ImageProfile image={comment.user.image} />
                    ) : (
                      <NoImageProfile />
                    )}
                  </Link>
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
                  <p>12 Like</p>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
