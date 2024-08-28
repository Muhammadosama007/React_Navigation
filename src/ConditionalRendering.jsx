import React from "react";
import { useState } from "react";
function ConditionalRendering() {
  const [name,setName]=useState("osama");
  const [showName,setShowName]=useState(true);
  function Visible()
  {
    setShowName(false);
  }
  function InVisible()
  {
    setShowName(true);
  }
  function changeName()
  {
    setName("ali");
  }
  return(
    <>
    
      {showName? <p>{name}</p>:null}
      {
        showName? (<button onClick={Visible}>hideName</button>):(<button onClick={InVisible}>ShowName</button>)
      }
    
{name}
<button onClick={changeName}>change name</button>
    </>
  );
}

export default ConditionalRendering;
