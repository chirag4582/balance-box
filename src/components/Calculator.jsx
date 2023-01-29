import React, { useState, useEffect } from 'react';
import user from "./user.svg";
import { Link } from "react-router-dom";




function Calculator() {

  const [scrollY, setScrollY] = useState(0);

const [title, settitle] = useState(0);
const [calculator, setcalculator] = useState(0);


const updatePosition = () => {
    settitle(scrollY * 0.4);
    setcalculator(scrollY * 0.6);
}

useEffect(() => {
    window.addEventListener('scroll', () => {
        setScrollY(window.scrollY);
    });

    return () => {
        window.removeEventListener('scroll', () => {});
    };
}, []);

useEffect(() => {
    updatePosition();
});
  
  return (
    <div className="calculator-body">
      <div className="navbar">
        <div className="navbar-top-left">
          <img className="user-image" src={user} alt="user" />
          <p className="paragraph username">username</p>
        </div>
        <div className="navbar-top-right">
          <Link style={{ textDecoration: "none" }} to="/Calculator">
            <p className="paragraph">CALCULATE</p>
          </Link>
        </div>
      </div>
      <div>
        <h1 style={{ transform: `translateY(${title}px)` }}>Take control of your diet with accurate nutrient tracking.</h1>
      </div>
      <div className='calculator' style={{ transform: `translateY(${calculator}px)` }} >

      </div>
    </div>
  );
}

export default Calculator;
