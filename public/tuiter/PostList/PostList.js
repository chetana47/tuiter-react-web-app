import PostItem from "./PostItem.js";
import exploreItems from "./posts.js";
import NavSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
const BookmarksPost = () => {
    return (`
           <ul class="list-group">
           ${
        exploreItems.map(post => {return PostItem(post)}).join('')
    }
           </ul>
`); }

$('#wd-post').append(`
       ${BookmarksPost()}  
`);

export default BookmarksPost;