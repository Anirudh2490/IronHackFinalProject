import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ManufacturerProfileCard from "../ManufacturerComponents/ManufacturerProfileCard";
import OfferACollectionCard from "../ManufacturerComponents/OfferFabricCard";

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
          type: "Cotton",
          amount: "500 meters",
          available_from: "",
          available_till: "24/05/2019", //Optional field
          aboutFabric: "This is the fabric from processing scrap clothes" //Optional field
        }
      ]
    }
  };

  render() {
    return (
      <Container>
        <Row>
          {/* ------>  DesignerProfileCard*/}
          <ManufacturerProfileCard
            name={this.state.manufacturer.name}
            label={this.state.manufacturer.brandname}
            email={this.state.manufacturer.email}
            fabricsavailable={this.state.manufacturer.fabricsavailable}
          />
          {/* <------- */}
          {/* ------>  StartACollectionCard*/}
          <OfferACollectionCard />
          {/* <------- */}
        </Row>
      </Container>
    );
  }
}

export default ManufacturerDetails;
