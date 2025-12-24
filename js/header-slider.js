{
  const container = document.getElementById("cardContainer");

  if (container) {
    const totalCards = 15;

    for (let i = 1; i <= totalCards; i++) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>Project ${i}</h3>
      <p>The Municipal Competitiveness Index (MCI) is Bangladesh’s only index focused on assessing the local business environment at the municipal level.</p>
      <button class="card-btn" onclick="handleSubmit(this)">Submit</button>`;
      container.appendChild(card);
    }

    [...container.children].forEach(card =>
      container.appendChild(card.cloneNode(true))
    );

    let headerAutoSlide;

    window.moveHeaderSlide = function (direction) {
      const cardWidth = container.children[0].offsetWidth + 20;
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "auto" });
      }
      container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
      resetTimer();
    };

    function startTimer() {
      headerAutoSlide = setInterval(() => {
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: "instant" });
        }
        window.moveHeaderSlide(1);
      }, 2500);
    }

    function resetTimer() {
      clearInterval(headerAutoSlide);
      startTimer();
    }

    container.addEventListener("scroll", () => {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 2
      ) {
        container.scrollLeft = 1;
      }
    });

    startTimer();
  }
}
