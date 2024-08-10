import React from "react";
import { useEffect, useState } from "react";
function UseEffect() {
  const [name, setName] = useState("Sohaib");
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      {count}
      <button onClick={add}>Click Me !!</button>
    </>
  );
}

export default UseEffect;
