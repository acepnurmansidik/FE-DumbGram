/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { getComments, getPosts } from "../../../services/user";
import { getTokenId } from "../../atom/notif";
import ModalDetailStatus from "../../molecules/ModalDetailStatus/ModalDetailStatus";

export default function StatusPost({ dataStatus }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataList, setDataList] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const response = await getPosts(getTokenId());
    setDataList(response.data.feed);
  }, []);

  const handleGetComments = async (id) => {
    const response = await getComments(id);
    setComments(response.data.comments);
  };

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
          <div key={item.id} className="statusRell-img-item">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="statusRell-btn-modal"
                onClick={() => {
                  setModalShow(true);
                  handleGetComments(item.id);
                }}
                variant="top"
                src={`${item.filename}`}
              />
              <ModalDetailStatus
                show={modalShow}
                onHide={() => setModalShow(false)}
                comments={comments}
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
