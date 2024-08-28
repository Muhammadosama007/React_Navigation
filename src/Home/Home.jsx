import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate=useNavigate("");

const goToMyCart=()=>{
  navigate("/cart",{state:{name:"osama"}})
}
  return (
    <>
    <div>Home</div>
    <button onClick={goToMyCart}>GoToCart</button>
    </>
  )
}

export default Home