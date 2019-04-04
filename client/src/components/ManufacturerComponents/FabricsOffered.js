import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';


const FabricsOffered = (props) => 
    <div>
        <Row>
            <Col>
                <Card bg="light">
                    <Card.Header>Available from - {props.availableFrom} <br/> Available till - {props.availableTill} </Card.Header>
                    <Card.Body>
                        <Card.Title>{props.fabrictype}</Card.Title>
                        <Card.Text>
                            {props.aboutFabric}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success">Offer To Interested Designers</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    </div>

export default FabricsOffered;