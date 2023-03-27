import React from "react";
import WhatsHappening from "./whats-happening";
import TuitItem from "../tuits/TuitItem";

const HomeScreen = () => {
    return(
        <ul className="list-group justify-content-center" style={{width:"700px"}}>
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitItem/>
        </ul>
    );
};
export default HomeScreen;