import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href={"/#"} className="list-group-item">
                <i className="fa-brands fa-twitter wd-black-color"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="fas fa-home"></i> &nbsp;
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fas fa-hashtag"></i> &nbsp;
                Explore
            </Link>
            <a href={"/#"} className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                <i className="fas fa-bell"></i> &nbsp;
                Notifications
            </a>
            <a href={"/#"} className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                <i className="fas fa-envelope"></i> &nbsp;
                Messages
            </a>
            <a href={"/#"} className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="fas fa-bookmark"></i> &nbsp;
                Bookmarks
            </a>
            <a href={"/#"} className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                <i className="fas fa-list-ul"></i> &nbsp;
                Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="fas fa-user"></i> &nbsp;
                Profile
            </Link>

            <a href={"/#"} className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <i className="fas fa-ellipsis-h"></i> &nbsp;
                More
            </a>
        </div>
    );

};
export default NavigationSidebar;