import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import AuthService from "../components/auth/auth-service";
import content from '../text.json'

class ManufactureForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      business_name: "",
      address: "",
      city: "",
      zip_code: "",
      state: "",
      country: "",
      logo: "",
      service: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.service = new AuthService();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const formData = {
      business_name: this.state.business_name,
      address: this.state.address,
      city: this.state.city,
      zip_code: this.state.zip_code,
      state: this.state.state,
      country: this.state.country,
      logo: this.state.logo,
      service: this.state.service
    };
    this.service
      .createManufacturer(formData)
      .then(response => {
        console.log("yes", response);
        this.props.history.push('/profile')
      })
      .catch(error => {
        console.log("error: " + error);
      });
  }

  render() {

    return (
      <div className="row">
        <div className="manufacturer-registration">
          <Form onSubmit={this.handleFormSubmit}>
            <div className="register-title">
              <h2>Register as a manufacturer</h2>
            </div>

            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Name of your business</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="business_name"
                  value={this.state.business_name}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="zip_code"
                  value={this.state.zip_code}
                  onChange={e => this.handleChange(e)}
                />
                {isNaN(this.state.zip_code) ? <p className='error-message' > {content.errorMessage.errorMessageZipCode}</p> : ''}
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="state"
                  value={this.state.state}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  as="select"
                  name="country"
                  value={this.state.country}
                  onChange={e => this.handleChange(e)}
                >
                  <option>Choose...</option>
                  <option>Germany</option>
                  <option>Great Britain</option>
                  <option>Sweden</option>
                  <option>Spain</option>
                  <option>Poland</option>
                  <option>Greece</option>
                  <option>Russia</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>France</option>
                  <option>Denmark</option>
                  <option>Portugal</option>
                  <option>Finland</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Upload the logo of your business</Form.Label>
                <Form.Control
                  required
                  type="file"
                  name="logo"
                  value={this.state.logo}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Tell designers about your services</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="service"
                  value={this.state.service}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Create List{" "}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default ManufactureForm;
