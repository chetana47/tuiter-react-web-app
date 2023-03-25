import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa2.png' }

    }
) => {
    return(
        <li className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-2 icon">
                    <img src={`/images/${who.avatarIcon}`} className="rounded-circle" alt="Cinque Terre" width={40} height={40}/>
                </div>
                <div className="col-5">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-5 button">
                    <button type="button" className="btn btn-primary btn-block rounded-pill mt-2" style={{width:"70%", float:"right"}}>Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;