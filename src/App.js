import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1f0b45";
      showAlert("Dark mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        link1="home"
        link2="About"
        link3="Contact"
        mode={mode}
        toggle={toggle}
      />
      <Alert alert={alert} />
      <div className="container p-4">
        <TextForm
          heading="Enter Text To Analyze"
          mode={mode}
          alert={showAlert}
        />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
