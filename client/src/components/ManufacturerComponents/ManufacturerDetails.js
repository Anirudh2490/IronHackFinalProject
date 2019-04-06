import React, { Component } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import ManufacturerProfileCard from "../ManufacturerComponents/ManufacturerProfileCard";
// import OfferACollectionCard from "../ManufacturerComponents/OfferFabricCard";
import FabricsOffered from './FabricsOffered';
import AuthService from '../auth/auth-service';
import Calendar from 'react-calendar'

class ManufacturerDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: null,
      userItem: {
        full_name:'',
        email:'',
      },
      manufacturer: [], 
      fabricsavailable: [],
      
        fabricType: '',
        quantity: '',
        unit_cost: '',
        plans: '',
        availableFrom: '',
        availableTill: '',
        man_id: '121'
      
    }
    this.service = new AuthService();
    this.handleChange = this.handleChange.bind(this);
    this.dateFrom = this.dateFrom.bind(this);
    this.dateTill = this.dateTill.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }  
    
  getUser() {
      this.service.getUser()
          .then(res => {
              this.setState( prevState => {
                  return {
                      userItem: {
                          ...prevState.userItem,
                          full_name: res.full_name,
                          email: res.email
                      }
                  }
              })
          })
          .catch(error => console.log(error));
    }

    getManufacturer() {
      this.service.getManufacturer()
          .then(res => {
              this.setState( prevState => {
                  return {
                      manufacturer: {
                          ...prevState.manufacturer,
                          businessname: res.businessname,
                          businesslogo: res.logo_path,
                          address: res.address,
                          city: res.city,
                          state: res.state,
                          country: res.country,
                          zip_code: res.zip_code,
                          about: res.about
                      }
                  }
              })
          }).catch(error => console.log(error))
  }

    componentDidMount() {
      this.getUser();
      this.getManufacturer();
      this.getManFabrics();
    }

    handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  dateFrom(date) {
      this.setState({ availableFrom: date })
  }

  dateTill(date) {
      this.setState({ availableTill: date })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    
    // const fd = new FormData();
    // fd.append('fabricType', this.state.fabricType)
    // fd.append('quantity', this.state.quantity)
    // fd.append('unit_cost', this.state.unit_cost)
    // fd.append('plans', this.state.plans)
    // fd.append('availableFrom', this.state.availableFrom)
    // fd.append('availableTill', this.state.availableTill)
    // fd.append('man_id', this.state.man_id)

    const fdd = { fabricType: this.state.fabricType, quantity: this.state.quantity,
      unit_cost: this.state.unit_cost, plans: this.state.plans, availableFrom: this.state.availableFrom,
      availableTill: this.state.availableTill }
    console.log("formdata" + fdd)
    this.service.createManFabric(fdd)
     .then(response => {
        this.getManFabrics()
        this.setState({
            fabricType: '',
            quantity: '',
            unit_cost: '',
            plans: '',
            availableFrom: '',
            availableTill: '',
            man_id: ''
        })
      }).catch((error) => {
          console.log("error: " + error);
      });

  }

  getManFabrics() {
    this.service.getManFabrics()
      .then(res => {
        this.setState({ fabricsavailable: res})
          // this.setState( prevState => {
          //     return {
          //         fabricsavailable: {
          //             ...prevState.fabricsavailable,
          //             fabricType: res.fabricType,
          //             quantity: res.quantity,
          //             unit_cost: res.unit_cost,
          //             plans: res.plans,
          //             availableFrom: res.availableFrom,
          //             availableTill: res.availableTill,
          //             design_inspiration: res.design_inspiration,
          //         }
          //     }
          // })
      }).catch(error => console.log(error))
  }

  getManufacturer() {
    this.service.getManufacturer()
      .then(res => {
        this.setState( prevState => {
            return {
              manufacturer: {
                  ...prevState.manufacturer,
                  brand_name: res.name_of_business,
                  address: res.address,
                  city: res.city,
                  state: res.state,
                  country: res.country,
                  zip_code: res.zip_code,
                  about: res.about,
                  businesslogo: res.logo_path
              }
            }
        })
    }).catch(error => console.log(error))
  }
 
  render() {
    return (
      <Container>
        <Row>
          <Col>{/* ------>  DesignerProfileCard*/}
          {this.state.manufacturer.brand_name}
          {this.state.userItem.email}
          <ManufacturerProfileCard
            name={this.state.userItem.full_name}
            label={this.state.manufacturer.brand_name}
            email={this.state.userItem.email}
            logo={this.state.manufacturer.businesslogo}
          />
          </Col>
          <Col>
          {/* <------- */}
          {/* ------>  StartACollectionCard*/}
          {/*<OfferACollectionCard />*/}
                <div>
        <h2>Sell your fabrics leftovers</h2>
        <br/>
        <Form onSubmit={this.handleFormSubmit}>
          <Row>
            <Col sm={6}>
                <Form.Group>
                  <Form.Label>Which fabric are you selling?</Form.Label>
                  <Form.Control
                    required
                    name="fabricType"
                    value={this.state.fabricType}
                    onChange={e => this.handleChange(e)}
                    as="select"
                  >
                    <option>Choose</option>
                    <option>Cotton</option>
                    <option>Denim</option>
                    <option>Wool</option>
                    <option>Linen</option>
                    <option>Velvet</option>
                    <option>Synthetic</option>
                  </Form.Control>
                </Form.Group>
            </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Quantity of fabric being sold ?</Form.Label>
                  <Form.Control
                    required
                    name="quantity"
                    value={this.state.quantity}
                    onChange={e => this.handleChange(e)}
                    type="input"
                  /> (In Meters)
                </Form.Group>
              </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Tell us the price of the fabric !</Form.Label>
                <Form.Control
                  name="unit_cost"
                  value={this.state.unit_cost}
                  onChange={e => this.handleChange(e)}
                  type="input"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group >
                <Form.Label>Describe the fabric you are selling</Form.Label>
                <Form.Control
                  name="plans"
                  value={this.state.plans}
                  onChange={e => this.handleChange(e)}
                  type="input"
                  placeholder="Optional"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
             <p>Fabric available from</p>{/*<DatePicker />*/}
             <Calendar onChange={this.dateFrom} value={this.state.availableFrom}/><br/>
             </Col>
             <Col>
             <p>Fabric available till</p>{/*<DatePicker />*/}
             <Calendar onChange={this.dateTill} value={this.state.availableTill}/><br/>
             </Col>
          </Row>
          <br/><br/>
          <Row>
            <Col>
              <Button type="submit" variant="outline-success">
                Add Fabric
              </Button>
            </Col>
          </Row>
        </Form>
        {/*<Row>
          <Col>
            <Form.Group controlId="finalOrder" />
            <p>
            </p>
            
          </Col>
        </Row>*/}
      </div>
          {/* <------- */}
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col>
          <h1>Fabrics Available</h1>
          </Col>
        </Row>
        <br/><br/><br/>
        <Row>
            <FabricsOffered fabrics={this.state.fabricsavailable.length > 0 ? this.state.fabricsavailable : []} />
        </Row>
      </Container>
    );
  }
}

export default ManufacturerDetails;
