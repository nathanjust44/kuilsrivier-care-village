document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq .faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.closest(".faq");
      toggleAnswer(faqItem);
    });
  });

  // Hamburger Menu Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show"); // Toggles the 'show' class to display/hide menu

      // Manage icons inside the toggle button (optional)
      const closeIcon = navToggle.querySelector(".close-icon");
      const toggleIcon = navToggle.querySelector(".toggle-icon");
      if (closeIcon && toggleIcon) {
        closeIcon.style.display = navMenu.classList.contains("show")
          ? "block"
          : "none";
        toggleIcon.style.display = navMenu.classList.contains("show")
          ? "none"
          : "block";
      }
    });
  }
});

// Toggle answer function for FAQs
function toggleAnswer(faq) {
  faq.classList.toggle("active"); // Toggle the active state for the FAQ item
  const arrow = faq.querySelector(".arrow");
  if (arrow) {
    arrow.classList.toggle("rotate-down"); // Rotate the arrow icon if it exists
  }
}

// Select the toggle button and menu
const toggleButton = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

// Add click event listener for navigation menu toggle
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open"); // Toggles the open class to show or hide the menu
  });
}
