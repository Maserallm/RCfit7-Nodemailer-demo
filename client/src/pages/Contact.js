import React from "react";
import axios from "axios";

class Contact extends React.Component {
  state = {
    name: "",
    message: "",
    email: "",
    buttonText: "Send Message",
    sent: false
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("API_URI", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Contact Page</h1>

        <form className="contact-form" onSubmit={e => this.formSubmit(e)}>
          <label className="message" htmlFor="message-input">
            Your Message
          </label>
          <textarea
            onChange={e => this.setState({ message: e.target.value })}
            name="message"
            className="message-input"
            type="text"
            placeholder="Please write your message here"
            value={this.state.message}
            required
          />

          <label className="message-name" htmlFor="message-name">
            Your Name
          </label>
          <input
            onChange={e => this.setState({ name: e.target.value })}
            name="name"
            className="message-name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
          />

          <label className="message-email" htmlFor="message-email">
            Your Email
          </label>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            name="email"
            className="message-email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <div className="button--container">
            <button type="submit" className="button button-primary">
              {this.state.buttonText}
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Contact;