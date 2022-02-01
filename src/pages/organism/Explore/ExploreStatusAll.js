import React from "react";
import { Link } from "react-router-dom";
import { Card, Modal } from "react-bootstrap";

export default function ExploreStatusAll(props) {
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
