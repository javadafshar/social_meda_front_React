/** @format */

import React from "react";
import "./Navbar.scss";
import Clock from "./Clock";
import { Search } from "@mui/icons-material";

import avator from "./../../assets/1.png";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import FullScreenComponent from "./fullscreantogle/fulscreantoglle";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='NavebarContainer'>
      <div className='timer'>
        <Clock />
      </div>
      <div className='mid'>
        <div className='search'>
          <Search className='searchicon' />

          <input type='text' className='searchinput'></input>
        </div>
      </div>
      <div className='iconssec'>
        <div className='item'>
          <a href='' className='icon'>
            <NightlightRoundOutlinedIcon sx={{ fontSize: 20 }} />
          </a>
          {/*  <a href='' className='icon'>
              <FormatListBulletedTwoToneIcon sx={{ fontSize: 20 }} />
            </a> */}
          <a href='' className='icon'>
            <NotificationsOutlinedIcon sx={{ fontSize: 20 }} />
          </a>
          <div className='counter'>1</div>
          <a href='' className='icon'>
            <EmailOutlinedIcon sx={{ fontSize: 20 }} />
          </a>
          <div className='counter'>12</div>
          <FullScreenComponent />
          <Link to='/Profile/:username'>
            <Avatar src={avator} alt='' className='avator' />{" "}
          </Link>
          <a href='' className='icon' id='ic'>
            <KeyboardArrowDownTwoToneIcon sx={{ fontSize: 20 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
