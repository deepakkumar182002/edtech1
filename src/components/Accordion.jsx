import React, { useState } from "react";
import "../App.css";

const Accordion = ({heading, content}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
    
    <li className="accordion-item"style={{ background:"rgb(248 249 250)", width:"100%"}}>
      <div className="accordion-toggle" style={{margin:"5px", border:"1px solid #e7e6e6", width:"auto", scale:"auto"}} onClick={() => setIsActive(!isActive)}>
        <h3 style={{fontSize:"1.2rem"}}>{heading}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>




    </>
  );
};

export default Accordion;