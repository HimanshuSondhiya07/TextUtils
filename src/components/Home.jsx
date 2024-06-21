import { useState } from "react";
import "./Home.css";


function Home() {
  const [input, setInput] = useState("");

  function rmExtraSpaces() {
    let temp = input.split(" ");
    let result = "";
    temp.forEach((item) => {
      if (item.length > 0) {
        result += item;
        result += " ";
      }
    });
    result = result.trim();
    setInput(result);
  }

  function copytoClipboard() {
    if (navigator) {
      navigator.clipboard.writeText(input);
      alert("Copied Successfully");
    }
  }

  return (
    <div className="home-container">
      <h1>Enter your Text</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      ></textarea>
      <div className="button-container">
        <button onClick={() => setInput(input.toUpperCase())}>Convert Upper Case</button>
        <button onClick={() => setInput(input.toLowerCase())}>Convert Lower Case</button>
        <button onClick={() => setInput("")}>Clear Text</button>
        <button onClick={copytoClipboard}>Copy to Clipboard</button>
        <button onClick={rmExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <h1>Summary</h1>
      <p>Number of Words: {input.split(" ").filter(Boolean).length} </p>
      <p>Number of characters: {input.length}</p>
      <p>Reading Time: {input.split(" ").filter(Boolean).length * 0.0001} minutes</p>
      <h1>Preview</h1>
      <pre className="preview">{input}</pre>
    </div>
  );
}

export default Home;
