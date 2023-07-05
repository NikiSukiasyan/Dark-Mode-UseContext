import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`page-color ${theme === "dark" ? "dark-mode" : ""}`}>
      <h1 className={theme === "dark" ? "dark-text" : ""}>About Js</h1>
    </div>
  );
}

export default About;
