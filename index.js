let dropdowns = document.querySelectorAll(".expand");
let menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".nav-desktop");
let exit = document.querySelector(".exit")

dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener("click", function () {
    let dropdownContent = this.querySelector(".expand-items");

    dropdownContent.classList.toggle("show");
    let arrow = this.querySelector(".arrow");
    arrow.classList.toggle("rotate");
  });
});

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
  exit.classList.toggle("disable")
  menu.classList.toggle("disable")
})

exit.addEventListener("click", () => {
  nav.classList.toggle("show");
  exit.classList.toggle("disable")
  menu.classList.toggle("disable")
})