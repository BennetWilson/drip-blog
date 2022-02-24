import React from 'react';
import './header.css'
import DripCover from '../../Assets/Drip-Cover2.jpeg'


export default function Header () {
    return (
        <div className='header'>
        <div className="headerTitles">
        <span classname='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
        </div> 
        <img className='headerImg' src={DripCover} alt="" />          
        </div>
    );
}


