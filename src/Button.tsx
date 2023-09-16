import { useState } from "react";
import "./Project.css";

const Button = () => {
  const [buttonSpin, setButtonSpin] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setButtonSpin(true);
  };

  return (
    <>
      <h2>Clicked {count} times</h2>
      <button
        className={`click-button ${buttonSpin ? "button-spin" : ""}`}
        onClick={handleClick}
      >
        Click me!
      </button>
    </>
  );
};

export default Button;
