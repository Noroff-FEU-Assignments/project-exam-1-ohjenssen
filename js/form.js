const formUrl = "https://smarterfitness.oskarjenssen.com/wp-json/contact-form-7/v1/contact-forms/94/feedback";

const nameTxt = document.querySelector(".name");
const emailTxt = document.querySelector(".email");
const subjectTxt = document.querySelector(".subject");
const messageTxt = document.querySelector(".message");

const nameInput = document.getElementById("your-name");
const emailInput = document.getElementById("your-email");
const subjectInput = document.getElementById("your-subject");
const messageInput = document.getElementById("your-message");

const main = document.querySelector("main");
const form = document.querySelector(".contactForm");
const submitBtn = document.querySelector("#submitBTN");

const checkLength = (value, reqLength) => {
    if (value.replace(/\s/g, '').length > reqLength){ // The regex trims away all the spaces, not just on the sides
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


  const sendForm = async () => { // Sends values from the form to contact form 7 endpoint
    try {
        let response = await fetch(formUrl, {
            method: 'POST',
            body: new FormData(form),
        });
        const result = await response.json();
        console.log(result)

    } catch {
        console.log("nope")
    }
};

function validateForm(event){
    event.preventDefault();

    if (!checkLength(nameInput.value, 5)){
        nameTxt.style.color = "#830101";
    } else {
        nameTxt.style.color = "#0AFF00";
    }

    if (!checkLength(subjectInput.value, 15)){
        subjectTxt.style.color = "#830101";
    } else {
        subjectTxt.style.color = "#0AFF00";
    }

    if (!checkLength(messageInput.value, 25)){
        messageTxt.style.color = "#830101";
    } else {
        messageTxt.style.color = "#0AFF00";
    }

    if(!validateEmail(emailInput.value)){
        emailTxt.style.color = "#830101";
    } else {
        emailTxt.style.color = "#0AFF00";
    }

    if(validateEmail(emailInput.value) && checkLength(messageInput.value, 25) && checkLength(subjectInput.value, 15) && checkLength(nameInput.value, 5)){
        submitBtn.innerHTML = `Message sent!`
        submitBtn.style.backgroundColor = "#0AFF00"
        submitBtn.disabled = true;
        sendForm();
        
    } else {
        submitBtn.innerHTML = `Submit`;
        submitBtn.style.backgroundColor = "#D1AA48";
    }

}

submitBtn.addEventListener("click", validateForm);

function validateName(){
    if ((!checkLength(nameInput.value, 5))){
        nameTxt.style.color = "white";
    } else {
        nameTxt.style.color = "#0AFF00";
    }
}

function validateSubject(){
    if (!checkLength(subjectInput.value, 15)){
            subjectTxt.style.color = "white";
        } else {
            subjectTxt.style.color = "#0AFF00";
        }
}

function validateMessage(){
    if (!checkLength(messageInput.value, 25)){
            messageTxt.style.color = "white";
        } else {
            messageTxt.style.color = "#0AFF00";
        }
}

function checkingEmail(){
    if (!validateEmail(emailInput.value)){
        emailTxt.style.color = "white";
    } else {
        emailTxt.style.color = "#0AFF00";
    }
}

nameInput.addEventListener("keyup", validateName);
subjectInput.addEventListener("keyup", validateSubject);
messageInput.addEventListener("keyup", validateMessage);
emailInput.addEventListener("keyup", checkingEmail);