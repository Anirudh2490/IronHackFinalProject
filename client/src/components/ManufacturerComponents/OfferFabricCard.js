import DatePicker from '../designer-components/DatePicker'
import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Calendar from 'react-calendar'
import AuthService from '../auth/auth-service';

class OfferFabricCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
    
    const fd = new FormData();
    fd.append('fabricType', this.state.fabricType)
    fd.append('quantity', this.state.quantity)
    fd.append('unit_cost', this.state.unit_cost)
    fd.append('plans', this.state.plans)
    fd.append('availableFrom', this.state.availableFrom)
    fd.append('availableTill', this.state.availableTill)
    fd.append('man_id', this.state.man_id)

    console.log("formdata" + JSON.stringify(fd))

    // this.service.createManFabric(fd)
    // .then(res => {
    //     console.log(res);
    //     this.props.history.push('/profile')
    //   })
    //   .catch(error => {
    //     console.log("No" + error);
    //   });
     // .then(response => {
     //    console.log(response)
     //    this.setState({
     //        fabricType: '',
     //        quantity: '',
     //        unit_cost: '',
     //        plans: '',
     //        availableFrom: '',
     //        availableTill: '',
     //        man_id: ''
     //    })
     //  }).catch((error) => {
     //      console.log("error: " + error);
     //  });

  }

  render() {
    return (
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
             {/*<Calendar onChange={this.dateFrom} value={this.state.availableFrom}/><br/>*/}
             </Col>
             <Col>
             <p>Fabric available till</p>{/*<DatePicker />*/}
             {/*<Calendar onChange={this.dateTill} value={this.state.availableTill}/><br/>*/} 
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
    )
  }
}

export default OfferFabricCard;
