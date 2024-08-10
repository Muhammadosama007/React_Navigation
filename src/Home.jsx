import React from "react";

function Home(props) {
  console.log(props, " I am props");
  const a = "123";
  return (
    <div>
      {props.name.map((item) => (
        <>
          <div className="red" style={{ color: "red", backgroundColor: "yellow" }}>
            <h1>I am {item.f_name}</h1>
            <p>I am {item.designation}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Home;
