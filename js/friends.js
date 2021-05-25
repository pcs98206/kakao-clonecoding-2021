const chennelHeader = document.querySelector(".friends-screen__chennel-header");
const chennelUpAndDownBtn = chennelHeader.querySelector(".upAndDownBtn");
const friendsHeader = document.querySelector(".friends-screen__friends-header");
const friendsUpAndDownBtn = friendsHeader.querySelector(".upAndDownBtn");
const className = document.querySelectorAll(".visible")


function hideListChennel(){
  className[0].classList.toggle("hide");
  chennelUpAndDownBtn.classList.toggle("rotateBtn");
}

function hideListFriends(){
  className[1].classList.toggle("hide");
  friendsUpAndDownBtn.classList.toggle("rotateBtn");
}

friendsUpAndDownBtn.addEventListener("click", hideListFriends);
chennelUpAndDownBtn.addEventListener("click", hideListChennel);