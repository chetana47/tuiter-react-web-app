const NavSidebar = (status)  => {
    return (`
   <div class="list-group mainNav">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
          <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${status === "home" ? 'active' : ''} " style="padding: 20px;">
                            <i class="fas fa-home"></i>
                            Home</a>
                        <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${status === "explore" ? 'active' : ''}" style="padding: 20px;">
                            <i class="fas fa-hashtag"></i>
                            Explore</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action" style="padding: 20px;">
                            <i class="fas fa-bell"></i>
                            Notifications</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action" style="padding: 20px;">
                            <i class="fas fa-envelope"></i>
                            Messages</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action" style="padding: 20px;">
                            <i class="fas fa-bookmark"></i>
                            Bookmarks</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action" style="padding: 20px;">
                            <i class="fas fa-list-ul"></i>
                            Lists</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action" style="padding: 20px;">
                            <i class="fas fa-user"></i>
                            Profile</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action" style="padding: 20px;">
                            <i class="fas fa-ellipsis-h"></i>
                            &nbsp;More</a><br>                
   </div>
   
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
function exploreComptest(){
    $('#wd-explore').append(`
    <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
          <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action">
                            <i class="fas fa-home"></i>
                            Home</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action active">
                            <i class="fas fa-hashtag"></i>
                            Explore</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action">
                            <i class="fas fa-bell"></i>
                            Notifications</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action">
                            <i class="fas fa-envelope"></i>
                            Messages</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action">
                            <i class="fas fa-bookmark"></i>
                            Bookmarks</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action">
                            <i class="fas fa-list-ul"></i>
                            Lists</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action">
                            <i class="fas fa-user"></i>
                            Profile</a>
                        <a href="https://en.wikipedia.org/wiki/Saturn" class="list-group-item list-group-item-action">
                            <i class="fas fa-ellipsis-h"></i>
                            &nbsp;More</a><br>                
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
    `);
}




$(exploreComptest);


export default NavSidebar;
