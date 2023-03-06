import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeScreen from "./home";
import {Route, Routes} from "react-router";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            {/*<div className="col-10 col-md-10 col-lg-7 col-xl-6"*/}
            {/*     style={{"position": "relative"}}>*/}
            {/*    <ExploreComponent/>*/}
            {/*</div>*/}
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <WhoToFollowList/>*/}
            {/*</div>*/}
             <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                    style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"  element={<HomeScreen/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
             </div>
        </div>
    );
}

export default Tuiter;

