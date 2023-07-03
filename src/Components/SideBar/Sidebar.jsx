/** @format */

import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import {
  Bookmark,
  Chat,
  Class,
  Event,
  ExpandMore,
  Group,
  Help,
  PlayCircle,
  QuestionAnswer,
  QuestionMark,
  Schedule,
  School,
  VideoCall,
  VideoFile,
  Work,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className='SidebarContainer'>
      <div className='logoSec'>
        <img src={logo} alt='logo' className='logo' />
        <div className='line'></div>
      </div>
      <div className='btnlink'>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <RssFeedIcon className="icon" />
            <p> Feed</p>
          </Link>
        </div>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <Chat  className="icon"/>
            <p> Chat</p>
          </Link>
        </div>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <PlayCircle  className="icon"/>
            <p> Video</p>
          </Link>{" "}
        </div>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <Group  className="icon"/>
            <p> Group</p>
          </Link>
        </div>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <Bookmark  className="icon"/>
            <p> Bookmark</p>
          </Link>
        </div>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <Help  className="icon"/>
            <p> Questions</p>
          </Link>
        </div>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <Work  className="icon"/>
            <p> Jobs</p>
          </Link>
        </div>{" "}
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <Event  className="icon"/>
            <p> Events</p>
          </Link>
        </div>
        <div className='link'>
          <Link to='/' className='MuiIcons'>
            <School  className="icon"/>
            <p> Learning</p>
          </Link>
        </div>
        <Link to='/' className='MuiIcons'>
          <ExpandMore id='more' />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
