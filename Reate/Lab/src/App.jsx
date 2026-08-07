import { Route, Routes } from "react-router-dom"
import Home from "./componest/Home"
import Movie from "./componest/Movie"
import Navbar from "./componest/Navbar"
import Footer from "./componest/Footer"

function App() {
  return (
    <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Movie" element={<Movie/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App