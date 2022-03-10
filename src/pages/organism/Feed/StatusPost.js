/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { getComments, getPosts } from "../../../services/user";
import { setLikeFeed, getLikeFeed } from "../../../services/feed";
import { getTokenId } from "../../atom/notif";
import ModalFeed from "./ModalFeed";

export default function StatusPost({ dataStatus }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataList, setDataList] = useState([]);
  const [comments, setComments] = useState([]);
  const [countLike, setCountLike] = useState([]);
  const [detailStatus, setDetailStatus] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState({});

  // GET Post
  useEffect(async () => {
    const response = await getPosts(getTokenId());
    setDataList(response.data.feed);
  }, [setDataList]);

  // GET Like feed
  const handleGetLike = async (id) => {
    const response = await getLikeFeed(id);
    setCountLike(response.data.likes);
  };
  // get comments status selected
  const handleGetComments = async (id) => {
    const response = await getComments(id);
    setComments(response.data.comments);
  };

  // POST liker
  const handleLike = async (id) => {
    await setLikeFeed(id);
    window.location.reload();
  };

  // GET user from token
  useEffect(async () => {
    let userToken = atob(Cookies.get("token"));
    userToken = jwt_decode(userToken);
    setUserInfo(userToken);
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
          <div key={item.id} className="statusRell-img-item">
            <Card style={{ width: "100%" }}>
              <Card.Img
                className="statusRell-btn-modal"
                onClick={() => {
                  setModalShow(true);
                  handleGetComments(item.id);
                  handleGetLike(item.id);
                  setDetailStatus(item);
                  setUser(item.user);
                }}
                variant="top"
                src={`${item.filename}`}
              />
              <ModalFeed
                show={modalShow}
                onHide={() => setModalShow(false)}
                detailStatus={detailStatus}
                commentList={comments}
                countLike={countLike}
                handleLike={handleLike}
                setModalShow={setModalShow}
                userInfo={userInfo}
                user={user}
              />
              <Card.Body>
                <div className="statusRell-nav">
                  <div className="statusRell-nav-body">
                    <div className="statusRell-user-info">
                      <div className="statusRell-user-profile">
                        <Link to="/feed">
                          {item.user.image ? (
                            <img
                              src={`https://dumbgram-app.herokuapp.com/uploads/${item.user.image}`}
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
                      <img
                        onClick={() => handleLike(item.id)}
                        className="text-pointer"
                        src="../assets/icons/love.svg"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setModalShow(true);
                          handleGetComments(item.id);
                          setDetailStatus(item);
                        }}
                        className="text-pointer"
                        src="../assets/icons/comment.svg"
                        alt=""
                      />
                      <img src="../assets/icons/share.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Card.Body>

              <div className="statusRell-footer">
                {countLike.map((like) => {
                  if (like.feed.id === item.id) {
                    return <p key={like.id}>{countLike.length} Like</p>;
                  } else {
                    return <p key={like.id}>0 Like</p>;
                  }
                })}
              </div>
            </Card>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
