let dropdowns = document.querySelectorAll(".expand");

dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener("click", function () {
    let dropdownContent = this.querySelector(".expand-items");

    dropdownContent.classList.toggle("show");
    let arrow = this.querySelector(".arrow");
    arrow.classList.toggle("rotate");
  });
});
