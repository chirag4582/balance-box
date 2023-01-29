import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./components.css";
import user from "./user.svg";
import image1 from './barbell.svg'
import image2 from './pattern.webp'
// import image2 from './nutrition-icon.svg'
// import background from './background.png'
function Home() {


// State to store the current scroll position
const [scrollY, setScrollY] = useState(0);

// State to store the position of each image
const [image1Y, setImage1Y] = useState(0);
const [image2Y, setImage2Y] = useState(0);

// Function to update the position of each image
const updatePosition = () => {
    setImage1Y(scrollY * 0.4);
    setImage2Y(scrollY * 0.1);
}

// Use the useEffect hook to listen for changes in the scroll position
useEffect(() => {
    // Add an event listener to the window object to listen for scroll events
    window.addEventListener('scroll', () => {
        setScrollY(window.scrollY);
    });

    // Remove the event listener when the component is unmounted
    return () => {
        window.removeEventListener('scroll', () => {});
    };
}, []);

// Use the useEffect hook to update the position of each image when the scrollY state changes
useEffect(() => {
    updatePosition();
});


  return (
    <div className='home-body'>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
      </style>
      <div className="navbar">
        <div className="navbar-top-left">
          <img className="user-image" src={user} alt="user" />
          <p className="paragraph username">username</p>
        </div>
        <div className="navbar-top-right">
          <Link  style={{textDecoration:'none'}} to='/Calculator' >
          <p className="paragraph">CALCULATE</p>
          </Link>
        </div>
      </div>
      <div className="body-content">
        {/* <img className='background-image' src={background} alt="bg" /> */}
        <h1 className="title">BALANCE-BOX</h1>
        <p className="description">
          Balance Box is a comprehensive nutrition app designed to help users
          achieve their health and fitness goals. Whether you're looking to lose
          weight, build muscle, or simply eat healthier, Balance Box has
          everything you need to stay on track. <br />
          The app features a wide range of tools to help users make informed
          food choices, including a nutrition database with information on
          thousands of foods, a calorie tracker, and a macronutrient calculator.
          Users can also set custom goals and track their progress over time.{" "}
          <br />
          In addition, Balance Box provides expert guidance on healthy eating
          and exercise, with access to a library of articles, videos, and
          recipes. The app also includes a variety of meal plans and recipes
          tailored to specific dietary needs, such as vegetarian, gluten-free,
          and low-carb. <br />
          With Balance Box, you can easily manage your daily nutrition, track
          your progress, and get the support you need to achieve your goals.
          Whether you're just starting out on your health journey or you're a
          seasoned pro, Balance Box is the perfect companion for anyone looking
          to take control of their nutrition and live a healthier, happier life
        </p>
        <h1 className="why-us">WHY US?</h1>
        <p className="description" style={{ marginBottom: '10vh'}}>
          Balance Box is a reliable and trustworthy nutrition app that is
          dedicated to helping users achieve their health and fitness goals. Our
          app is built on the foundation of accurate and carefully gathered
          data, ensuring that users have access to the most up-to-date and
          accurate information. Our developer is passionate about health and
          fitness and has dedicated a great deal of time and effort to creating
          an app that truly helps users make informed choices about their
          nutrition. With Balance Box, you can trust that you are getting the
          best possible guidance and support on your journey to a healthier
          lifestyle.
        </p>
      </div>
      <div>
            <img className='image1' src={image1} style={{ transform: `translateY(${image1Y}px)` }} alt='1'/>
            <img className='image2' src={image2} style={{ transform: `translateY(${image2Y}px)` }} alt='2'/>
        </div>
      <div className='footer'>
          <div className='whiteline'>h</div>
          <p className='paragraph made-by'>Made With <span>&#x2764;</span>  By Chirag Chavda</p>
          <div className='whiteline-right'>a</div>
      </div>
      
    </div>
  );
}

export default Home;
