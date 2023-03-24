/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

const closeBtn = document.querySelectorAll(".close__btn");
const menus = document.querySelectorAll(".navlinks li a");
const btns = document.querySelectorAll(".btn");
const about = document.getElementById("about");
const specialities = document.getElementById("specialities");
let responseMessage = document.querySelector(".response");
let form = document.querySelector(".form__container");

let menuItems = ["about", "specialities", "services", "contacts"];
let buttonsText = ["Who we are", "What We Do"];

// get the clicked item name
menus.forEach((btn) => {
  btn.addEventListener("click", (e) =>
    getMatch(e.currentTarget.textContent.toLowerCase())
  );
});

function getMatch(value) {
  menuItems.map((menu) => {
    if (menu === value) {
      document.getElementById(value).style.transform = `translateY(0vh)`;
    }
  });
}

// CLOSE BUTTON
closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.style.transform = `translateY(-100vh)`;
  });
});

// WHAT WE ARE AND WHAT WE DO BUTTONS
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == buttonsText[0]) {
      services.style.transform = `translateY(0)`;
    } else if (btn.textContent == buttonsText[1]) {
      specialities.style.transform = `translateY(0)`;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.forms["form"]["fullname"].value;
  const email = document.forms["form"]["email"].value;
  const phone = document.forms["form"]["phone"].value;
  const message = document.forms["form"]["message"].value;

  if (fullName == "") {
    responseMessage.textContent = "Name Must not Be empty";
  } else if (email == "") {
    responseMessage.textContent = "Email Must not Be empty";
  } else if (phone == "") {
    responseMessage.textContent = "Phone Must not Be empty";
  } else if (message == "") {
    responseMessage.textContent = "Message Must not Be empty";
  }

  // functions individual Inputs
  // const isPasswordSecure = (password) => {
  //   const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  //   return re.test(password);
  // };
  const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;
  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // validate individual Inputs
  if (!isEmailValid(email)) {
    responseMessage.textContent = "Invalid Email";
  } else if (!isBetween(fullName.length, 5, 10)) {
    responseMessage.textContent = "Name must be 5 to 10 characters long";
  }

  // Fetch Request to the email server
  responseMessage.textContent = "Message Sent Succesfully";
  responseMessage.style.color = "white";
});
