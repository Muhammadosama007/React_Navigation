import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const gotomycart = () => {
    navigate("/cart", { state: { name: "Azan" } });
  };
  return (
    <>
      <div>Home</div>
      <button onClick={gotomycart}>Go to My Cart</button>
    </>
  );
}

export default Home;
