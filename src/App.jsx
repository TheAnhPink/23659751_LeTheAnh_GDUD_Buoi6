import { Link, Routes, Route } from "react-router-dom"
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import ThemeBox from "./components/ThemeBox"
import ThemeButton from "./components/ThemeButton"
import Header from "./components/Header"
import Login from "./components/Login"
import Logout from "./components/Logout"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Demo from "./components/Demo"
import NotificationToast from "./components/NotificationToast"

function App() {
  return (
    <div>
      <nav>
        <Link to="/bai1">Bài 1</Link> | 
        <Link to="/bai2">Bài 2</Link> | 
        <Link to="/bai3">Bài 3</Link> |
        <Link to="/bai4">Bài 4</Link> |
        <Link to="/bai5">Bài 5</Link> |
        <Link to="/bai6">Bài 6</Link> |

      </nav>

      <Routes>
        <Route path="/bai1" element={<><ComponentA /><ComponentB /></>} />

        <Route path="/bai2" element={<ThemeBox><h1>Theme Toggle</h1><ThemeButton /></ThemeBox>} />

        <Route path="/bai3" element={<><Header /><Login /><Logout /></>} />
        <Route path="/bai4" element={<><TodoInput /><TodoList /></>} />
        <Route path="/bai5" element={<><ProductList /><Cart /></>} />
        <Route path="/bai6" element={<><NotificationToast /> <Demo /></>} />

        

        
      
      </Routes>
    </div>
  )
}

export default App;