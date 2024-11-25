import  {useState, useEffect}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import minus from './minus .png'
import plus from './plus.png'
// import React { useEffect, useState } from 'react';




function App(){

  // useState
  const [count, setCount] = useState(0);
  const [time, setTime] =useState("");

  // useEffect
  // for time
  useEffect(() => {
    const now = new Date().toLocaleString();
    setTime(now);
  }, []);

    // for cart
  useEffect(() => {
    console.log(count)
  }, [count]);

 

  return(
    // card

    <div>
      <h5>Current Time: {time}</h5>    
      
      <div className='card'>
      {/* image */}
      <img src='/1.jpg'/>

      {/* name, description and price */}
      <div className='description'>
          
          <div className='title'>
            <h3>Modern bag</h3>
            <h2 className='price'>$100</h2>
          </div>            
          <h5>High quality and most popular bag</h5>
      </div>


      {/* raodenoba and add to cart */}
      <div className='quantityButton'>
        <div className='quantity'>
          <img src={minus} onClick={() => setCount(count -1)}/>
          <h3>{count}</h3>
          <img src={plus} onClick={() => setCount(count +1)}/>
        </div>
        <button>Add to card</button>
      </div>
    </div>
    </div>
  )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


