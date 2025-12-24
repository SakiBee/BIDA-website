async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Could not load ${file}`);
    const html = await response.text();
    const element = document.getElementById(id);
    if (element) element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

async function initApp() {
  await Promise.all([
    loadComponent("navbar-placeholder", "components/navbar.html"),
    loadComponent("hero-placeholder", "components/hero.html"),
    loadComponent("analytics-placeholder", "components/analytics.html"),
    loadComponent("featured-placeholder", "components/featured.html"),
    loadComponent("news-placeholder", "components/news.html"),
    loadComponent("footer-placeholder", "components/footer.html"),
  ]);

  console.log("HTML Loaded");

  await loadScript("js/navigation.js");
  await loadScript("js/header-slider.js");
  await loadScript("js/header.js");
  await loadScript("js/featured.js");
  await loadScript("js/main.js");

  if (typeof initStickyNavbar === "function") {
    initStickyNavbar();
  }
}

document.addEventListener("DOMContentLoaded", initApp);
