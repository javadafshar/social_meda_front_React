// Addpost.jsx
import React, { useEffect } from "react";
import "./Addpost.scss";
import { Avatar } from "@mui/material";
import { AddPhotoAlternate as AddPhotoAlternateIcon } from "@mui/icons-material";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const Addpost = () => {

   
  return (
    <div className="Addpost">
      <div className="top">
        
          <Avatar
            src={
              //users.find((user) => user._id === post[0].UserId)?.ProfilePicture ||
              null
            }
            alt="avatar"
            className="avatarAddpost"
          />
       
        <p>What is in your mind, user name</p>
      </div>
      <hr />
      <div className="down">
        <div id="addphotoOrvideo" className="items">
          <AddPhotoAlternateIcon id="icon" />
          <h5>Photo or Video</h5>
        </div>
        <div id="tag" className="items">
          <LabelIcon id="tags" />
          <h5>Photo or Video</h5>
        </div>
        <div id="location" className="items">
          <LocationOnIcon id="locationIcon" />
          <h5>Location</h5>
        </div>
        <div id="filling" className="items">
          <AddReactionIcon id="fillingIcon" />
          <h5> Feeling</h5>
        </div>
        <button id="shareBtn" className="items">
          Share
        </button>
      </div>
    </div>
  );
};

export default Addpost;
