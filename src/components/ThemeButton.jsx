import { useRecoilState } from "recoil"
import { themeState } from "../themeState"

function ThemeButton() {
  const [theme, setTheme] =useRecoilState(themeState)

  const toggle = () => {
    setTheme(theme === "light" ? "dark":"light")
  };

  return <button onClick={toggle}>Toggle Theme</button>
}

export default ThemeButton