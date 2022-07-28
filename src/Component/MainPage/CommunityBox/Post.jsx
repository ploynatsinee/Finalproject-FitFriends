import React from 'react';
import './Post.scss';
import Avatar from '@mui/material/Avatar';

export const Post = ({ profilePic, image, username, timestamp, message, location }) => {
    return (
        <div className="post">
            <div className="postLeft">
                <Avatar src={profilePic} className="postAvatar" />

                <div className="postLeftInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp).toUTCString()}</p>

                    {/* //ลบ toDate ออกไปเพราะerr */}

                </div>
            </div>

            <div className="postRight">
                <p><span>{username}:</span> {message}</p>
                <div className="postImage">
                    <img src={image} alt="" />
                </div>


                <div className="postOptions">
                    <div className="reply">
                        <p>reply</p>
                    </div>
                    <div className="privateChat">
                        <p>private chat</p>
                    </div>
                    <div className="location">
                        <p>location</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

