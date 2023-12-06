import React from 'react';
import "../css/ButtonClear.css"
const ButtonClear = (props) => {
  return (
    <button className="clear_btn"
     onClick={props.handlerClear}>
     {props.children}
    </button>
  )
}

export default ButtonClear;