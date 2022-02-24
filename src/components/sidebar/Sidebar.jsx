import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className='sideBarImage' src="https://via.placeholder.com/250" alt="" />
        <p className="sideBarP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque
          corporis natus ipsa maiores voluptatum ab ut expedita, hic, totam,
          voluptate aut? Minima assumenda velit hic nobis nulla cum
          reprehenderit?
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Sports</li>
          <li className="sideBarListItem">Games</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-linkedin"></i>
          <i className="sideBarIcon fa-brands fa-github-square"></i>
         
        </div>
      </div>
    </div>
  );
}
