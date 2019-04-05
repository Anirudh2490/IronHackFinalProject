import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import AuthService from "../components/auth/auth-service";
import content from '../text.json'
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api';

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
      logo: null,
      service: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileSelectHandler = this.fileSelectHandler.bind(this);
    this.service = new AuthService();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  fileSelectHandler = event => {
    this.setState({
        logo: event.target.files[0]
    })
  }

  handleFormSubmit(event) { 
    event.preventDefault();
    const fd = new FormData();
    fd.append('logo', this.state.logo, this.state.logo.name)
    fd.append('name_of_business', this.state.business_name)
    fd.append('address', this.state.address)
    fd.append('city', this.state.city)
    fd.append('zip_code', this.state.zip_code)
    fd.append('state', this.state.state)
    fd.append('country', this.state.country)
    fd.append('service', this.state.service)

    this.service.createManufacturer(fd)
    .then(res => {
        console.log(res);
        this.props.history.push('/profile')
      })
      .catch(error => {
        console.log("No" + error);
      });
      // .then((response) => {
      //   this.props.history.push('/profile')
      //   console.logo(response)
      //     }).catch((error) => {
      //       console.log("error: " + error);
      //   });
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
                  onChange={this.fileSelectHandler}
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
