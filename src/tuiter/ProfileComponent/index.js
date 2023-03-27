import {useSelector} from "react-redux";
import React from "react";
import {Link} from "react-router-dom";

function ProfileComponent() {

    const profile = useSelector(
        (state) => state.profile);

    const formatDate = (date) => {

        const newDate = date;

        const monthNames = ["Jan", "Feb", "Mar", "Apr",
                            "May", "Jun", "Jul", "Aug",
                            "Sep", "Oct", "Nov", "Dec"];

        const day = newDate.getDate() + 1;

        const monthIndex = newDate.getMonth();
        const monthName = monthNames[monthIndex];

        const year = newDate.getFullYear();

        return `${day} ${monthName} ${year}`;
    }

    return (
        <div style={{border: "1px solid lightgrey"}}>
            <li className="list-group-item list-group-item-action">
                <a href="/#"><i className="fas fa-arrow-left wd-black-color" style={{paddingLeft:"20px", paddingRight:"20px", position: "relative", top: "15px"}}></i></a>
                <span style={{paddingLeft:"10px",fontWeight:"bold",fontSize:"24px",fontFamily:"arial", position: "relative", top: "10px"}}>{profile.firstName} {profile.lastName}</span>
                <p style={{position: "relative", top: "3px", marginBottom: "0px"}}>
                    <span style={{paddingLeft:"65px", color:"grey",
                        fontSize:"12px",fontFamily:"arial"}}>6590 Tweets</span>
                </p>

                <div className="parent">
                    <div className="image1" >
                        <img className="wd-profile-image" style={{width: "100%"}} src="../../images/saturn.jpeg" alt={"profile"}/>
                    </div>
                    <div className="image2">
                        <img className="rounded-circle" height={125} alt={"avatarIcon"} src="../../images/samantha.jpeg"/>
                    </div>
                </div>
                <br/>
                    <div className="wd-main-body" style={{border: "none",height:"auto",fontFamily:"arial"}}>

                        <div className="wd-main-body-text-div" style={{marginLeft: "0", width: "735px"}}>
                            <p>
                                <Link to="/tuiter/edit-profile" >
                                    <button type="button" className="btn btn-outline-dark btn-block rounded-pill mt-2"
                                            style={{width:"30%", float:"right", color:"black"}}>Edit Profile</button>
                                </Link>
                            </p>
                            <br />
                            <br />

                            <span style={{paddingLeft:"10px",fontWeight:"bold",fontSize:"24px",fontFamily:"arial"}}>{profile.firstName} {profile.lastName}</span>
                            <p style={{paddingLeft:"10px",fontSize:"12px",fontFamily:"arial"}}>{profile.handle}</p>

                            <p style={{paddingLeft:"10px",fontSize:"16px",fontFamily:"arial"}}>{profile.bio}</p>

                            <div className="wd-icons-profile" style={{color:"grey"}}>
                                <div className="wd-icon-style-min">
                                    <i className="fa-solid fa-location-dot wd-black-color"></i>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                            paddingRight: "12px"
                                        }}>&nbsp; {profile.location}</span>
                                </div>
                                <div className="wd-icon-style-min">
                                    <i className="fa-solid fa-calendar-days wd-black-color"></i>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                            paddingRight: "12px"
                                        }}>&nbsp; Born {formatDate( new Date(profile.dateOfBirth))}</span>
                                </div>
                                <div className="wd-icon-style-min">
                                    <i className="fa-solid fa-calendar-days wd-black-color"></i>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                            paddingRight: "12px"
                                        }}>&nbsp; Joined {formatDate(new Date(profile.dateJoined))}</span>
                                </div>
                            </div>
                            <div className="wd-icons-profile" style={{color:"grey"}}>
                                <span style={{fontWeight:"bold", color:"black"}}>{profile.followingCount}</span> Following
                                &nbsp;&nbsp;&nbsp;
                                <span style={{fontWeight:"bold", color:"black"}}>{profile.followersCount}</span> Followers
                            </div>
                        </div>
                    </div>

            </li>
        </div>
    );
}

export default ProfileComponent;