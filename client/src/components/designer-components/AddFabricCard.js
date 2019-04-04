import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Calendar from 'react-calendar'


class AddFabricCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category:"",
            amount:"",
            plans:""
        };
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addFabric(this.state)
        this.setState({
            category: '',
            amount: '',
            plans: ''
        })
    }

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
                                    <option>Choose</option>
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
                            <Form.Group controlId="fabricPlan">
                                <Form.Label>How do you plan to use it?</Form.Label>
                                <Form.Control name="plans" value={this.state.plans} onChange={e => this.handleChange(e)} type='text' placeholder='Optional'></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col>
                            <Button type="submit" variant="outline-success">Add Fabric</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
export default withRouter(AddFabricCard);
