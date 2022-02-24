import React from 'react';
import './singlepost.css'

export default function SinglePost () {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://via.placeholder.com/250" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Ben</b></span>
                    <span className='singlePostDate'>1 hour ago </span>
                </div>
                <p className='singlePostDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis aliquid mollitia distinctio, et voluptates illum, adipisci esse eveniet nisi vitae nulla facilis accusantium dolores expedita quas repudiandae aut dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis aliquid mollitia distinctio, et voluptates illum, adipisci esse eveniet nisi vitae nulla facilis accusantium dolores expedita quas repudiandae aut dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis aliquid mollitia distinctio, et voluptates illum, adipisci esse eveniet nisi vitae nulla facilis accusantium dolores expedita quas repudiandae aut dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis aliquid mollitia distinctio, et voluptates illum, adipisci esse eveniet nisi vitae nulla facilis accusantium dolores expedita quas repudiandae aut dolorum!</p>
            </div>
        </div>
    );
}


