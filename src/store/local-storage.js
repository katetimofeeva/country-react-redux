export const loadState = () => {
  try {
    const themeState = localStorage.getItem("theme");
    if (themeState === null) {
      return undefined;
    }
    return JSON.parse(themeState);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
export const saveState = (theme) => {
  try {
    const themeToBeSave = JSON.stringify(theme);
    localStorage.setItem("theme", themeToBeSave);
  } catch (err) {
    console.error(err);
  }
};
