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

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formData = {
    name,
    email,
    message
  };

  try {
    const response = await fetch("https://formspree.io/f/xgvyyqpo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Network error. Try again later.");
  }
  
  // Disable button and show loading state
  const button = form.querySelector("button");
button.disabled = true;
button.textContent = "Sending...";
setTimeout(() => {
  button.disabled = false;
  button.textContent = "Send";
}, 2000);

// Show status message
  <p id="status-message"></p>
const status = document.getElementById("status-message");

status.textContent = "✅ Message sent!";
status.style.color = "green";
  setTimeout(() => {
    status.textContent = "";
  }, 3000);
});

// Prevent hash change for contact form
window.addEventListener("hashchange", function () {
  if (location.hash === "#contact") {
    history.replaceState(null, null, location.pathname);
  }
});
