import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
// import Calendar from './DatePicker';
import Calendar from 'react-calendar'
import RequiredFabric from './RequiredFabrics';


class AddFabricCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category:"",
            amount:"",
            collectiondeadline: new Date(),
            plans:""
        };
        this.dateHandler = this.dateHandler.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addFabric(this.state)
    }

    dateHandler(date) {
        console.log(date);
        this.setState({ collectiondeadline: date })
    }
   

    // handleFormSubmit(event) {
    //     event.preventDefault();

    //     // const formData = {
    //     //     fabricType: this.state.fabric.type,
    //     //     amount: this.state.fabric.amount,
    //     //     quantity: this.state.fabric.quantity,
    //     //     plans: this.state.fabric.plans,

    //     // };
    //     this.service
    //         .createFabric(formData)
    //         .then(res => {
    //             console.log(formData);
    //             this.props.history.push('/profile')
    //         })
    //         .catch(error => {
    //             console.log("No" + error);
    //         });
    // }

    render() {
        console.log(this.state)
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="category">
                                <Form.Label>Which fabric would you like to buy?</Form.Label>
                                <Form.Control required name="category" value={this.state.category} onChange={e => this.handleChange(e)} as="select">
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
                                <Form.Control required name="amount" value={this.state.amount} onChange={e => this.handleChange(e)} type='text'></Form.Control>meters
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="date">
                                <Form.Label>By when would you need the fabric?</Form.Label>
                                <Calendar required onChange={this.dateHandler} value={this.state.collectiondeadline} name="collectiondeadline" />
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="fabricPlan">
                                    <Form.Label>How do you plan to use it?</Form.Label>
                                    <Form.Control name="plans" value={this.state.plans} onChange={e => this.handleChange(e)} type='text' placeholder='Optional'></Form.Control>
                                </Form.Group>
                            </Col>
                    </Row><br/>
                    <Row>
                        <Col>
                            <Button type="submit" variant="outline-success">Add Fabric</Button>
                                {/* fabricList.push(<RequiredFabric type={this.state.type} amount={this.state.amount}/>)} variant="outline-success">*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="finalOrder" />
                            <p><strong>Total Fabric Needed</strong></p>
                            <RequiredFabric category={this.state.category} amount={this.state.amount}/>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
export default AddFabricCard;