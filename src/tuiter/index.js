import React from "react";
import ExploreComponent from "./explore/index";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home";
import {Route, Routes} from "react-router";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer
    from "./reducers/who-reducer";
import profileReducer
    from "./reducers/profile";
import exploreReducer
    from "./reducers/explore";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./ProfileComponent";
import EditProfileComponent from "./EditProfileComponent";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer, explore: exploreReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
        <div className="container-fluid">
        <div className="row mt-2" >
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
             <div className="col-5 col-md-5 col-lg-5 col-xl-6"
                    style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"  element={<HomeScreen/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                </Routes>
             </div>
            <div className="col-2 col-md-2 col-lg-3 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </div>
        </Provider>
    );
}

export default Tuiter;

