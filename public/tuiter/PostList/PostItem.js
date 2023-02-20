function PostItem(post) {
    return (`
            <li class="list-group-item list-group-item-action" style="background-color: black">
                 <div class="wd-main-body" style="border: none;">
      <div class=" wd-avatar-div">
        <img src="${post.imagepath}" alt="Avatar" class="wd-avatar-img">
      </div>
      <div class="wd-main-body-text-div">
        <div class="wd-text-color wd-main-body-text">
          <text >${post.userName}</text></text> <i class="fas fa-check-circle text-primary" style=" font-size: 14px;"></i> <text class="wd-gray-handle" style="color: lightgrey;">&nbsp;${post.handle}</text><text class="wd-gray-handle">&nbsp; . &nbsp;${post.time} </text>
          <br>
          <text class="wd-text-color" style="font-size:15px;">${post.description}</text>
        </div>
        </text>
        <br>
        <div class="wd-image-body">
          <img  class="wd-lorem-img" src=${post.tweetimage}>
        <br>
          <div class="wd-image-text">
        <text class="wd-text-color" style="font-size:15px">${post.imagetitle}</text>
        <br>
        <text class="wd-text-color" style = "font-size:15px; color:lightgray">${post.imagedescription}
        </text>
          </div>
        </div>
        <div class="wd-icons" >
          <div class="wd-icon-style" >
            <a href="#"> <i class="fas fa-comment wd-gray-handle"></i></a>
            <span style="color: lightgray; font-size:15px; padding-right: 12px">&nbsp; ${post.nooftweets}</span>
          </div>
          <div class="wd-icon-style">
            <a href="#"><i class="fas fa-retweet wd-gray-handle "></i></a>
            <span style="color: lightgray; font-size:15px; padding-right: 12px">&nbsp; ${post.retweets}</span>
          </div>
          <div class="wd-icon-style">
            <a href="#"><i class="fas fa-heart" style = "color:red"></i></a>
            <span style="color: red; font-size:15px; padding-right: 12px">&nbsp; ${post.likes}</span>
          </div>
          <div class="wd-icon-style">
            <a href="#"><i class="fas fa-upload wd-gray-handle"></i></a>
          </div>
        </div>
      </div>
    </div>
   </li>
    `);
}

export default PostItem;