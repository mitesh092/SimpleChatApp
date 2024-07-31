import React from "react";
import "./Home.css";
import "./animation.css";
import {useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/register")
  }
  return (
    <div className="home">
      <h1 className="tagline">Easy Chats, Anytime !</h1>
      <button className="btn-53" onClick={navigateToSignup}>
        <div className="original">Get Start !</div>
        <div className="letters">
          <span>S</span>
          <span>i</span>
          <span>g</span>
          <span>n</span>
          <span> </span>
          <span>-</span>
          <span>u</span>
          <span>p</span>
        </div>
      </button>
    </div>
  );
};

export default Home;
