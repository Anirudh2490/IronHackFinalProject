import React, { Component } from "react";
import Popup from "reactjs-popup";
import Form from "react-bootstrap/Form";
import AuthService from "./auth/auth-service";

class ModalIndividual extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: false };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
        this.props.history.push("/");
        console.log(this.props.history);
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Popup
        trigger={<button className="button"> Sign up </button>}
        modal
        closeOnDocumentClick
      >
        <div className="container signup-container">
          <div className="row">
            <div className="col-3" />
            <div className="col-6">
              <h4 className="signup-individual-title">
                Register as an individual
              </h4>

              <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Enter email"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                  {this.state.password.length < 8 ? (
                    <Form.Text style={{ color: "red", fontSize: "0.5em" }}>
                      Your password has to be 8 character long at least
                    </Form.Text>
                  ) : (
                      <Form.Text style={{ color: "green", fontSize: "0.5em" }}>
                        Password is valid
                    </Form.Text>
                    )}
                </Form.Group>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Signup"
                />
              </Form>
            </div>
            <div className="col-4" />
          </div>
        </div>
      </Popup>
    );
  }
}

export default ModalIndividual;