function PostSummaryItem(post) {
    return (`
            <li class="list-group-item list-group-item-action">
                <div  style="padding: 10px; border: none;">
                <div class="row">
                    <div class="col-9 " style="padding-left: 25px; padding-top: 5px;">
                    <div style="width: 100%">
                        <text class="text-secondary" style="font-size: 13px;">${post.topic}</text>
                        </div>
                        <div style="width: 100%">
                        <text class="font-weight-bold fw-bold">${post.userName}</text> <i class="fas fa-check-circle text-primary" style=" font-size: 14px;"></i> <text class="text-secondary"> &nbsp;- ${post.time}</text>
                        </div>
                        <div style="width: 100%">
                        <text class="font-weight-bold fw-bold" style="font-size: 13px;">${post.title}</text>
                        </div>
                        <text class="text-secondary">${post.tweets}</text>
                    </div>
                    <div class="col-3">
                        <img class="img-fluid" style="width: 120px; height:120px; padding: 10px; border-radius: 20%;" alt="ReactJS" src=${post.image}>
                    </div>
                </div>
            </div>
            </li>
    `);
}

export default PostSummaryItem;