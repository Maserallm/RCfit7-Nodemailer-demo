import React, { Component } from "react";
import API from "../../utils/scheduleAPI";
import UpcomingSchedule from "./UpcomingSchedule";

class UpcomingSchedules extends Component {

  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents()
  };

  getEvents = () => {
    API.userSchedule()
      .then(res => { 
        this.setState({ events: res.data })
        // console.log(this.state.events)
      })
      .catch(err => console.log(err))
  }

  userSignUp = (scheduleId) => {
    API.userSignUp(scheduleId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  userCancel = (scheduleId) => {
    API.userCancel(scheduleId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  onClickSignUp = (id) => {
    // console.log(id)
    this.userSignUp(id)
    this.props.userId ? window.location.reload(false) : alert("Please log in")
  }

  onClickCancel = (id) => {
    this.userCancel(id)
    this.props.userId ? window.location.reload(false) : alert("Please log in")
  }

  render() {
    return (
      this.state.events.map(event => (
        <UpcomingSchedule 
          key={event._id} 
          id={event._id} 
          title={event.class.title} 
          duration={event.class.duration} 
          trainer={event.trainer.firstName} 
          time={event.datetime} 
          users={event.users} 
          userId={this.props.userId} 
          onClickSignUp={this.onClickSignUp}
          onClickCancel={this.onClickCancel}
        />
      ))
    );
  }
}

export default UpcomingSchedules;