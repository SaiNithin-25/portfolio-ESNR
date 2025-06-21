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

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // stop the form from submitting normally

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const button = this.querySelector("button");

  button.disabled = true;
  button.textContent = "Sending...";

  try {
    const response = await fetch("https://formspree.io/f/xgvyyqpo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      this.reset();
    } else {
      alert("❌ Something went wrong.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Network error. Try again later.");
  }

  setTimeout(() => {
    button.disabled = false;
    button.textContent = "Send";
  }, 2000);
});


// Prevent hash change for contact form
window.addEventListener("hashchange", function () {
  if (location.hash === "#contact") {
    history.replaceState(null, null, location.pathname);
  }
});

// Smooth scroll for internal links
AOS.init({
  duration: 800,      // animation duration (ms)
  offset: 120,        // how far from top to trigger animation
  once: false,         // animate only once (not every scroll)
});
