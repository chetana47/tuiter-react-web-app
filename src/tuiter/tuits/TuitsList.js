import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitsList = ({tuit}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} alt={"avatarIcon"} src={`../images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <span className="m-lg-2 text-black fw-bold">{tuit.userName} </span> <i className="fas fa-check-circle fa-check-circle-override " style={{color:"blue"}}/> <span className="text-secondary">{tuit.handle}</span><span className="text-secondary"> . {tuit.time}</span>
                    <div className="image-body">
                        <div className=" m-lg-2 image-text">
                            <span className="">{tuit.tuit}</span>
                        </div>
                    </div>
                    <TuitStats key={tuit._id} tuits={tuit}/>
                </div>
                <div className="col-auto">
                    <i className="bi bi-x-lg float-end"
                       style={{cursor: "pointer"}}
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
            </div>
        </li>
    );
};
export default TuitsList;