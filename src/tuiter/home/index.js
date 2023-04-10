import React, {useEffect, useState} from "react";
import WhatsHappening from "./whats-happening";
import TuitItem from "../tuits/TuitItem";
import axios from "axios";

const HomeScreen = () => {
    const [res,setRes] = useState({});
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://tuiter-node-server-app-0u7b.onrender.com/api/tuits`
            );
            setRes(response);
            console.log(response,response.data[0].topic);
        };
        getData().then(r => console.log("Promise Returned"))
    }, []);
    return(
        <ul className="list-group justify-content-center" style={{width:"700px"}}>
            <h3>{res?.data ? res?.data[0]?.topic:""}</h3>
            <WhatsHappening/>
            <TuitItem/>
        </ul>
    );
};
export default HomeScreen;