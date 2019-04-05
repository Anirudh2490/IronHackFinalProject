import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';


const FabricsOffered = (props) => 
    <div>
        <Row>
            {props.fabrics.map(f => {
                return(
                    <Col>
                    <Card bg="light">
                        <Card.Header>Available from - {f.availableFrom} <br/> Available till - {f.availableTill} </Card.Header>
                        <Card.Body>
                            <Card.Title>{f.fabricType}</Card.Title>
                            <Card.Text>
                                {f.about}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-success">Offer To Interested Designers</Button>
                        </Card.Footer>
                    </Card>
                </Col>
                )
            })}
        </Row>
    </div>

export default FabricsOffered;