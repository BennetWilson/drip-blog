import React from 'react';
import './header.css'


export default function Header () {
    return (
        <div className='header'>
        <div className="headerTitles">
        <span classname='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
        </div> 
        <img className='headerImg' src="https://via.placeholder.com/2500" alt="" />          
        </div>
    );
}


