/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { Card, Modal } from "react-bootstrap";
import { getComments, getPosts } from "../../../services/user";
import { getTokenId } from "../../atom/notif";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";

export default function StatusPost({ dataStatus }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataList, setDataList] = useState([]);

  useEffect(async () => {
    const response = await getPosts(getTokenId());
    setDataList(response.data.feed);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="statusRell-style">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {dataList.map((item) => (
          <div className="statusRell-img-item">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="statusRell-btn-modal"
                onClick={() => setModalShow(true)}
                variant="top"
                src={`${item.filename}`}
              />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dataList={dataList}
              />
              <Card.Body>
                <div className="statusRell-nav">
                  <div className="statusRell-nav-body">
                    <div className="statusRell-user-info">
                      <div className="statusRell-user-profile">
                        <Link to="/feed">
                          {item.user.image ? (
                            <img
                              src={`http://localhost:5000/uploads/${item.user.image}`}
                              alt=""
                            />
                          ) : (
                            <img src="/assets/img/no-image.jpg" alt="" />
                          )}
                        </Link>
                      </div>
                      <p>{item.user.username}</p>
                    </div>
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
                </div>
              </Card.Body>

              <div className="statusRell-footer">
                <p>{item.like} Likes</p>
              </div>
            </Card>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

function MyVerticallyCenteredModal({ dataList, ...props }) {
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
            <img src={dataList[0].filename} alt="" />
          </div>
          <div className="status-modalinfo">
            <div className="owner-status-modal">
              {dataList[0].user.image ? (
                <ImageProfile image={dataList[0].user.image} />
              ) : (
                <NoImageProfile />
              )}
              <p>{dataList[0].caption}</p>
            </div>
            <hr />
            <div className="modal-comments-response">
              <div href="/people" className="modal-card-people">
                <Link to="/profile-people" className="modal-card-img">
                  <img src="/assets/img/Rectangle 8.png" alt="" />
                </Link>
                <div className="modal-info-people">
                  <label htmlFor="" className="mt-3">
                    Acep
                  </label>
                  <p>Hello lisa, today i'll eat you at your badroom.</p>
                </div>
              </div>
              <div href="/people" className="modal-card-people">
                <Link to="/profile-people" className="modal-card-img">
                  <img src="/assets/img/Rectangle 8.png" alt="" />
                </Link>
                <div className="modal-info-people">
                  <label htmlFor="" className="mt-3">
                    Acep
                  </label>
                  <p>Hello lisa, today i'll eat you at your badroom.</p>
                </div>
              </div>
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
                  <p>1.234 Like</p>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
