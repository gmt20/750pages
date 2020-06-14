import React ,{Component} from "react";
import './Nav.css';
 
const Nav = (props) => {

  
    return (
      <div className="topNav">
        <button className="buttonClass" type="button" onClick={props.doPrint}>{props.title}</button>
 
      </div>
)
  
}
 
export default Nav;