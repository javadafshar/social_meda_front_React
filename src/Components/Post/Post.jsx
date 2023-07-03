/** @format */

import React, { useEffect, useState } from "react";
import "./post.scss";
import { Avatar } from "@mui/material";
import { Favorite, MoreVert, ThumbUp } from "@mui/icons-material";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
//import a from "../../assets/person/10.jpeg";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.like.length);
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState(null);
  const like = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user?Userid=${post.UserId}`
        );

        const foundUser = response.data.find(
          (user) => user._id === post.UserId
        );
        setUsers(foundUser); // Set the user object that matches the condition
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [post.userId]);
  const createdAtTimestamp = new Date(post.createdAt).getTime();
  const updatedAtTimestamp = new Date(post.updatedAt).getTime();

  const postimage = post.Media;

  // console.log(users?.UserName);
  return (
    <div className="post">
      <div className="top">
        <div className="sec1">
          <Link to={`/profile/${users?.UserName}`}>
            {" "}
            <Avatar src={users?.ProfilePicture} alt="p" />
          </Link>
          <h5> {users?.UserName}</h5>
          {post.createdAt === post.updatedAt ? (
            <h6>
              Created{" "}
              <ReactTimeAgo
                date={createdAtTimestamp}
                locale="en-US"
                className="timeAgo"
              />
            </h6>
          ) : (
            <h6>
              Update{" "}
              <ReactTimeAgo
                date={updatedAtTimestamp}
                locale="en-US"
                className="timeAgo"
              />{" "}
            </h6>
          )}
        </div>
        <div className="sec2">
          <MoreVert className="extend" />
        </div>
      </div>
      <div className="mid">
        <div className="sec1post">
          <p>{post.PostText}</p>
        </div>{" "}
        <br />
        <div className="sec2post">
          {!postimage ? (
            <></>
          ) : (
            <img src={postimage} alt="photo" className="postimage" />
          )}
        </div>
      </div>
      <div className="buttom">
        <div className="sec1">
          <ThumbUp className="Like" onClick={like} />
          <Favorite className="favorite" onClick={like} />
          <h5>{likes} people Liked</h5>
        </div>
        <div className="sec2">
          <h5 className="comment">{post.comment} Comments</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
