import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { Routes, Link, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [red, setRed] = useState("red");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const makeRed = () => {
    if (mode === "dark") {
      if (red !== "red") {
        setRed("red");
        document.title = "TextUtils - Red Mode";
        document.body.style.backgroundColor = "#4b1919";
        showAlert("Converted to Red Dark Mode", "success");
      } else {
        showAlert("Dark mode back to default");
        setRed("nill");
        document.title = "TextUtils - Dark Mode";
        document.body.style.backgroundColor = "#1f0b45";
      }
    } else {
      setRed("nill");
      showAlert("dark mode should be enabled first", "warning");
    }
  };

  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
      document.title = "TextUtils";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Downlaod the App";
      }, 1500);
      document.body.style.backgroundColor = "#1f0b45";
      showAlert("Dark mode enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          link1="home"
          link2="About"
          link3="Contact"
          mode={mode}
          toggle={toggle}
          red={makeRed}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Text To Analyze"
                mode={mode}
                alert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
