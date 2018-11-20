import React from 'react';

const CommentDetail  = (props) => {
    return (
        <div className="comment">
            <a className="avatar">
            <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;