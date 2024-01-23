const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content")[0];
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls .control");

sectBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const id = btn.getAttribute("data-id");

    // Toggle active button
    sectBtns.forEach((button) => {
      button.classList.remove("active-btn");
    });
    btn.classList.add("active-btn");

    // Show the selected section
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("active");
    }
  });
});
