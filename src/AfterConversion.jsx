import React, { createElement } from "react";

function AfterConversion() {
  return createElement(
    "div",
    null,
    React.createElement(
      "div",
    {
      className:"con",
      id:"con",
    },"Osama",    
  React.createElement("h1",{id:"osama"},"After_Conversion")
  )
  );
}

export default AfterConversion;
