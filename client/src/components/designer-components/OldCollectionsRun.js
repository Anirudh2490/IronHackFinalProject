import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';


const OldCollectionRuns = (props) => 
    <div>
        <Row>
            <Col>
                <h3>{props.brandname}'s Collection Drives</h3>
            </Col>
        </Row>
            <br /><br /><br />
        <Row>
            <Col>
                <Card bg="light">
                    <Card.Header>Last Day - {props.deadline}.</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.about}
                        </Card.Text>
                        <Card.Text>| Cotton - 125 meters | 120 meters of Wool |</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success">Get Suppliers Email List</Button>
                    </Card.Footer>
                </Card>                        
            </Col>
            <Col>
                <Card bg="light">
                    <Card.Header>Last Day - {props.deadline}.</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.about}
                        </Card.Text>
                        <Card.Text>| Cotton - 125 meters | 120 meters of Wool |</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success">Get Suppliers Email List</Button>
                    </Card.Footer>
                </Card>                        
            </Col>
                        <Col>
                <Card bg="light">
                    <Card.Header>Last Day - {props.deadline}.</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.about}
                        </Card.Text>
                        <Card.Text>| Cotton - 125 meters | 120 meters of Wool |</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success">Get Suppliers Email List</Button>
                    </Card.Footer>
                </Card>                        
            </Col>
        </Row>
    </div>

export default OldCollectionRuns;