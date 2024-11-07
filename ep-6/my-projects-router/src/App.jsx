import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import User from "./pages/user"
import About from "./pages/about"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Error from "./pages/Error"
import Users from "./pages/Users"

function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User  />} />
      <Route path="/users/username" element={<Users  />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
