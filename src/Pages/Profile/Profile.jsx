import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import "./Profile.scss";
import OnlineUser from "../../Components/OnlineUser/OnlineUser";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
//import wall from "../../assets/post/3.jpeg";
//import p from "../../assets/person/8.jpeg";
import { Avatar } from "@mui/material";
//import { Users, Posts } from "../../dummyData";
//import Post from "../../Components/Post/Post";
import Addpost from "../../Components/AddPost/Addpost";
import axios from "axios";
import { useParams } from "react-router";
import Feed from "../../Components/Feed/Feed";

const Profile = () => {
  const [user, setuser] = useState([]);
  const [users, setusers] = useState([]);
  const [showLeftSide, setShowLeftSide] = useState(false);

  const username = useParams().username;
  console.log("params", username);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchalluser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/64a1b7467f48f9f9f993527d/followers"
        );
        setusers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchalluser();
  }, []);

  useEffect(() => {
    const fetchuserpost = async () => {
      try {
        const users = await axios.get(
          `http://localhost:5000/api/user/profile?username=${username}`
        );
        setuser(users.data);
        //console.log("userssssssssss", users.data);
      } catch (error) {}
    };
    fetchuserpost();
  }, [username]);

  const handleToggleLeftSide = () => {
    setShowLeftSide(!showLeftSide);
  };

  return (
    <>
      <Navbar />
      <div className="ProfileContainer">
        <div className={`LeftSide ${showLeftSide ? "show" : ""}`}>
          <Sidebar />
          <button
            className="toggleLeftSideButton"
            onClick={handleToggleLeftSide}
          >
            Toggle Left Side
          </button>
        </div>
        <div className="mainProfile">
          <div className="topprofile">
            <div className="avatar">
              <Avatar src={user.ProfilePicture} className="avatarimg" />
            </div>
            <div className="wallpaper">
              <img src={user.CoverPicture} alt="a" />
            </div>
          </div>
          <div className="RandPost">
            <div className="button">
              <Addpost />
              <Feed UserName={username} />
            </div>
            <div className="RightSide">
              <br />
              <div className="informations">
                <p className="Userstatuse" id="Userstatuse">
                  information
                </p>
                <br />
                <p>Name: {user.Name}</p>
                <p>Last Name: {user.LastName}</p>
                <p>Educations: {user.Educations}</p>
                <p>Relationship: {user.Relationship}</p>
              </div>
              <br />
              <br />
              <p className="Userstatuse">
                <PersonOutlineIcon className="icon" />
                Online Friends
              </p>
              {users.map((s) => (
                <OnlineUser key={s._id} users={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
