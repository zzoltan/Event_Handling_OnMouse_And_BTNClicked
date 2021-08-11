import React, { useState } from "react";

function App() {
  const [clicked, setbtnClicked] = useState(false);
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("Hello");
  const [headingtext, setHeadingText] = useState("");

  function setNev(event) {
    setName(event.target.value);
  }

  function buttonClicked() {
    setHeadingText(name);
    setbtnClicked(true);
  }

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{clicked ? headingtext : "Hello"} </h1>
      <input type="text" placeholder="What's your name?" onChange={setNev} />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={buttonClicked}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
