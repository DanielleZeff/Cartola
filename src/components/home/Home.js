import React from "react";
import "../home/style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg_login login template justify-content-center align-items-center vh-100 ">
      <div className="signup_navbar">Home</div>
      <div className="signup_navbar_button">
      <div>
        <Link to="/signin">
          <button
            style={{
              fontFamily: "Poppins",
              fontSize: "1.5rem",
              color: "white",
              width: "10rem",
              marginRight: "1rem",
            }}
            className="btn_color"
          >
            Sign in
          </button>
          </Link>
        </div>
        <Link to ="/signup">
        <button
          style={{
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            color: "white",
            width: "10rem",
            marginRight: "1rem",
          }}
          className="btn_color"
        >
          Sign up
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
