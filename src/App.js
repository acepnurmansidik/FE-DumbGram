import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/organism/LandingPage/LandingPage";
import Feed from "./pages/organism/Feed/Feed";
import CreatePost from "./pages/organism/CreatePost/CreatePost";
import EditProfile from "./pages/organism/EditProfile/EditProfile";
import Explore from "./pages/organism/Explore/Explore";
import ProfilePeople from "./pages/organism/ProfilePeople/ProfilePeople";
import Message from "./pages/organism/Message/Message";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/create-post" element={<CreatePost />} />
        <Route exact path="/edit-profile" element={<EditProfile />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/profile-people" element={<ProfilePeople />} />
        <Route exact path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}
