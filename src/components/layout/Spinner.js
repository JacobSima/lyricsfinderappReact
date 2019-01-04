import React from 'react';
import spinner from './spinner.gif';

export default()=>{
  return (
    <div>
      <img
        src={spinner}
        alt="loading..."
        style={spinnerStyle}
      />
    </div>
  )
}
const spinnerStyle ={
   width:'200px',
   margin:'40px auto',
   display:'block'
}

