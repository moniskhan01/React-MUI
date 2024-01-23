import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 10
  const [counter, setCounter] = useState(10);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("Add Value", counter + 1);
    } else setCounter(counter);
  };
  const subtractValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
      console.log("Subtract Value", counter - 1);
    } else setCounter(counter);
  };

  return (
    <>
      <h1>React Counter Practise</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  );
}

export default App;
