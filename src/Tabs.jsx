import React, { useState, useEffect } from "react";

function Tabs() {
  const [a, setA] = useState("Sohaib");
  const [b, setB] = useState("Ahmed");
  const [showb, setShowB] = useState(false);
  const [showa, setShowA] = useState(false);
  function showacontent() {
    setShowA(true);
    setShowB(false);
  }
  function showbcontent() {
    setShowA(false);
    setShowB(true);
  }

  return (
    <>
      {showa ? <p>{a}</p> : null}
      {showb ? <p>{b}</p> : null}

      <button onClick={showacontent}>Show A content</button>
      <button onClick={showbcontent}>Show B content</button>
    </>
  );
}

export default Tabs;
