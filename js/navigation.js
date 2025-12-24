function toggleSearch() {
  const search = document.getElementById("search-page");
  if (search)
    search.style.display = search.style.display === "flex" ? "none" : "flex";
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.toggle("mobile-active");
}
