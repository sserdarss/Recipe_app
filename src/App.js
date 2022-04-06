import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Github from "./pages/github/Github";
import About from "./pages/about/About"
import Login from "./pages/login/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path = '/' element ={<Home/>} />
        <Route path = '/about' element ={<About/>} />
        <Route path = '/github' element ={<Github/>} />
        <Route path = '/logout' element ={<Login/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
