import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ManufacturerProfileCard from "../ManufacturerComponents/ManufacturerProfileCard";
import OfferACollectionCard from "../ManufacturerComponents/OfferFabricCard";
import FabricsOffered from './FabricsOffered';


class ManufacturerDetails extends Component {
  state = {
    manufacturer: {
      name: "Arun Rao",
      email: "arunrao@gmail.com",
      businessname: "AR Enterprises",
      businesslogo: "",
      address: "123 AR Default",
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      zipcode: "10553",
      about: "I like stripes",
      fabricsavailable: [
        {
          type: "Wool",
          amount: "200 meters",
          availableFrom: "Dec 12th, 2018",
          availableTill: "24/05/2019", //Optional field
          aboutFabric: "This is the fabric from processing scrap clothes" //Optional field
        },
        {
          type: "Nylon",
          amount: "120 meters",
          availableFrom: "Dec 21st, 2018",
          availableTill: "24/05/2019", //Optional field
          aboutFabric: "This is the fabric from disposed winterwear" //Optional field
        },
        {
          type: "Wool",
          amount: "600 meters",
          availableFrom: "Jan 18th, 2019",
          availableTill: "24/05/2019", //Optional field
          aboutFabric: "This is the fabric from processing scrap clothes" //Optional field
        }
      ]
    }
  };

  

  render() {
    return (
      <Container>
        <Row>
          <Col>{/* ------>  DesignerProfileCard*/}
          <ManufacturerProfileCard
            name={this.state.manufacturer.name}
            label={this.state.manufacturer.brandname}
            email={this.state.manufacturer.email}
            fabricsavailable={this.state.manufacturer.fabricsavailable}
          />
          </Col>
          <Col>
          {/* <------- */}
          {/* ------>  StartACollectionCard*/}
          <OfferACollectionCard />
          {/* <------- */}
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col>
          <h1>Fabrics Available</h1>
          </Col>
        </Row>
        <br/><br/><br/>
        <Row>
        {this.state.manufacturer.fabricsavailable.map((fabric, index) =>
            <Col><FabricsOffered fabrictype={fabric.type} availableFrom={fabric.availableFrom} availableTill={fabric.availableTill} aboutFabric={fabric.aboutFabric}/></Col>
            )}
        </Row>
      </Container>
    );
  }
}

export default ManufacturerDetails;
