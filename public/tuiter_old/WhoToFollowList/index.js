
// import whotofollow from "./WhoToFollowListItem.js";
// $('#wd-explore').append(`
//    <div class="container">
//        <h1>Todo example using todos.js</h1>
//        ${whotofollow({avatarIcon: '../../images/virgingalactic.png',
// userName: 'Virgin Galactic',
// handle: '@virgingalactic'})}
//    </div>
// `);


import WhotoFollow from "./WhoToFollowListItem.js";
import list from "./who.js"
const WhoToFollowList = () => {
    return (`
            <div style="background-color: #222;" >
   <h6 style="font-weight: bold; padding: 20px; margin-bottom: 0px;">Who to follow</h6>
   </div>
           <ul class="list-group">
           ${
        list.map(account => {return WhotoFollow(account)}).join('')
    }
           </ul>
`); }

$('#wd-explore').append(`
   <div class="container">
       ${WhoToFollowList()}
   </div>
`);

export default WhoToFollowList;

