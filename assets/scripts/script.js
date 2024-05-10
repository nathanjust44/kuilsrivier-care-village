document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq .faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.closest(".faq");
      faqItem.classList.toggle("active");
    });
  });
});

function toggleAnswer(faq) {
  faq.classList.toggle("active");
  const arrow = faq.querySelector(".arrow");
  arrow.classList.toggle("rotate-down");
}
