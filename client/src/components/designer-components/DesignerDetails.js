import React, { Component } from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import SampleGallery from './Gallery'
import DesignerProfileCards from './DesignerProfileCards'
import OldCollectionRuns from './OldCollectionsRun'
import StartACollectionCard from './StartACollectionCard'
import AuthService from '../auth/auth-service';

const DesignerGalleryCard = (props) => 
    <Row>
        <Col>
            <h3>{props.brand_name}'s Latest Designs</h3>
            <SampleGallery imagesList={props.images} />
        </Col>
    </Row>


class DesignerDetails extends Component {

    constructor(props) {
        super(props);
        this.state= {
            loggedInUser: null,
            userItem: {
                full_name:'',
                email:'janedoe@gmail.com',
            },
            designerItem: {    
                brandname: "Nico",
    			address: "123 Nico Default",
    			city: "Berlin",
    			state: "Berlin",
    			country: "Germany",
    			zipcode: "10553",
    			design_inspiration: "I like stripes, checked T-Shirts, Flannels and dope hoodies. Check out my collection!",
    			category_types: null,
                images: [],
                fabric_types: null
            },
            collections:[]
        };
        this.service = new AuthService();
    }

    getUser() {
        this.service.getUser()
            .then(res => {
                this.setState( prevState => {
                    return {
                        userItem: {
                            ...prevState.userItem,
                            full_name: res.full_name,
                            email: res.email
                        }
                    }
                })
            })
            .catch(error => console.log(error));
    }

    getDesigner() {
        this.service.getDesigner()
            .then(res => {
                if(res){
                    this.setState( prevState => {
                        return {
                            designerItem: {
                                ...prevState.designerItem,
                                brand_name: res.brand_name,
                                address: res.address,
                                city: res.city,
                                state: res.state,
                                country: res.country,
                                zip_code: res.zip_code,
                                design_inspiration: res.design_inspiration,
                                category_types: res.category_types,
                                fabric_types: res.fabric_types,
                                images: res.images
                            }
                        }
                    })                    
                }else{
                    // alert("logout and login through designer signup");
                }
            }).catch(error => console.log(error))
    }

    getCollection() {
        this.service.getCollection()
            .then(res => {
                this.setState({ collections: res })
            })
    }

    componentDidMount() {
        this.getUser();
        this.getDesigner();
        this.getCollection();
    }

    render() {
        return (
            <Container>
                    <Row>
                        {/* ------>  DesignerProfileCard*/}
                        <DesignerProfileCards user={this.state.userItem}  designer={this.state.designerItem} />
                    {/*<DesignerProfileCards name={this.state.userItem.full_name} label={this.state.designerItem.brandname} email={this.state.designerItem.email} design_inspiration={this.state.designer.design_inspiration} product_types={this.state.designer.product_types.map((product,index) => {return (" " + product + " |")})} />*/}
                        {/* <------- */}
                        {/* ------>  StartACollectionCard*/}
                        <StartACollectionCard />
                        {/* <------- */}
                    </Row>
                    <br/><br/>
                    {/* DesignerGalleryCard --------> */}
                    <DesignerGalleryCard brand_name={this.state.designerItem.brand_name} images={this.state.designerItem.images} />
                    {/* <------- */}
                    <br></br><br></br>
                    {/* OldCollectionRuns --------> */}
                    <OldCollectionRuns brandname={this.state.designerItem.brand_name} collection={this.state.collections.length > 0 ? this.state.collections : []} />

                    {/*<OldCollectionRuns brandname={this.state.designerItem.brand_name} deadline={this.state.designerItem.collections[0].fabrics[0].collectiondeadline} name={this.state.designerItem.collections[0].name} about={this.state.designerItem.collections[0].about}/>*/}
                    </Container>
        )
    }
}

export default DesignerDetails;
