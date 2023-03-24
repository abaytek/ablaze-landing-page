/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

const closeBtn = document.querySelectorAll(".close__btn");
const menus = document.querySelectorAll(".navlinks li a");
const btns = document.querySelectorAll(".btn");
const about = document.getElementById("about");
const specialities = document.getElementById("specialities");

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
