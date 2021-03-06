import React from "react";
import { Link } from "react-router-dom";
import mov from "../images/ladderdrill.mp4";
import "./hero-vid.css";
import SideBox from "../components/Sidebox";

function Home({ logout }) {
  return (
    <React.Fragment>
      <header className="v-header cont">
        <div className="fullscreen-video-wrap">
          <video src={mov} autoplay="true" loop="true"></video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h3 className="text-center">LIFT EACH OTHER UP</h3>
        </div>
        <Link className="header-link" to="/about">
          <span>
            <button className="btn button-style">
              START YOUR JOURNEY HERE
            </button>
          </span>
        </Link>
      </header>

      <div className="container">
        <div className="row rowmove">
          <div className="col-sm-6">
            <div className="row no-gutters  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="card" style={{ width: "40rem" }}>
                <div className="card-body text-center">
                  <h5 className="card-title ">Schedule Your First Class</h5>

                  <p className="card-text ">
                    Take the first step in the right direction of your fitness
                    journey with a certified trainer.
                  </p>
                  <Link to="/schedule">Class Schedule</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="row no-gutters  rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="card" style={{ width: "40rem" }}>
                <div className="card-body text-center">
                  <h5 className="card-title">Sign-Up / Register</h5>
                  <p className="card-text">
                    Create an account to keep track of all of your classes and
                    track your fitness goals.
                  </p>
                  <Link to="/register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
