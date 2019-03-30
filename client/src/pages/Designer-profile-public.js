import React, { Component } from "react";
import "../App.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

class DesignerPublic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: [],
      city: "",
      brand: "",
      email: ""
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3001/api/list-designers")
      .then(res => {
        console.log('designer test', res)
        this.setState({ designers: res.data })
      })
  }
  render() {
    console.log('TEST2', this.state.designers)
    return (

      // <div className="container">
      //   {this.state.designers &&
      //     this.state.designers.map(a =>
      //       <h1>{a.user.username}</h1>
      //     )
      //   }
      // </div>
      <Container>
        <h2>Get in touch with designers right now ! </h2>
        <Row>
          <Col>
            {this.state.manufacturers.map(m => {
              return (
                <Card style={{ width: "18rem" }}>
                  <div className="card">
                    <img className="card-img-top" alt="designer" />
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-name">{props.name}</h5> */}
                    {/* <p className="card-text">{props.text}</p> */}
                    {/* </div> */}
                    {/* <div className="card-body">{props.signUpLink}</div> */}
                  </div>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

// brand / city / email

export default DesignerPublic;
