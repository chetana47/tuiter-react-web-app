import React from "react";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePosts = (
    {
        post =
            {
                "_id": "123",
                "userName": "Elon Musk",
                "time": "23h",
                "handle": "@elonmusk",
                "description": "Amazing show about @Inspiration4x mission!",
                "imagetitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                "imagedescription": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space ",
                "nooftweets": "4.2k",
                "retweets": "3.5k",
                "likes": "37.5k",
                "imagepath": "../../images/elonmuskdp.jpeg",
                "tweetimage": "../../images/elon.jpeg"
            }
    }
) => {
    return (
        <li className="list-group-item list-group-item-action">
            <a href="/#"><i className="fas fa-retweet wd-black-color" style={{paddingLeft:"50px"}}></i></a>
            <span style={{paddingLeft:"10px",fontWeight:"bold",fontSize:"12px",fontFamily:"arial"}}>Elon Musk Retweeted</span>
            <div style={{width: "fit-content",height:"auto",fontFamily:"arial"}}>
                <div className="wd-main-body" style={{border: "none"}}>
                    <div className=" wd-avatar-div">
                        <img src={post.imagepath} alt="Avatar" className="wd-avatar-img"/>
                    </div>

                    <div className="wd-main-body-text-div">
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
                                      paddingRight: "3px"
                                  }}>{post.handle}</span>
                            <span className="wd-gray-handle" style={{width: "fit-content", paddingLeft: "0px",paddingRight: "3px",paddingBottom:"8px",fontWeight:"bold"}}>.</span>
                            <div className="wd-gray-handle"
                                 style={{width: "fit-content",paddingLeft: "0px"}}>{post.time} </div>
                            <div style={{marginLeft: "auto", width: "fit-content"}}><a href="/#"> <i
                                className="fas fa-ellipsis wd-black-color"></i></a></div>
                            <div
                                style={{fontSize: "15px", marginTop:"5px"}}>{post.description}</div>
                        </div>
                        <div className="wd-image-body">
                            <img className="wd-lorem-img" src={post.tweetimage} alt={"Tweet"}/>
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
                <br/>
                <br/>
                <div><br/>&nbsp;</div>
                <span style={{paddingLeft:"70px",color:"#00acee"}}> Show this thread</span>
            </div>

        </li>
    );
};

export default HomePosts;