import React from "react";
import "./Home.css";
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from "../../components/RightSide/RightSide";

export default function Home() {
  return (
    <>
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
    </>
  );
}
