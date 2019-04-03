import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker';
import RequiredFabric from './RequiredFabrics';


class AddFabricCard extends Component {
    state = {
        fabric: {
            type:"",
            amount:"",
            collectiondeadline: new Date(),
            plans:""
    }};

    handleChange = (event) => {
        event.preventDefault();
		const { name, value } = event.target;
		this.setState({ [name]: value });
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addPlayer(this.state.value);
    //     this.setState({ value: '' });
    //   }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFabric(this.state.fabric)
    }

    dateHandler = date => this.setState({ collectiondeadline: date })
   

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
                            <Form.Group controlId="type">
                                <Form.Label>Which fabric would you like to buy?</Form.Label>
                                <Form.Control required name="type" value={this.state.fabric.type} onChange={this.handleChange} as="select">
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
                                <Form.Control required name="amount" value={this.state.fabric.amount} onChange={this.handleChange} type='text'></Form.Control>meters
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="type">
                                <Form.Label>By when would you need the fabric?</Form.Label>
                            <Calendar required onChange={this.dateHandler} /*value={this.state.fabric.collectiondeadline}*//>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="fabricPlan">
                                        <Form.Label>How do you plan to use it?</Form.Label>
                                        <Form.Control name="plans" /*value={this.state.fabric.plans}*/ onChange={e => this.handleChange(e)} type='text' placeholder='Optional'></Form.Control>
                                    </Form.Group>
                                </Col>
                    </Row><br/>
                    <Row>
                        <Col>
                            <Button variant="outline-success" onClick={(e) => this.handleSubmit(e)}>Add Fabric</Button>
                                {/* fabricList.push(<RequiredFabric type={this.state.type} amount={this.state.amount}/>)} variant="outline-success">*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="finalOrder" />
                            <p><strong>Total Fabric Needed</strong></p>
                            <RequiredFabric type={this.state.type} amount={this.state.amount}/>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
export default AddFabricCard;