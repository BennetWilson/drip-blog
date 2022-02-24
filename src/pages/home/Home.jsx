import React from 'react';
import './Home.css'

import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/Sidebar'

export default function Home () {
    return (
        <>
        <Header />
        <div className ='home'>
            <Posts />
            <SideBar />

        </div>
        </>
    );
}


