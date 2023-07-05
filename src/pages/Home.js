import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`page-color ${theme === "dark" ? "dark-mode" : ""}`}>
      <h1 className={theme === "dark" ? "dark-text" : ""}>Hello</h1>
    </div>
  );
}

export default Home;
