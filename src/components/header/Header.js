import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemeContext from "../../ThemeContext";
import Home from "../../pages/Home";
import About from "../../pages/About";
import "./Header.css";

function Header() {
  const { ChangeTheme } = useContext(ThemeContext);

  const ChangeToDarkMode = () => {
    ChangeTheme();
  };

  return (
    <>
      <header>
        <p className="company-name">Re:educate</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <button onClick={ChangeToDarkMode}>Dark Mode</button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Header;
