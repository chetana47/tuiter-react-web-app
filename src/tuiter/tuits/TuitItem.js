// import tuits from "./tuitdata.json"
import React from "react";
import TuitsList from "./TuitsList";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";

const TuitItem = () => {

    useEffect(() => {
        const getData = async () => {
                const response = await axios.get(
                    `https://tuiter-node-server-app-0u7b.onrender.com/api/tuits`
                );
            console.log(response.data[0].topic);
        };
        getData()
    }, []);

    const tuits = useSelector(
        (state) => state.tuits);

    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                              <TuitsList
                                  key={tuit._id}
                                  tuit={tuit}/>
                )
            }
        </ul>
    )
}
export default TuitItem;