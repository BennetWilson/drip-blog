import React from 'react';
import './header.css'
import DripCover from '../../Assets/Drip-Cover.jpeg'


export default function Header () {
    return (
        <div className='header'>
        <div className="headerTitles">
        <span className='headerTitleSm'>We're Passionate About Coffee</span>
        <span className='headerTitleLg'>DRIP <i class="fa-solid fa-droplet"></i></span>
        
        </div> 
        <img className='headerImg' src={DripCover} alt="" />          
        </div>
    );
}


