function initThemeToggle() {
  const menuNav = document.querySelector("nav.menu");
  if (!menuNav) return;

  // Create button
  const button = document.createElement("button");
  button.id = "theme-toggle";
  button.className = "menu-item theme-toggle-btn";
  button.setAttribute("aria-label", "Toggle theme");

  const icon = document.createElement("span");
  icon.className = "theme-icon";
  button.appendChild(icon);

  menuNav.appendChild(button);

  const html = document.documentElement;

  function getCurrentTheme() {
    // Check localStorage FIRST
    const saved = localStorage.getItem("themeMode");
    if (saved) return saved;

    // Then check Hugo-set class
    if (html.classList.contains("theme-light")) return "light";
    if (html.classList.contains("theme-dark")) return "dark";
    return "light";
  }

  function updateIcon(theme) {
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  }

  function applyTheme(theme) {
    html.classList.remove("theme-light", "theme-dark");
    html.classList.add("theme-" + theme);
    updateIcon(theme);
    localStorage.setItem("themeMode", theme);
  }

  // Apply saved preference immediately on load
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);

  button.addEventListener("click", () => {
    const current = getCurrentTheme();
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
  });
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
