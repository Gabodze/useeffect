import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App(){

  return(
    <div className='card'>
      <img src='/1.jpg'/>

      <div className='description'>
          <div className='title'>
            <h3>Modern bag</h3>
            <h2>$100</h2>
          </div>            
          <h5>High quality and most popular bag</h5>
      </div>

      <div className='raodenobaButton'>
        <div>
          <img src='/minus.png'/>
        </div>
      </div>
    </div>
  )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


