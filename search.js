// DOM Elements
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const searchContainer = document.querySelector(".search-container");
const navBar = document.querySelector(".nav-main");
const searchButton = document.getElementById("searchButton");
const closeButton = document.getElementById("closeButton");

// Function to position the search bar
function positionSearchBar() {
  const navHeight = navBar.offsetHeight;
  searchContainer.style.top = `${navHeight + 8}px`;
}

// Function to toggle the visibility of search components
function toggleSearchBar(show) {
  searchContainer.style.display = show ? "flex" : "none";
  searchButton.style.display = show ? "none" : "flex";
  closeButton.style.display = show ? "flex" : "none";
  closeButton.classList.toggle("active", show); // Add active state toggle
  if (show) positionSearchBar();
}

// Function to clear the search input
function clearSearch() {
  searchInput.value = "";
  searchInput.placeholder = "Search...";
  clearButton.style.display = "none";
}

// Function to handle search input changes
function updateIcons() {
  clearButton.style.display = searchInput.value.trim() ? "flex" : "none";
}

// Function to handle search actions
function handleSearch(event) {
  if (event.key === "Enter") {
    const query = searchInput.value.trim();
    if (query) startSearch(query);
  }
}

// Function to start a search
function startSearch(query) {
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

// Debounce utility function
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Event Listeners
function addEventListeners() {
  window.addEventListener("resize", positionSearchBar);
  window.addEventListener("pageshow", clearSearch);

  searchButton.addEventListener("click", () => toggleSearchBar(true));
  closeButton.addEventListener("click", () => toggleSearchBar(false));

  searchInput.addEventListener("input", debounce(updateIcons, 300));
  searchInput.addEventListener("keydown", handleSearch);

  clearButton.addEventListener("click", clearSearch);
}

// Initialize the script
function init() {
  positionSearchBar();
  addEventListeners();
}

init();
