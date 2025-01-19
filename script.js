document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navMain = document.querySelector(".nav-main");
  const navSidebar = document.querySelector(".nav-sidebar");

  const searchContainer = document.querySelector(".search-container");

  const searchButton = document.getElementById("searchButton");
  const closeButton = document.getElementById("closeButton");

  const toggleSearchBar = () => {
    searchContainer.style.display = "none";
    searchButton.style.display = "flex";
    closeButton.style.display = "none";
  };

  // Helper function to toggle sidebar
  const toggleSidebar = (action) => {
    if (action === "open") {
      navSidebar.classList.add("active");
      navMain.style.display = "none";
      toggleSearchBar();
    } else {
      navSidebar.classList.remove("active");
      navMain.style.display = "flex";
    }
  };

  // Toggle Sidebar
  menuIcon.addEventListener("click", () => toggleSidebar("open"));

  // Close Sidebar
  closeIcon.addEventListener("click", () => toggleSidebar("close"));

  // Close sidebar if click is outside of the sidebar or menu icon
  document.body.addEventListener("click", (event) => {
    if (
      !navSidebar.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      toggleSidebar("close");
    }
  });

  // Automatically close sidebar when resizing to larger screen
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      toggleSidebar("close");
    }
  });
});
