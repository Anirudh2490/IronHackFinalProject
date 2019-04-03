import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

let fabricList = [];
const OfferFabricCard = props => (
  <div>
    <Row>
      <Col sm={6}>
        <h2>Sell your fabrics leftovers</h2>
        <Row>
          <Form.Group controlId="fabricType">
            <Form.Label>Which fabric would you like to buy?</Form.Label>
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
        </Row>
      </Col>
      <Row>
        <Col>
          <Form.Group controlId="fabricQty">
            <Form.Label>How many meters are you selling ?</Form.Label>
            <Form.Control
              required
              name="quantity"
              value={props.quantity}
              onChange={e => props.fabricDetailsHandler(e)}
              type="input"
            />
          </Form.Group>
        </Col>
      </Row>
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
    </Row>
    <Row>
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
    <br />
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
          <strong>Total Fabric Needed</strong>
        </p>
        <p>{fabricList.map(item => item)}</p>
      </Col>
    </Row>
    </div>
);

export default OfferFabricCard;
