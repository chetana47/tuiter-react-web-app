import React from "react";

const TuitStats = (tuitStat) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm wd-icon-style" >
                    <span> <i className="fa-regular fa-message wd-gray-handle"></i></span>
                    <span style={{ fontSize: "15px", paddingRight: "12px"}}>&nbsp; {tuitStat.replies}</span>
                </div>
                <div className="col-sm wd-icon-style">
                    <span><i className="fas fa-retweet wd-gray-handle"></i></span>
                    <span style={{ fontSize: "15px", paddingRight: "12px"}}>&nbsp; {tuitStat.retuits}</span>
                </div>
                <div className="col-sm wd-icon-style">
                    <span onClick={tuitStat.handleLike} style={{"cursor": "pointer"}}><i className={tuitStat.liked?`fa-solid fa-heart wd-red-like`:`fa-regular fa-heart wd-black-like`}></i></span>
                    <span style={{ fontSize: "15px", paddingRight: "12px"}}>&nbsp; {tuitStat.likes}</span>
                </div>
                <div className="col-sm wd-icon-style">
                    <span><i className="fa-solid fa-cloud-arrow-up wd-gray-handle"></i></span>
                </div>
            </div>
        </div>
    )
}

export default TuitStats;