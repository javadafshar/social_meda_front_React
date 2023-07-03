/** @format */

import React, { useEffect, useState } from "react";
import "./OnlineUser.scss";
import { Avatar } from "@mui/material";
import axios from "axios";

const OnlineUser = ({ users }) => {
  /* const [followers, setFollowers] = useState([]); */
 // const [users, setusers] = useState([]);

 /*  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/${userId}/followers`
        );
        setFollowers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchuser();
  }, []); */
//console.log('sss',users)
  return (
    <>
      <div className='onlineuser'>
        <Avatar src={users.ProfilePicture} className='useravatar' />{" "}
        <div className='stat'></div>
        <p className='Username'> {users.UserName}</p>
      </div>
    </>
  );
};
//
export default OnlineUser;
