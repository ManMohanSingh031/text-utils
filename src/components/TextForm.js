import React, { useState } from "react";

export default function TextForm(props) {
  // For uppercase text
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  // For lower case text
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // For Download text
  function handleDownloadClick() {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "download.txt";
    a.click();

    URL.revokeObjectURL(url);
  }
  // For clear text
  function handleClearClick() {
    setText(""); // Clear the text state when the "Clear Text" button is clicked
  }

  // for Convert To Xml
  function handleConvertToXmlClick() {
    const xmlContent = convertToXml(text);
    setText(xmlContent);
  }

  function convertToXml(htmlContent) {
    const xmlContent = htmlContent
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    return xmlContent;
  }

  // For copy text
  function copyToClipboard() {
    const textarea = document.getElementById("Textarea1");
    textarea.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }

  // For change  event
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="Textarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleDownloadClick}
        >
          Click To Download
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleConvertToXmlClick}
        >
          Convert To XML
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyToClipboard}>
          Click To Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
