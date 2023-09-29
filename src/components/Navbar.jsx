import React from "react";
import { useAppContext } from "../context/appContext";

function Navbar() {
  const { user } = useAppContext();

  return (
    <header>
      <div className="navbar">
        <div className="left_nav">
          {/* <img src="img/यात्रा.png" alt="logo" /> */}
          <h2 className="main-logo">यात्रा</h2>
        </div>
        <div className="right_nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/stay">Stays</a>
            </li>
            <li>
              <a href="/destination">Destinations</a>
            </li>
            <li>
              <a href="/trek">Trek Routes</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            {/*document.getElementsByClassName('register-btn').innerHTML="Logout" */}
            {user ? (
              <button
                onMouseEnter={() => {
                  document.getElementsByClassName("register-btn")[0].innerHTML =
                    "Logout";
                }}
                onMouseLeave={() => {
                  document.getElementsByClassName(
                    "register-btn"
                  )[0].innerHTML = `Welcome ${user.name.split(" ")[0]}!`;
                }}
                onClick={()=>{
                    localStorage.clear();
                }}
              >
                <a href="/" className="register-btn">
                  Welcome {user.name.split(" ")[0]}!
                </a>
                <div>
                  <img
                    className="profile-icon"
                    src="img/profile-user.png"
                  ></img>
                </div>
              </button>
            ) : (
              <button>
                <a href="/register" className="register-btn">
                  Login
                </a>
              </button>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
