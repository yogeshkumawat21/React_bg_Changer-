import './Card.css'
import { useState } from 'react';
import './Card.css';

function Card() {
    const[color , setColor]=useState("Pink");
    return (
    <>
         <div style={{backgroundColor:color}} className="card">  
         <button onClick={()=>setColor("red")}>Red</button>
         <button onClick={()=>setColor("blue")}>Blue</button>
         <button onClick={()=>setColor("black")}>Black</button>
         <button onClick={()=>setColor("green ")}>Green</button>
         <button onClick={()=>setColor("yellow")}>Yellow</button>
      
      </div>


    </>
    )
}

export default Card