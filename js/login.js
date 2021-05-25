const loginBtn = document.querySelector(".loginBtn");
const inputId = document.getElementsByName("username");
const inputPw = document.getElementsByName("password");
const User_CN = "currnetAccount"; 

function moveNextPage(){
  window.location.href = "friends.html"
}

function refrashPage(){
  window.location.href = "index.html"
}

function clickBtn(){
  try{
    const currentAccount = localStorage.getItem(User_CN);
    const inputIdValue = inputId[0].value;
    const inputPwValue = inputPw[0].value;
    const currentAccountId = JSON.parse(currentAccount).id;
    const currentAccountPw = JSON.parse(currentAccount).pw;

    if ((inputIdValue === currentAccountId)&&(inputPwValue === currentAccountPw)){
      moveNextPage();
    }

    else{
      alert("You are not Central Perk Member. Check again.")
      refrashPage();
    }
  } catch(error){
    alert("You are not Central Perk Member. Please Sign up.");
    refrashPage();
  } 
}

loginBtn.addEventListener("click", clickBtn);
