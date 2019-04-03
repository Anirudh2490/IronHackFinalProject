import React, { Component } from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import SampleGallery from './Gallery'
import DesignerProfileCards from './DesignerProfileCards'
import OldCollectionRuns from './OldCollectionsRun'
import StartACollectionCard from './StartACollectionCard'

const DesignerGalleryCard = (props) => 
    <Row>
        <Col>
            <h3>{props.brandname}'s Latest Designs</h3>
            <SampleGallery /><SampleGallery />
        </Col>
    </Row>


class DesignerDetails extends Component {
    state= {
        designer: {
            name:'Jane Doe',
            email:'janedoe@gmail.com',
            brandname: "Nico",
			address: "123 Nico Default",
			city: "Berlin",
			state: "Berlin",
			country: "Germany",
			zipcode: "10553",
			design_inspiration: "I like stripes, checked T-Shirts, Flannels and dope hoodies. Check out my collection!",
			product_types: ["Flannels", "Shirts", "Hoodies"],
            product_gallery: "imgsrc",
            collections:[
                {
                    name:"Summer Is Coming",
                    about:"What else is there to know?",
                    fabrics:[
                        {
                        type:"Cotton",
                        amount:"45 meters",
                        date_created:"11/02/2019",
                        collectiondeadline:"24/05/2019",
                        plans:"Using it for some light summer clothes"
                    },
                    {
                        type:"Wool",
                        amount:"145 meters",
                        date_created:"11/02/2019",
                        collectiondeadline:"24/05/2019",
                        plans:"Use it for some winter clothes"
                    },
                    {
                        type:"Linen",
                        amount:"45 meters",
                        date_created:"11/02/2019",
                        collectiondeadline:"24/05/2019",
                        plans:"Use it for some warm khakhees"
                    },
                    {
                        type:"Synthetics",
                        amount:"45 meters",
                        date_created:"11/02/2019",
                        collectiondeadline:"24/05/2019",
                        plans:"Not sure yet"
                    }
                    ]        
                }
            ]
        }  
    };

    render() {
        return (
            <Container>
                    <Row>
                        {/* ------>  DesignerProfileCard*/}
                        <DesignerProfileCards name={this.state.designer.name} label={this.state.designer.brandname} email={this.state.designer.email} design_inspiration={this.state.designer.design_inspiration} product_types={this.state.designer.product_types.map((product,index) => {return (" " + product + " |")})} />
                        {/* <------- */}
                        {/* ------>  StartACollectionCard*/}
                        <StartACollectionCard />
                        {/* <------- */}
                    </Row>
                    <br/><br/>
                    {/* DesignerGalleryCard --------> */}
                    <DesignerGalleryCard brandname={this.state.designer.brandname}/>
                    {/* <------- */}
                    <br></br><br></br>
                    {/* OldCollectionRuns --------> */}
                    <OldCollectionRuns brandname={this.state.designer.brandname} collectiondeadline={this.state.designer.collections[0].fabrics[0].collectiondeadline} name={this.state.designer.collections[0].name} about={this.state.designer.collections[0].about}/>
            </Container>
        )
    }
}

export default DesignerDetails;
