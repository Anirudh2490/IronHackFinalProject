import React, {Component} from 'react';
import AddFabricCard from './AddFabricCard';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';
import Calendar from './DatePicker';
import RequiredFabrics from './RequiredFabrics';


// const aboutFabric = () => {
//     this.state.fabrics.map((fabric, id) => {
//         <RequiredFabrics key={id} type={fabric.type}/>
//     }
//     )
// }

class StartACollectionCard extends Component {
    state={
        fabrics:[{
            type:"Cotton",
            amount:"45 meters",
            collectiondeadline:"24/05/2019",
            plans:"Using it for some light summer clothes"
        },
        {
            type:"Wool",
            amount:"145 meters",
            collectiondeadline:"24/05/2019",
            plans:"Use it for some winter clothes"
        }],
        collectionName:"",
        aboutCollection:'',
        launchDate:''
    }

    totalCount = () => this.state.fabrics.length


    dateHandler = date => this.setState({ launchdate: date })

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
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

    // handleAddPlayer = (name) => {
    //     this.setState( prevState => {
    //       return {
    //         players: [
    //           ...prevState.players,
    //           {
    //             name,
    //             score: 0,
    //             id: this.prevPlayerId += 1
    //           }
    //         ]
    //       };
    //     });
    //   }

    render() {
        return(
            <Col sm={8}>
                <Card>
                    <h2>Start A Fabric Collection Drive</h2>
                    <Form>
                        {/* ------>  AddFabricCard*/}
                        <AddFabricCard count={this.totalCount} addFabric={this.addFabrics}/>
                        {console.log("fabricSubmissions" + this.state.fabrics.length)}
                        {console.log(this.state.fabrics)}
                
                        {/* fabricType={this.state.fabric.type} quantity={this.state.fabric.amount} collectiondeadline={this.state.fabric.collectiondeadline} plans={this.state.fabric.plans}*/}
                        <Row>
                            <Col>    
                                <h4><Form.Control name="collectionName" value={this.state.collectionName} onChange={e => this.handleChange(e)} type='input' placeholder='Name of your upcoming Collection'></Form.Control></h4>
                                <Form.Control name="aboutCollection" type='input' placeholder='What was your inpiration behind this collection?'></Form.Control>                                    
                            </Col>
                        </Row>
                    </Form>
                    <br/>
                    <Form>
                        <Form.Label>Approximately what date will you launch your collection?</Form.Label>
                        <Calendar onChange={this.dateHandler} value={this.state.launchdate}/><br/>
                        <Button variant="primary">Start Collection Drive</Button>
                    </Form>
                </Card>
            </Col>
        )
    }
}


export default StartACollectionCard;