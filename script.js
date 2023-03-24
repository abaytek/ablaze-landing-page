/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

const closeBtn = document.querySelectorAll(".close__btn");
const menus = document.querySelectorAll(".navlinks li a");

let menuItems = ["about", "specialities", "services", "contacts"];

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
