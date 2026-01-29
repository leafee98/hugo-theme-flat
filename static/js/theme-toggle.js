function initThemeToggle() {
  const html = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const icon = button.querySelector(".theme-icon");

  // Get saved preference or current theme
  function getCurrentTheme() {
    const saved = localStorage.getItem("themeMode");
    if (saved) return saved;

    // Check current class (set by Hugo)
    if (html.classList.contains("theme-light")) return "light";
    if (html.classList.contains("theme-dark")) return "dark";
    return "light"; // fallback
  }

  // Apply theme and update icon
  function applyTheme(theme) {
    html.classList.remove("theme-light", "theme-dark");
    html.classList.add("theme-" + theme);

    updateIcon(theme);
    localStorage.setItem("themeMode", theme);
  }

  // Update icon to match current theme
  function updateIcon(theme) {
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  }

  // Toggle: light ↔ dark
  button.addEventListener("click", () => {
    const current = getCurrentTheme();
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
  });

  // Set initial icon
  updateIcon(getCurrentTheme());
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
