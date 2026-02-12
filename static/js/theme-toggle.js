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
    return "auto";
  }

  function updateIcon(theme) {
    if (theme === "light") {
      icon.className = "icofont-sun";
      icon.setAttribute("aria-label", "Light theme");
    } else if (theme === "dark") {
      icon.className = "icofont-night";
      icon.setAttribute("aria-label", "Dark theme");
    } else {
      icon.className = "icofont-eclipse";
      icon.setAttribute("aria-label", "Auto theme");
    }
  }

  function applyTheme(theme) {
    html.classList.remove("theme-light", "theme-dark");
    html.classList.add("theme-" + theme);   // Yes, "theme-auto" has no matching CSS rule

    updateIcon(theme);

    localStorage.setItem("themeMode", theme);
  }

  // Apply saved preference immediately on load
  const currentTheme = getCurrentTheme();
  applyTheme(currentTheme);

  button.addEventListener("click", () => {
    const themes = [ "auto", "light", "dark" ];

    const current = getCurrentTheme();
    const current_idx = themes.indexOf(current);
    const next_idx = (current_idx + 1) % themes.length;
    const next = themes[next_idx];

    applyTheme(next);
  });
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
