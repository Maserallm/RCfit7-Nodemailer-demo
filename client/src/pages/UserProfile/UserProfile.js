import React, { Component } from "react";
import classAPI from "../../utils/classAPI";
import userAPI from "../../utils/userAPI";
import scheduleAPI from "../../utils/scheduleAPI";
import Class from "../UserProfile/Class";
// import "./index.css";

class UserProfile extends Component {
  state = {
    classes: [],
    trainers: [],
    schedules: [],
    title: "",
    duration: ""
  };

  componentDidMount() {
    this.getClasses();
    // this.getTrainers()
    // this.getSchedules()
  }

  getClasses = () => {
    classAPI
      .viewClasses()
      .then(res => {
        this.setState({ classes: res.data });
        // console.log(this.state.classes)
      })
      .catch(err => console.log(err));
  };
  //editForm = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="custContainer">
          <div className="row">
            <div className="col-sm-12">
              <h1>Dashboard</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h2 className="card-title">
                    Welcome {this.props.user.firstName}!
                  </h2>
                  <p className="card-text">
                    This is your protected User Profile Page that only you have
                    access to. On this page you can view and update your
                    personal information, see what classes you're signed up for,
                    and edit your membership status. Scroll down to get started!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Your Classes</h4>
                  <p className="card-text">
                    These are all the classes that you've signed up for!
                  </p>
                  <p>Navigate to schedule page to cancel???</p>
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.classes.map(e => (
                        <Class
                          key={e._id}
                          id={e._id}
                          title={e.title}
                          duration={e.duration}
                          trainers={e.trainers}
                          onClickDelete={e.onClickDelete}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="col-sm-6">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <h4 className="card-title">Personal Information</h4>

                  <tr>
                    <th scope="row">Name:</th>
                    <td>
                      {this.props.user.firstName} {this.props.user.lastName}
                    </td>
                    <td>
                      <span className="btn btn-outline-danger delete-trainer-button text-center">
                        X
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Email:</th>
                    <td>{this.props.user.email}</td>
                    <td>
                      <span className="btn btn-outline-danger delete-trainer-button text-center">
                        X
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Birthday:</th>
                    <td>{this.props.user.birthday}</td>
                    <td>
                      <span className="btn btn-outline-danger delete-trainer-button text-center">
                        X
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Subcribed:</th>
                    <td>
                      {this.props.authorized
                        ? "You are currently subcribed!"
                        : "You are not currently subscribed!"}
                    </td>
                    <td>
                      <span className="btn btn-outline-danger delete-trainer-button text-center">
                        X
                      </span>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-6">
              <h4>Membership</h4>
              <p>Membership plan and membership status</p>
            </div> */}
        </div>
        <div className="row">
          {/* <div className="col-sm-12">
              <h4>Your classes</h4>
              <p>Navigate to schedule page to cancel???</p>
            </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;
