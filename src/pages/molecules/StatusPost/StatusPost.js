import React from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { Card, Modal } from "react-bootstrap";

export default function StatusPost({ dataStatus }) {
  const [modalShow, setModalShow] = React.useState(false);

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
        {dataStatus.map((item) => (
          <div className="statusRell-img-item">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="statusRell-btn-modal"
                onClick={() => setModalShow(true)}
                variant="top"
                src={`../assets/img/${item.imageUrl}`}
              />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Card.Body>
                <div className="statusRell-nav">
                  <div className="statusRell-nav-body">
                    <div className="statusRell-user-info">
                      <div className="statusRell-user-profile">
                        <Link to="/profile-people">
                          <img src="../assets/img/Rectangle 6.png" alt="" />
                        </Link>
                      </div>
                      <p>Acep</p>
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
                <p>1.023 Like</p>
              </div>
            </Card>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
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
            <img src="/assets/img/Rectangle 8.png" alt="" />
          </div>
          <div className="status-modalinfo">
            <div className="owner-status-modal">
              <img src="/assets/img/Rectangle 8.png" alt="" />
              <p>oke this my helmet</p>
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
