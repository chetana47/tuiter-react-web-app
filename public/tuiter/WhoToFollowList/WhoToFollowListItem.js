function WhotoFollow(list) {
    return (`
     <li class="list-group-item list-group-item-action">
                            <div class="row">
                                <div class="col-2 icon">
                                    <img src=${list.avatarIcon} class="rounded-circle" alt="Cinque Terre" width="40" height="40">
                                </div>
                                <div class="col-6 info" style="font-weight: bold">
                                    <text class="text-white">${list.userName} &nbsp;</text><i class="fas fa-check-circle text-primary"></i>
                                    <br>
                                    <text class="text-secondary">${list.handle}</text>
                                </div>
                                <div class="col-4 button">
                                    <button type="button" class="btn btn-primary btn-block rounded-pill mt-2" style="width:100%;">Follow</button>
                               </div>
                           </div>
                       </li>`
    );
}

export default WhotoFollow;