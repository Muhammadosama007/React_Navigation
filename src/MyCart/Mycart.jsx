import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Mycart() {
  const [name, setName] = useState("");
  const location = useLocation();
  console.log(location.state);
  useEffect(() => {
    setName(location.state.name);
  }, []);
  return (
    <>
      Mycart
      <p>{name}</p>
    </>
  );
}

export default Mycart;
