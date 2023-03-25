import React from "react";
import ExploreComponent from "./explore/index";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home";
import {Route, Routes} from "react-router";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div className="container-fluid">
        <div className="row mt-2" >
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
             <div className="col-6 col-md-6 col-lg-6 col-xl-6"
                    style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"  element={<HomeScreen/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
             </div>
            <div className="col-3">
                <WhoToFollowList/>
            </div>
        </div>
        </div>
    );
}

export default Tuiter;

