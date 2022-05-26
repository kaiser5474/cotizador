import React from 'react'
import '../styles/Spinner.css';
import '../styles/General.css';

const Spinner = () => {
  return (
      <div className="container">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    
  )
}

export default Spinner