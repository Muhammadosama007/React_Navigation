import React from "react";
import { useState } from "react";
function ConditionalRendering() {
  const [name, setname] = useState("Sohaib");
  const [showName, setShowName] = useState(true);
  function updateState() {
    setShowName(false);
  }
  return (
    <>
      {showName ? <p>{name}</p> : null}
      {showName ? (
        <button onClick={updateState}>Hide Name</button>
      ) : (
        <button onClick={updateState}>Show Name</button>
      )}
    </>
  );
}

export default ConditionalRendering;
