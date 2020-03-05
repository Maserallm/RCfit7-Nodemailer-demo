import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="container footer py-5">
          <div className="row text-center">
            <div className="col-sm-4">
              <Link>
                231B North Village Blvd. <br />
                Celebration, FL 34747
              </Link>
            </div>
            <div className="col-sm-4">
              <Link>
                RCFIT7@rcfit7.com <br />
              </Link>
              <Link>321-688-1279</Link>
            </div>
            <div className="col-sm-4">
              <Link>
                <i class="fab fa-instagram-square"></i>Instagram
              </Link>
              <br />
              <Link>
                <i class="fab fa-facebook-square"></i>Facebook
              </Link>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
