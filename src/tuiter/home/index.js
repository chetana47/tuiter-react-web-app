import React from "react";
import tuits from './tuits.json';
import HomePosts from "./home-screen";
import HomeTweets from "./home-tweet";

const HomeScreen = () => {
    return(
        <ul className="list-group justify-content-center" style={{width:"fit-content"}}>
            {
                tuits.map(tuit =>
                                   <HomePosts
                                       key={tuit._id} post={tuit}/> )
            }
            <HomeTweets/>
        </ul>
    );
};
export default HomeScreen;