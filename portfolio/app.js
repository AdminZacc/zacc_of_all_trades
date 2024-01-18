const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");
const element = document.querySelectorAll(".element");

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");

      //Check if currentBtn is defined before accessing its properties
      if (currentBtn[0]) {
        currentBtn[0].className = currentBtn[0].className.replace(
          "active-btn",
          ""
        );
      }

      sectBtn[i].classList.add("active-btn");
    });
  }

  // Sections active class
  for (let i = 0; i < sectBtns.length; i++) {
    sectBtns[i].addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      if (id) {
        // Remove selected from other buttons
        sectBtns.forEach((btn) => {
          btn.classList.remove("active");
        });

        e.target.classList.add("active");

        // Hide other sections
        sections.forEach((section) => {
          section.classList.remove("active");
        });

        const element = document.getElementById(id);

        // Check if the element with the given ID exists
        if (element) {
          element.classList.add("active");
        }
      }
    });
  }
}
PageTransitions();
