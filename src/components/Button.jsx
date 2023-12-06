import React from "react";
import "../css/Button.css"
function Button(props) {
 const isOperator=(valor)=>{
    return isNaN(valor) && (valor !== '.') && (valor!== '=');
 };

 if (isOperator(props.children)){
   return( 
   <div 
     className="container_btn operator"
      onClick={()=>props.handlerClick(props.children)}>
     {props.children}
   </div>
   );
  }else{
   return( 
   <div 
     className="container_btn"
      onClick={()=>props.handlerClick(props.children)}>
     {props.children}
   </div>
   );

 }
}

export default Button;
