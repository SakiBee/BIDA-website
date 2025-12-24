window.handleSubmit = function (btn) {
  btn.innerText = "Submitted";
  btn.classList.add("submitted");
  btn.disabled = true;
};

const yearSpan = document.getElementById("current-year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
