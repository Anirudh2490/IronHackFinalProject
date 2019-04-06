import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import * as moment from 'moment';
import AuthService from '../auth/auth-service';
import Popup from "reactjs-popup";

const getSuppliers = (fabrics) => {
    const fabricTypes = []
    const service = new AuthService();

    fabrics.map((item, i) => {
        if(item.category)
            fabricTypes.push(item.category);
    });

    service.getSuppliers(fabricTypes)
        .then(res => {
            console.log(res)
            supplierModal(res);
        })
        .catch(error => console.log(error));

}

const supplierModal = () => (
    <Popup modal open={true}>
        <div>Popup content here !!</div>
    </Popup>
)

const OldCollectionRuns = (props) => 
    
    <div>
        <Row>
            <Col>
                <h3>{props.brandname}'s Collection Drives</h3>
            </Col>
        </Row>
            <br /><br /><br />
        <Row>
        {props.collection.map((item, i) => { 
            return(
                <Col key={i}>
                    <Card bg="light">
                        <Card.Header>Collection Launch Date - {moment(item.launchDate).format('DD-MMM-YYYY')}</Card.Header>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.about}
                            </Card.Text>
                            <Card.Text>{ 
                                item.fabrics.map((f, i) => {  return f.category +"-"+ f.amount + " Meters"}) }</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="outline-success" type="submit" onClick={() => getSuppliers(item.fabrics)}>Get Suppliers Email List</Button>
                        </Card.Footer>
                    </Card>
                </Col>               
            )
        })}
           
        </Row>
    </div>


export default OldCollectionRuns;
