/* ==================== toggle style switcher ==================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (
    styleSwitcher.classList.contains("open") &&
    !styleSwitcher.contains(e.target) &&
    !styleSwitcherToggle.contains(e.target)
  ) {
    styleSwitcher.classList.remove("open");
  }
});

/* ==================== Theme Colors ==================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* ==================== Theme Colors ==================== */
const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");

function updateIcon() {
  icon.className = document.body.classList.contains("dark") ? "fa fa-sun" : "fa fa-moon";
}

dayNight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateIcon();
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
  updateIcon();
});
