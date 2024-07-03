import { useTheme, useSetTheme } from "../contexts/ThemeContext";

const Theme = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const handleClick = () => {
    setTheme(theme === "day" ? "nigth" : "day");
  };

  return <span onClick={handleClick}>{theme === "day" ? "🌝" : "🌞"}</span>;
};

export default Theme;
