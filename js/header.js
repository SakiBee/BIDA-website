function initStickyNavbar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.add("is-pinned");
    } else {
      nav.classList.remove("is-pinned");
    }
  });
}
