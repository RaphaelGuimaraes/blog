import { themes } from '../styles/themes';

export const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#fff"
  if (theme === "dark") return "#16202c"
}

export const getCategoryBg = (category) => {
  return themes.categories[category];
}

