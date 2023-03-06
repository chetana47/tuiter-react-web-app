import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";
const ExploreComponent = () => {
    return(
        <div className="container-fluid">
        <div className="row" style={{width:"1000px"}}>
        <div className=" col-7">
        <div>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href={"/#"} className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href={"/#"} className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href={"/#"} className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.jpeg" className="w-100" alt="StarShip"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </div>
        </div>
        <div className="col-5">
        <WhoToFollowList/>
        </div>
        </div>
        </div>
    );
};
export default ExploreComponent;