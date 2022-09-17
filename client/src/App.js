import "./App.css";
import { useState } from "react";
import Home from "./components/homepage";
import Projects from "./components/projects";
import Contact from "./components/contact";
import About from "./components/aboutme";

const navLinks = ["Home", "Projects", "Contact", "About"];
const navPages = [<Home />, <Projects />, <Contact />, <About />];

function App() {
  const [currentPage, setCurrentPage] = useState(navPages[0]);
  const handleClick = (e) => {
    setCurrentPage(navPages[e.target.value]);
  };

  return (
    <div className="App">
      <div className="topnav">
        {navLinks.map((page, index) => {
          return (
            <button key={index} value={index} onClick={handleClick}>
              {page}
            </button>
          );
        })}
      </div>
      {currentPage}
    </div>
  );
}

export default App;
