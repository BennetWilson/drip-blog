import React from 'react';
import './header.css'
import DripCover from '../../Assets/Drip-Cover.jpeg'


export default function Header () {
    return (
        <div className='header'>
        <div className="headerTitles">
        <span classname='headerTitleSm'>We're Passionate About Coffee</span>
        <span className='headerTitleLg'>DRIP</span>
        </div> 
        <img className='headerImg' src={DripCover} alt="" />          
        </div>
    );
}


