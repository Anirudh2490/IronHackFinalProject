import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import Calendar from 'react-calendar';
import DatePicker from '../designer-components/DatePicker'


let fabricList = [];
const OfferFabricCard = props => (
  <div>
    <h2>Sell your fabrics leftovers</h2>
    <br/>
    <Row>
      <Col sm={6}>
          <Form.Group controlId="fabricType">
            <Form.Label>Which fabric are you selling?</Form.Label>
            <Form.Control
              required
              name="type"
              value={props.fabricType}
              onChange={e => props.fabricDetailsHandler(e)}
              as="select"
            >
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
          <Form.Group controlId="fabricQty">
            <Form.Label>Quantity of fabric being sold ?</Form.Label>
            <Form.Control
              required
              name="quantity"
              value={props.quantity}
              onChange={e => props.fabricDetailsHandler(e)}
              type="input"
            /> (In Meters)
          </Form.Group>
        </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group controlId="fabricType">
          <Form.Label>Tell us the price of the fabric !</Form.Label>
          <Form.Control
            name="cost"
            value={props.deadline}
            onChange={e => props.fabricDetailsHandler(e)}
            type="input"
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="fabricQty">
          <Form.Label>Describe the fabric you are selling</Form.Label>
          <Form.Control
            name="plans"
            value={props.plans}
            onChange={e => props.fabricDetailsHandler(e)}
            type="input"
            placeholder="Optional"
          />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
       <p>Fabric available from</p><DatePicker />
       </Col>
       <Col>
       <p>Fabric available till</p><DatePicker />
       </Col>
    </Row>
    <br/><br/>
    <Row>
      <Col>
        <Button onClick={props.addFabricHandler} variant="outline-success">
          Add Fabric
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group controlId="finalOrder" />
        <p>
        </p>
        <p>{fabricList.map(item => item)}</p>
      </Col>
    </Row>
  </div>
);

export default OfferFabricCard;
