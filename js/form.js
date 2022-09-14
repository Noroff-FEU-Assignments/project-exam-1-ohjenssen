const nameTxt = document.querySelector(".name");
const emailTxt = document.querySelector(".email");
const subjectTxt = document.querySelector(".subject");
const messageTxt = document.querySelector(".message");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const form = document.querySelector(".contactForm");
const submitBtn = document.querySelector("#submitBTN");


const checkLength = (value, reqLength) => {
    if (value.trim().length > reqLength){
        return true;
    } else {
        return false;
    }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validateForm(event){
    event.preventDefault();

    if (!checkLength(nameInput.value, 5)){
        nameTxt.style.color = "#830101";
    } else {
        nameTxt.style.color = "white";
    }

    if (!checkLength(subjectInput.value, 15)){
        subjectTxt.style.color = "#830101";
    } else {
        subjectTxt.style.color = "white";
    }

    if (!checkLength(messageInput.value, 25)){
        messageTxt.style.color = "#830101";
    } else {
        messageTxt.style.color = "white";
    }

    if(!validateEmail(emailInput.value)){
        emailTxt.style.color = "#830101";
    } else {
        emailTxt.style.color = "white";
    }
}

submitBtn.addEventListener("click", validateForm);