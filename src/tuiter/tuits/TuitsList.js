import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit, handleLike} from "./tuits-reducer";


const TuitsList = (
    {
        tuit  = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const handleLikes = () => {
        dispatch(handleLike(tuit._id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} alt={"avatarIcon"} src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <span className="m-lg-2 text-black fw-bold">{tuit.userName} </span> <i className="fas fa-check-circle fa-check-circle-override " style={{color:"blue"}}/> <span className="text-secondary">{tuit.handle}</span><span className="text-secondary"> . {tuit.time}</span>
                    <div className="image-body">

                        <div className=" m-lg-2 image-text">
                            <span className="">{tuit.tuit}</span>
                        </div>
                    </div>
                    <TuitStats
                        handleLike={handleLikes}
                        liked={tuit.liked}
                        replies={tuit.replies}
                        retuits={tuit.retuits}
                        likes={tuit.likes} />
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