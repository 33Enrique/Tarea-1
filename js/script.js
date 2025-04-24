document.addEventListener("DOMContentLoaded", function () {
    const toggleSections = document.querySelectorAll(".toggle-section");
  
    toggleSections.forEach(section => {
      const header = section.querySelector(".toggle-header");
  
      header.addEventListener("click", () => {
        section.classList.toggle("active");
      });
    });
  });
  