import React, { useState } from 'react'
import './Card.css'

const Card = () => {
   const [inputName, setInputName] =  useState('');
   const [greeting, setGreeting] = useState('')
   const handleChange =(e)=>{
    setInputName(e.target.value);
   };
   const showGreetings =()=>{
    setGreeting(`Hello ${inputName}! Welcome to the Greetings Card`)
   }
  return (
    <>
    <div>
        <h1>Greetings Card</h1>
        <input type="text" placeholder='Enter Your Name' value={inputName} onChange={handleChange}/>
        <button onClick={showGreetings}>Show Greetings</button>
        <p>{greeting}</p>
        
    </div>
    </>
  )
}

export default Card
