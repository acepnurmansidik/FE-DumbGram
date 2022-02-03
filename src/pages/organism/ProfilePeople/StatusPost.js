/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { getComments, getPosts, getUserAPI } from "../../../services/user";
import { setLikeFeed, getLikeFeed } from "../../../services/feed";
import { getTokenId } from "../../atom/notif";
import ModalProfilePeople from "./ModalProfilePeople";
import ImageProfile from "../../atom/ImageProfile/ImageProfile";
import NoImageProfile from "../../atom/NoImageProfile/NoImageProfile";

export default function StatusPost({ paramID }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataList, setDataList] = useState([]);
  const [comments, setComments] = useState([]);
  const [detailStatus, setDetailStatus] = useState({});
  const [countLike, setCountLike] = useState([]);
  const [userInfo, setUserInfo] = useState("");

  // GET user info
  useEffect(async () => {
    const response = await getUserAPI(paramID);
    setUserInfo(response.data.user);
  }, []);

  useEffect(async () => {
    const response = await getPosts(getTokenId());
    setDataList(response.data.feed);
  }, [setDataList]);

  useEffect(async () => {
    const response = await getUserAPI(paramID);
    setDetailStatus(response.data.user);
  }, []);

  // GET post
  useEffect(async () => {
    const response = await getPosts(paramID);
    setDataList(response.data.feed);
  }, []);

  // get comments status selected
  const handleGetComments = async (id) => {
    const response = await getComments(id);
    setComments(response.data.comments);
  };

  // HANDLE =========================
  // POST liker
  const handleLike = async (id) => {
    await setLikeFeed(id);
    window.location.reload();
  };

  // GET Like feed
  const handleGetLike = async (id) => {
    const response = await getLikeFeed(id);
    setCountLike(response.data.likes);
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
                  handleGetLike(item.id);
                  setDetailStatus(item);
                }}
                variant="top"
                src={`${item.filename}`}
              />
              <ModalProfilePeople
                show={modalShow}
                onHide={() => setModalShow(false)}
                detailStatus={detailStatus}
                commentList={comments}
                countLike={countLike}
                handleLike={handleLike}
                setModalShow={setModalShow}
                userInfo={userInfo}
              />
              <Card.Body>
                <div className="statusRell-nav">
                  <div className="statusRell-nav-body">
                    <div className="statusRell-user-info">
                      <div className="statusRell-user-profile">
                        <Link to="/feed">
                          {item.user.image ? (
                            <ImageProfile
                              className="text-pointer"
                              image={item.user.image}
                            />
                          ) : (
                            <NoImageProfile className="text-pointer" />
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
                  if (
                    like.user.id === userInfo.id &&
                    like.feed.id === item.id
                  ) {
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
