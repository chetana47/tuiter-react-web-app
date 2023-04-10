
import React from "react";
import TuitsList from "./TuitsList";
import {useSelector} from "react-redux";

const TuitItem = () => {

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