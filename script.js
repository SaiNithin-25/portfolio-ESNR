const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

function setTheme(mode) {
  if (mode === "dark") {
    htmlEl.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlEl.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

// Load saved or system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

// Toggle on button click
themeToggle.addEventListener("click", () => {
  const isDark = htmlEl.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});
