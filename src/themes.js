export const themes = [
  {
    name: "Default",
    class: "theme-default",
  },
  {
    name: "Solarized Dark",
    class: "theme-solarized-dark",
  },
  {
    name: "Solarized Light",
    class: "theme-solarized-light",
  },
];

export const saveTheme = (theme) => {
  localStorage["theme"] = theme["class"];
  setTheme(theme);
};

export const loadTheme = () => {
  const themeClass = localStorage["theme"];
  if (!themeClass) return;
  const theme = themes.find((theme) => theme["class"] === themeClass);
  if (!theme) return;
  setTheme(theme);
};

export const setTheme = (theme) => {
  for (const item of document.body.classList) {
    if (item.match(/theme-.*/)) {
      document.body.classList.remove(item);
    }
  }
  document.body.classList.add(theme["class"]);
};
