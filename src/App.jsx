import React, { useState } from "react";
import { Lines } from "./components/Lines";

import "./index.css";

export function App() {
  const [display, setDisplay] = useState(0);
  const [buffer, setBuffer] = useState(0);
  const [operator, setOperator] = useState("");
  
  function handleClick() {
    let buttonClickedValue = event.target.value;

    switch (buttonClickedValue) {
      case 'C':
        setDisplay(0);
        break;
      case '←':
        let tmpValue = typeof(display) == 'number' ? display.toString() : display;
        
        if (tmpValue.length > 1 && tmpValue != "0") {
          let newTmpValue = tmpValue.slice(0 , -1);
          setDisplay(parseInt(newTmpValue));
        } else if (tmpValue.length == 1 && tmpValue != "0") {
          setDisplay(0);
        }

        break;
      case '÷':
      case '×':
      case '−':
      case '+':
        handleMath(buttonClickedValue);
        break;
      case '=':
        equalOperation();
        setBuffer(0);
        setOperator("");
        break;
      default:
        handleClickNumber(buttonClickedValue);
        break;
    }
  }

  function handleClickNumber(number) {
    if (display == 0) {
      setDisplay(number);
    } else {
      let numberString = number.toString();
      let displayString = display.toString();

      setDisplay(displayString.concat(numberString));
    }
  }

  function handleMath(symbol) {
    setBuffer(display);
    setOperator(symbol);
    setDisplay(0);
  }

  function equalOperation() {
    if (operator == "") {
      return;
    }

    let bufferNumber = Number(buffer);
    let displayNumber = Number(display);

    switch (operator) {
      case '+':
        setDisplay(bufferNumber + displayNumber);
        break;
      case '−':
        setDisplay(bufferNumber - displayNumber);
        break;
      case '×':
        setDisplay(bufferNumber * displayNumber);
        break;
      case '÷':
        setDisplay(bufferNumber / displayNumber);
        break;
    }
  }

  return (
    <div className="wrapper">
      <section className="screen">
        {display}
      </section>
      <section className="calc-buttons">
        <Lines lines={[1, 2, 3, 4, 5]} handleClick={handleClick} />
      </section>
    </div>
  );
}