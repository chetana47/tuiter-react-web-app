import PostSummary from "../PostSummaryList/PostSummaryList.js";
import NavSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11" >
                    <div class="form-group has-search input-group" style="align-items: center;">
                         <span class="fa fa-search form-control-feedback" style="z-index: 10; position: absolute; padding-left: 10px; color: black;"></span>
                        <input type="text" class="form-control border-end-0 rounded-pill bg-white" placeholder="Search Twitter" style="border:0;padding-left: 45px";>
                    </div>
                </div>
                <div class="col-1" style="padding-bottom: 15px;" >
                    <a href="explore-settings.html"><i class="fas fa-cog  fa-2x override-bs"></i></a>
                </div>
           </div>
            <ul class="nav nav-tabs" style="margin-top:5px; font-weight: bold">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block d-lg-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="card" style="margin-top:5px">
                <img src="../../images/starship.jpeg"
                     class="card-img-top" alt="...">
                <div class="card-img-overlay d-flex align-items-end">
                    <h4  style=" font-weight: bold; font-size: 30px;">SpaceX's Starship</h4>
                 </div>
            </div>
            <div>
           ${PostSummary()}
           </div>
    `);
}

$('#wd-exp').append(`
<div class="container-fluid">
<div class="row">
   <div class='col-2' style="padding: 20px;">
       ${NavSidebar('explore')}
       </div>
       <div class='col-6' style="padding: 20px;">
       ${ExploreComponent()}  
       </div>
       <div class='col-4' style="padding: 20px;">
       ${WhoToFollowList()}
       </div>
       </div>
       </div>
`);

export default ExploreComponent;