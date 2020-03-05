import React from "react";
import { Link } from "react-router-dom";
import SvgComponent from "./SVG";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <div>
              <SvgComponent style={{ height: "100px", width: "100px" }} />
            </div>
            <h3></h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <span className="float-right">
                  About <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link
                to="/schedule"
                className={
                  window.location.pathname === "/schedule"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <span className="float-right">
                  Schedule <span className="sr-only">(current)</span>
                </span>
              </Link>

              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <span className="float-right">
                  Contact <span className="sr-only">(current)</span>
                </span>
              </Link>
            </div>
            {this.props.authorized && !this.props.isAdmin ? (
              <Link to="/user/profile">
                <span className="float-right">
                  User Profile <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              ""
            )}
            {this.props.authorized && this.props.isAdmin ? (
              <Link to="/admin">
                <span className="float-right mx-1">
                  Admin Page <span className="sr-only">(current)</span>
                </span>
              </Link>
            ) : (
              ""
            )}
            {this.props.authorized ? (
              <button className="btn-primary mx-1" onClick={this.props.logout}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <span className="float-right">
                  <button>Login / Sign-Up</button>
                </span>
              </Link>
            )}
          </div>
        </nav>
        {/* <nav className="navbar fixed-bottom navbar-light bg-light">
          <a className="navbar-brand text-center" href="#">
            231B North Village Blvd. <br />
            Celebration, FL 34747
          </a>
          <a className="navbar-brand text-center" href="#">
            RCFIT7@rcfit7.com <br />
            321-688-1279
          </a>
          <a className="navbar-brand text-center" href="#">
            Instagram
            <br />
            Facebook
          </a>
        </nav> */}
      </React.Fragment>
    );
  }
}
export default Navbar;
