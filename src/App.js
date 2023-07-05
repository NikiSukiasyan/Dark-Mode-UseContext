import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
