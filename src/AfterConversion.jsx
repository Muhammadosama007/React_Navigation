import React from "react";

function AfterConversion() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      {
        className: "hello",
        id:"demo",
        
      },
      React.createElement("h1", { id: "hello" }, "Conversion")
    )
  );
}

export default AfterConversion;
