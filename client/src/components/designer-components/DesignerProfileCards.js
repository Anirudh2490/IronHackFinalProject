import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const DesignerProfileCards = props => (
  <Col sm={4}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../images/avatar.png" />
      <Card.Body>
        <Card.Title>{props.user.full_name}</Card.Title>
        <Card.Title>Email: {props.user.email}</Card.Title>
        <Card.Text>{props.designer.design_inspiration}</Card.Text>
        <Card.Text>I design and create → {props.designer.category_types}</Card.Text>
        <Button variant="outline-secondary">Edit Details</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default DesignerProfileCards;
