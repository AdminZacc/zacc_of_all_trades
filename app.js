const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content")[0];
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls .control");

sectBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("Button clicked"); // Check if the button click event is triggered
    const id = btn.getAttribute("data-id");
    console.log("ID:", id); // Check the retrieved ID

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
    console.log("Element:", element); // Check if the correct element is selected
    if (element) {
      element.classList.add("active");
    }
  });
});
