document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const body = document.body;
  const themeToggle = document.querySelectorAll(".theme-toggle");

  // Function to apply theme
  const applyTheme = (newTheme) => {
    try {
      if (newTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggle.setAttribute("data-tooltip", "Light theme");
        themeToggle.setAttribute("aria-label", "Light theme");
      } else {
        body.classList.remove("dark-theme");
        themeToggle.setAttribute("data-tooltip", "Dark theme");
        themeToggle.setAttribute("aria-label", "Dark theme");
      }
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  };

  // Event listener for theme toggle button
  themeToggle.forEach((button => {
    button.addEventListener('click', () => {
      const isDarkMode = body.classList.contains("dark-theme");
      const currentTheme = isDarkMode ? "light" : "dark";
      applyTheme(currentTheme);
    })
  }));

  // Initialize theme for LocalStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});
