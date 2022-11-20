/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import './App.css';
import Screen from './components/Screen';
import SectionButtons from './components/SectionButtons';

export default function App() {
  const [previousOperator, setPreviousOperator] = useState<string>("");
  const [buffer, setBuffer] = useState<string>("0");
  const [runningTotal, setRunningTotal] = useState<string>("0");
  const [displayValue, setDisplayValue] = useState<string>("0");

  function buttonClick(value: string) {
    if (isNaN(Number(value))) {
      handleSymbol(value);
      
    } else {
      handleNumber(value);
    }

    setDisplayValue(buffer);
  }

  function handleSymbol(symbol: string) {
    switch (symbol) {
      case "C":
        setBuffer("0");
        setRunningTotal("0");
        setPreviousOperator("");
        break;

      case "=":
        if (previousOperator == "") {
            return;
        }
        flushOperation(buffer);
        setPreviousOperator("");
        setBuffer(runningTotal);
        setRunningTotal("0");
        break;

      case "←":
        if (buffer.length == 1) {
            setBuffer("0");
        } else {
            setBuffer(buffer.substring(0, buffer.length - 1));
        }
        break;

      case "+":
      case "−":
      case "x":
      case "÷":
        handleMath(symbol);
        break;
    }
  }

  function handleNumber(value: string) {
    if (buffer === "0") {
      setBuffer(value);
    } else {
      setBuffer(buffer + value);
    }
  }

  function handleMath(symbol: string) {
    if (buffer == "0") {
      return;
    }

    if (runningTotal == "0") {
        setRunningTotal(buffer);
    } else {
        flushOperation(buffer);
    }
    setPreviousOperator(symbol);
    setBuffer("0");
  }

  function flushOperation(bufferValue: string) {
    if (previousOperator === "+") {
      setRunningTotal((Number(runningTotal) + Number(bufferValue)).toString());
    } else if (previousOperator === "−") {
      setRunningTotal((Number(runningTotal) - Number(bufferValue)).toString());
    } else if (previousOperator === "x") {
      setRunningTotal((Number(runningTotal) * Number(bufferValue)).toString());
    } else if (previousOperator === "÷") {
      setRunningTotal((Number(runningTotal) / Number(bufferValue)).toString());
    }
  }

  return (
    <div className="wrapper">

      <Screen value={displayValue} />
      <SectionButtons onClick={(e: any) => buttonClick(e.target.textContent)} />

    </div>
  );
}
