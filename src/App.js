import { useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import ButtonClear from "./components/ButtonClear.jsx";
import Screen from "./components/Screen.jsx";
import logo from "./img/fastapi.svg";
import { evaluate } from "mathjs";

function App() {
  //estado para mostrar en la pantalla
  const [input, setInput] = useState("");

  const addInput = (valor) => {
    setInput(input + valor);
  };
  const calculateResult = () => {
    if (input) {
      //la funcion evaluate nos permite evaluar una operacion matematica deacuerdo al simbolo.
      setInput(evaluate(input));
    } else {
      alert("Please enter values to perform operations");
    }
  };
  return (
    <div className="App">
      <div className="container_logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="container_calculator">
        <Screen input={input} />
        <div className="row">
          <Button handlerClick={addInput}>1</Button>
          <Button handlerClick={addInput}>2</Button>
          <Button handlerClick={addInput}>3</Button>
          <Button handlerClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handlerClick={addInput}>4</Button>
          <Button handlerClick={addInput}>5</Button>
          <Button handlerClick={addInput}>6</Button>
          <Button handlerClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handlerClick={addInput}>7</Button>
          <Button handlerClick={addInput}>8</Button>
          <Button handlerClick={addInput}>9</Button>
          <Button handlerClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handlerClick={addInput}>0</Button>
          <Button handlerClick={addInput}>.</Button>
          <Button handlerClick={calculateResult}>=</Button>
          <Button handlerClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear handlerClear={() => setInput("")}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
