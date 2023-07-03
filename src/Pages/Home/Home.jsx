/** @format */

// Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/Sidebar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
//import { Users } from "../../dummyData";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Addpost from "../../Components/AddPost/Addpost";
import OnlineUser from "../../Components/OnlineUser/OnlineUser";

import Feed from "../../Components/Feed/Feed";
import axios from "axios";

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handle = useFullScreenHandle();

  return (
    <>
      <FullScreen handle={handle}>
        <Navbar handel={handle} className='navbar' />
        <div className='HomeContainer'>
          <div className='LeftSide'>
            <Sidebar />
          </div>
          <div className='mid'>
            <Addpost />

            <Feed />
          </div>
          <div className='RightSide'>
            <p className='Userstatuse'>
              <PersonOutlineIcon className='icon' />
              Online User
            </p>
         
          </div>
        </div>
      </FullScreen>
    </>
  );
};

export default Home;
