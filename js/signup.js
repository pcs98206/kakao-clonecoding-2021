const enterBtn = document.querySelector(".enterBtn");
const inputId = document.getElementsByName("username");
const inputPw = document.getElementsByName("password");
const User_CN = "currnetAccount"; 

function saveIdAndPw(account){
  localStorage.setItem(User_CN, JSON.stringify(account));
  alert("Sign up complete");
}

function clickBtn(){
  const inputIdValue = inputId[0].value;
  const inputPwValue = inputPw[0].value;
  const account = {
    id : `${inputIdValue}`,
    pw : `${inputPwValue}`
  }
  saveIdAndPw(account);
}

enterBtn.addEventListener("click", clickBtn);