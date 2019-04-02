import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker';
import RequiredFabrics from './RequiredFabrics';
import AuthService from "../../components/auth/auth-service"


class AddFabricCard extends Component {
    constructor() {
        super()
        this.state = {
            fabricType: "",
            quantity: "",
            deadline: new Date(),
            plans: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.service = new AuthService();
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    dateHandler = date => this.setState({ deadline: date })

    handleFormSubmit(event) {
        event.preventDefault();

        const formData = {
            fabricType: this.state.fabricType,
            quantity: this.state.quantity,
            plans: this.state.plans,

        };
        this.service
            .createFabric(formData)
            .then(res => {
                console.log(formData);
                this.props.history.push('/profile')
            })
            .catch(error => {
                console.log("No" + error);
            });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="fabricType">
                                <Form.Label>Which fabric would you like to buy?</Form.Label>
                                <Form.Control required name="fabricType" value={this.state.fabricType} onChange={e => this.handleChange(e)} as="select">
                                    <option>Cotton</option>
                                    <option>Denim</option>
                                    <option>Wool</option>
                                    <option>Linen</option>
                                    <option>Synthetic</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="fabricQty">
                                <Form.Label>How much fabric would you like?</Form.Label>
                                <Form.Control required name="quantity" value={this.state.quantity} onChange={e => this.handleChange(e)} type='input'></Form.Control>meters
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="fabricType">
                                <Form.Label>By when would you need the fabric?</Form.Label>
                                <Calendar required onChange={this.dateHandler} value={this.state.deadline} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="fabricQty">
                                <Form.Label>How do you plan to use it?</Form.Label>
                                <Form.Control name="plans" value={this.state.plans} onChange={e => this.handleChange(e)} type='input' placeholder='Optional'></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <Button type="submit">Add Fabric</Button>
                            {/* fabricList.push(<RequiredFabrics type={this.state.fabricType} quantity={this.state.quantity}/>)} variant="outline-success">*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="finalOrder" />
                            <p><strong>Total Fabric Needed</strong></p>
                            <RequiredFabrics type={this.state.fabricType} quantity={this.state.quantity} />>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}





export default AddFabricCard;