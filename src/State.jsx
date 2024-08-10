import React from "react";
import { useState } from "react";
function State(props) {
  console.log(props.name);
  return (
    <>
      <button>Minus</button>
      {props.count}
      <button onClick={props.add}>Add</button>
      <br />
      <button onClick={props.reset}>Reset</button>
      {props.name.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}

export default State;
