/** @format */

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Post from "../Post/Post";

const Feed = ({ UserName }) => {
  const [posts, setPosts] = useState([]);
  //const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = UserName
          ? await axios.get(
              `http://localhost:5000/api/post/profile/` + UserName
            )
          : await axios.get(
              `http://localhost:5000/api/post/timeline/64a1b7a025ff14a1874a0d10`
            );
        // console.log("post", res.data);
        const sortedPosts = res.data.sort((a, b) => {
          const timestampA = new Date(a.updatedAt);
          const timestampB = new Date(b.updatedAt);
          return timestampB - timestampA;
        });
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [UserName /* users._id */]);

  return (
    <>
      {posts !== null &&
        posts.map((s) => {
          return <Post key={s._id} post={s} />;
        })}
    </>
  );
};

export default Feed;
