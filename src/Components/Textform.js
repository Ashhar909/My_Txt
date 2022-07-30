import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");


  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpper = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    console.log(props.theme);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLower = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text Copied", "success");
  };

  const handleClear = () => {
    setText("");
  };
  return (
    <div className="container my-3">
      <h2 className={`text-${props.theme === "light" ? "dark" : "light"}`}>
        Analyse text
      </h2>
      <textarea
        value={Text}
        className="form-control"
        id="myBox"
        onChange={handleChange}
        style = {{backgroundColor: props.theme === "light" ? "white" : "grey"}}
        rows="10"
      ></textarea>

      <div className="container my-3">
        <button
          disabled={Text.length === 0}
          type="button"
          onClick={handleUpper}
          className={props.theme === "light" ? "btn btn-dark" : "btn btn-light"}
        >
          Upper Case
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          onClick={handleLower}
          className={
            props.theme === "light" ? "btn btn-dark mx-2" : "btn btn-light mx-2"
          }
        >
          Lower Case
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          onClick={handleCopy}
          className={props.theme === "light" ? "btn btn-dark" : "btn btn-light"}
        >
          Copy Text
        </button>
        <button
          disabled={Text.length === 0}
          type="button"
          onClick={handleClear}
          className={
            props.theme === "light" ? "btn btn-dark mx-2" : "btn btn-light mx-2"
          }
        >
          Clear text
        </button>
      </div>

      <div
        className={`container my-3 text-${
          props.theme === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters {0.008 *  Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read
        </p>
        <h4>Preview</h4>
        <p>{Text.length>0?Text:"Nothing to preview!"}</p>
      </div>
    </div>
  );
}
