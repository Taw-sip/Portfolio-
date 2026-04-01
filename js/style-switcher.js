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

// Function to set icon based on current theme
function updateIcon() {
  if (document.body.classList.contains("dark")) {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }
}

dayNight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateIcon();
});

window.addEventListener("load", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  updateIcon();
});
