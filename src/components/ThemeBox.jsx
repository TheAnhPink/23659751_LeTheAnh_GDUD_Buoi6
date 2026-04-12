import { useRecoilValue } from "recoil"
import { themeState } from "../themeState" 

function ThemeBox({ children }) {
  const theme = useRecoilValue(themeState)

  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      {children}
    </div>
  )
}

export default ThemeBox