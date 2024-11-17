document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq .faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.closest(".faq");
      toggleAnswer(faqItem);
    });
  });

  // Hamburger Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show'); // Toggles the 'show' class to display/hide menu
      
      // Manage icons inside the toggle button (optional)
      const closeIcon = navToggle.querySelector('.close-icon');
      const toggleIcon = navToggle.querySelector('.toggle-icon');
      if (closeIcon && toggleIcon) {
        closeIcon.style.display = navMenu.classList.contains('show') ? 'block' : 'none';
        toggleIcon.style.display = navMenu.classList.contains('show') ? 'none' : 'block';
      }
    });
  }
  
  // Slideshow functionality
  let slideIndex = 0;
  showSlides(); // Initial call to show slides

  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1; // Reset to first slide
    } 
    
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 100000); // Change slide every 3 seconds
  }

  // Functions to control slideshow navigation
  window.plusSlides = function(n) { // Expose plusSlides to the global scope
    slideIndex += n;
    const slides = document.getElementsByClassName("mySlides");
    
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Hide all slides
    }
    
    slides[slideIndex - 1].style.display = "block"; // Show current slide
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
const toggleButton = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

// Add click event listener for navigation menu toggle
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('open'); // Toggles the open class to show or hide the menu
  });
}


