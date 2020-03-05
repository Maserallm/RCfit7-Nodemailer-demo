import React from "react";
import moduleName from "../images/exercise.jpg";

function Home({ logout }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            style={{
              // height: 300,
              // clear: "both",
              textAlign: "center"
            }}
            className="jumbotron-fluid"
          >
            <img src={moduleName} style={{ width: "100%", height: 700 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
