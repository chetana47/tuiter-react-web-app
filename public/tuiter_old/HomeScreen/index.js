
import NavSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import BookmarksPost from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

$('#wd-home').append(`
<div class="container-fluid">
   <div class="row">
        <div class='col-2' style="padding: 20px;">
       ${NavSidebar('home')}
       </div>
       <div class='col-6' style="padding: 20px;">
       <div style="padding-left: 20px;">
      <h5>Home</h5> 
       </div>
       <div>
       ${BookmarksPost()}  
       </div>
       </div>
       <div class='col-4' style="padding: 20px; padding-right: 30px; ">
       ${PostSummaryList()}
       </div>
   </div>
   </div>
`);