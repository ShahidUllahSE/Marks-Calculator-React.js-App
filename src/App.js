
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // showAlert("Dark mode has been enabled", "success");
      document.title = "MarksCalculator - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "MarksCalculator - Light Mode";
    }
  };
  return (
    <div className="App">
     
      <Navbar  mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} toggleMode={toggleMode} />
      <About mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
