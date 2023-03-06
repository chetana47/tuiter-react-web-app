import React from "react";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeTweets = (
    {
        post =
            {
                "_id": "123",
                "userName": "Elon Musk",
                "time": "15h",
                "handle": "@elonmusk",
                "description": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
                "imagetitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                "imagedescription": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ",
                "nooftweets": "4.2k",
                "retweets": "3.5k",
                "likes": "37.5k",
                "imagepath": "../../images/elonmuskdp.jpeg",
                "tweetimage": "../../images/elon.jpeg"
            },
        post2 =
            {
                "_id": "234",
                "userName": "SpaceX",
                "time": "16h",
                "handle": "@SpaceX",
                "description": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage -> starlink.com/rv ",
                "imagetitle": "",
                "imagedescription": "",
                "nooftweets": "5,346",
                "retweets": "1,601",
                "likes": "19.2K",
                "imagepath": "../../images/spacex.png",
                "tweetimage": "../../images/spacex.jpeg"
            }
    }
) => {
    return (
        <li className="list-group-item list-group-item-action">
            <div style={{width: "50%"}}>
                <div className="wd-main-body" style={{border: "none"}}>
                    <div className="wd-avatar-div">
                        <img src={post.imagepath} alt="Avatar" className="wd-avatar-img"/>
                    </div>
                    <div className="wd-main-body-text-div">
                        <div className=" wd-main-body-text">
                            <div className="row" style={{display: "flex", alignItems: "center"}}>
                    <span style={{
                        width: "fit-content",
                        paddingRight: "5px"
                    }}>{post.userName}</span>
                                <i className="fas fa-check-circle"
                                   style={{
                                       fontSize: "14px",
                                       width: "fit-content",
                                       paddingLeft: "0",
                                       paddingRight: "5px",
                                       color:"#00acee"
                                   }}></i>
                                <span className="wd-gray-handle"
                                      style={{
                                          width: "fit-content",
                                          paddingLeft: "0",
                                          paddingRight: "5px"
                                      }}>{post.handle}</span>
                                <span className="wd-gray-handle" style={{width: "fit-content", paddingLeft: "0px",paddingRight: "3px",paddingBottom:"8px",fontWeight:"bold"}}>.</span>
                                <span className="wd-gray-handle"
                                      style={{width: "fit-content",paddingLeft: "0px"}}>{post.time} </span>
                                <div style={{width: "fit-content", marginLeft: "auto"}}><a href="/#">
                                    <i className="fas fa-ellipsis wd-black-color"></i></a></div>

                                <span
                                    style={{fontSize: "15px"}}>{post.description}</span>
                            </div>
                        </div>
                        <br/>
                        <div className="wd-retweet">
                            <div className="wd-avatar-div2">
                                <img src={post2.imagepath} alt="Avatar" className="wd-avatar-img2"/>
                            </div>
                            <div className=" wd-main-body-text">
                                <div className="row"
                                     style={{display: "flex", alignItems: "center"}}>
                    <span style={{
                        width: "fit-content",
                        paddingRight: "5px"
                    }}>{post2.userName}</span>
                                    <i className="fas fa-check-circle"
                                       style={{
                                           fontSize: "14px",
                                           width: "fit-content",
                                           paddingLeft: "0",
                                           paddingRight: "5px",
                                           color:"#00acee"
                                       }}></i>
                                    <span className="wd-gray-handle"
                                          style={{
                                              width: "fit-content",
                                              paddingLeft: "0",
                                              paddingRight: "5px"
                                          }}>{post2.handle}</span>
                                    <span className="wd-gray-handle" style={{width: "fit-content", paddingLeft: "0px",paddingRight: "3px",paddingBottom:"8px",fontWeight:"bold"}}>.</span>
                                    <div className="wd-gray-handle"
                                         style={{width: "fit-content",paddingLeft: "0px"}}>{post2.time} </div>

                                    <span
                                        style={{
                                            fontSize: "15px",
                                            marginTop: "5px"
                                        }}>{post2.description}</span>
                                </div>

                            </div>
                        </div>
                        <div className="wd-icons">
                            <div className="wd-icon-style">
                                <a href="/#"> <i className="fas fa-comment wd-black-color"></i></a>
                                <span
                                    style={{
                                        fontSize: "15px",
                                        paddingRight: "12px"
                                    }}>&nbsp; {post.nooftweets}</span>
                            </div>
                            <div className="wd-icon-style">
                                <a href="/#"><i className="fas fa-retweet wd-black-color"></i></a>
                                <span
                                    style={{
                                        fontSize: "15px",
                                        paddingRight: "12px"
                                    }}>&nbsp; {post.retweets}</span>
                            </div>
                            <div className="wd-icon-style">
                                <a href="/#"><i className="fas fa-heart wd-black-color"></i></a>
                                <span
                                    style={{
                                        fontSize: "15px",
                                        paddingRight: "12px"
                                    }}>&nbsp; {post.likes}</span>
                            </div>
                            <div className="wd-icon-style">
                                <a href="/#"><i className="fas fa-upload wd-black-color"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default HomeTweets;