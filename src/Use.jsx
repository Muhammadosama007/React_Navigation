import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function UseEffect() {
  // const [name, setName] = useState("Hannan")
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  function min() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <button onClick={add}>Add</button>
      {count}
      <button onClick={min}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default UseEffect;
