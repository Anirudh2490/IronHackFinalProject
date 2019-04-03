import React, {Component} from 'react';
import AddFabricCard from './AddFabricCard';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
// import Calendar from './DatePicker';
import Calendar from 'react-calendar'
import RequiredFabrics from './RequiredFabrics';
import AuthService from '../auth/auth-service';

class StartACollectionCard extends Component {

    constructor(props) {
        super(props);
        this.state={
            fabrics:[{category: "", amount: "", plans:"" }],
            collectionName:"",
            aboutCollection:'',
            launchDate:''
        }
        this.dateHandler = this.dateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.service = new AuthService();
    }

    totalCount = () => this.state.fabrics.length

    dateHandler(date) {
        this.setState({ launchdate: date })
    }

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value});
    }
    
    addFabrics = (fabric) => {
        this.setState( prevState => {
            return {
                fabrics: [
                ...prevState.fabrics,
                    fabric
                ]
            }
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const formData = {
            fabrics: this.state.fabrics,
            collectionName: this.state.collectionName,
            aboutCollection: this.state.aboutCollection,
            launchdate: this.state.launchdate
        }

        console.log("form" + JSON.stringify(formData));
        this.service.createCollection(formData)
            .then(res => {
                console.log("success" + res);
                this.setState({
                    collectionName: '',
                    aboutCollection: '',
                    launchdate: '',
                    fabrics: []
                })
            })
            .catch(error => {
                console.log("error" + error);
            });
    }



    render() {
        return(
            <Col sm={8}>
                <Card>
                    <h2>Start A Fabric Collection Drive</h2>
                        {/* ------>  AddFabricCard*/}
                        <AddFabricCard count={this.totalCount} addFabric={this.addFabrics}/>
                        {console.log("fabricSubmissions" + this.state.fabrics.length)}
                        {console.log(this.state.fabrics)}
                        <Row>
                            <Col>
                                <Form.Group controlId="finalOrder" />
                                <p><strong>Total Fabric Needed</strong></p>
                                <RequiredFabrics fabric={this.state.fabrics} />
                            </Col>
                        </Row>
                
                        {/* fabricType={this.state.fabric.type} quantity={this.state.fabric.amount} collectiondeadline={this.state.fabric.collectiondeadline} plans={this.state.fabric.plans}*/}
                    <Form onSubmit={this.handleFormSubmit}>
                        <Row>
                            <Col>    
                                <h4><Form.Control required name="collectionName" value={this.state.collectionName} onChange={e => this.handleChange(e)} type='text' placeholder='Name of your upcoming Collection'></Form.Control></h4>
                                <Form.Control required name="aboutCollection" value={this.state.aboutCollection} onChange={e => this.handleChange(e)} type='text' placeholder='What was your inpiration behind this collection?'></Form.Control>
                            </Col>
                        </Row>
                        <br />
                        <Form.Label>Approximately what date will you launch your collection?</Form.Label>
                        <Calendar onChange={this.dateHandler} value={this.state.launchdate}/><br/>
                        <Button type="submit" variant="primary">Start Collection Drive</Button>
                    </Form>
                </Card>
            </Col>
        )
    }
}


export default StartACollectionCard;