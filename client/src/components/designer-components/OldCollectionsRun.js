import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';


const OldCollectionRuns = (props) => 
    <div>
        <Row>
            <Col>
                <Card bg="light">
                    <Card.Header>Last Day - {props.collectiondeadline}.</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.about}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success">25 Potential Suppliers</Button>
                    </Card.Footer>
                </Card>                        
            </Col>
        </Row>
    </div>

export default OldCollectionRuns;