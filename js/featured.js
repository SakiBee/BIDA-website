{
  const fSlider = document.getElementById("featuredSlider");
  const dotsContainer = document.getElementById("dotsContainer");
  let fIndex = 0;
  let fInterval;

  if (fSlider && dotsContainer) {
    const fCards = fSlider.querySelectorAll(".featured-card");

    fCards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = `dot ${i === 0 ? "active" : ""}`;
      dot.onclick = () => goToFeaturedSlide(i);
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function goToFeaturedSlide(index) {
      fIndex = index;
      const width = fSlider.clientWidth;
      fSlider.scrollTo({ left: width * fIndex, behavior: "smooth" });

      dots.forEach((dot, i) => dot.classList.toggle("active", i === fIndex));
    }

    window.moveFeatured = function (dir) {
      fIndex += dir;
      if (fIndex >= fCards.length) fIndex = 0;
      if (fIndex < 0) fIndex = fCards.length - 1;
      goToFeaturedSlide(fIndex);

      clearInterval(fInterval);
      fInterval = setInterval(() => window.moveFeatured(1), 5000);
    };

    fInterval = setInterval(() => window.moveFeatured(1), 5000);
    window.addEventListener("resize", () => goToFeaturedSlide(fIndex));
  }
}
