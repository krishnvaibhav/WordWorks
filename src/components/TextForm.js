import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const HandleUpperCase = () => {
    if (text !== "") {
      let newText = text.toUpperCase();
      setText(newText);
      props.alert("Converted into Uppercase", "success");
    } else {
      props.alert(
        "Couldnt convert into uppercase , enter some text first",
        "warning"
      );
    }
  };
  const HandleLowerCase = () => {
    if (text !== "") {
      let newText = text.toLowerCase();
      setText(newText);
      props.alert("Converted into lowercase", "success");
    } else {
      props.alert(
        "Couldnt convert into uppercase , enter some text first",
        "warning"
      );
    }
  };
  const HandleOnChange = (event) => {
    console.log("changed");
    setText(event.target.value);
  };
  const calcWord = () => {
    let words = text.trim().split(" ");
    words = words[0] === "" ? words.length - 1 : words.length;
    return words;
  };
  const HandleCapitalize = () => {
    if (text !== "") {
      let newText = text
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
      setText(newText);
      props.alert("Capitalized", "success");
    } else {
      props.alert("Could not Capitalized", "warning");
    }
  };
  const HandleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const HandleRead = () => {
    let message = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(message);
  };
  const HandleStopReading = () => {
    window.speechSynthesis.cancel();
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={HandleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary m-3 p-2" onClick={HandleUpperCase}>
          Convrert to UpperCase
        </button>
        <button className="btn btn-primary m-3 p-2" onClick={HandleLowerCase}>
          Convrert to LowerCase
        </button>
        <button className="btn btn-primary m-3 p-2" onClick={HandleCapitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary m-3 p-2" onClick={HandleRead}>
          Read
        </button>
        <button className="btn btn-primary m-3 p-2" onClick={HandleStopReading}>
          Stop Reading
        </button>
        <button className="btn btn-primary m-3 p-2" onClick={HandleClearText}>
          Clear text
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {" "}
          {calcWord()} words ,{text.length} characters
        </p>
        <p>
          This could be read in about {calcWord() * 0.008 * 60} seconds (
          {calcWord() * 0.008} minutes)
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "My Text Area",
};
