import React, { Component } from "react";
import AuthService from "../components/auth/auth-service";
import "../App.css";
import content from "../text.json";

class DesignerPrivate extends Component {
  
  constructor(props) {
    super(props);
    this.state = { listOfDesigners: [] };
    this.service = new AuthService();
  }

  getPrivateDesigners = () => {
    this.service.listPrivateDesigners()
      .then(responseFromApi => {
        this.setState({listOfDesigners: responseFromApi})
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getPrivateDesigners();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="register-title">
            <h2>My profile page</h2>
          </div>
          <div className="row">
            { this.state.listOfDesigners.map( designer => {
              return (
                <div className="profile-block" >
                  <h5 className="brand">Brand : {designer.brand_name}</h5>
                  <h5 className="address">Address :{designer.address}</h5>
                  <h5 className="city">City :{designer.city}</h5>
                  <h5 className="state">State :{designer.state}</h5>
                  <h5 className="country">Country :{designer.country}</h5>
                  <h5 className="design_inspiration">
                    Designs inspiration :{designer.designer_inspiration}
                  </h5>
                  <h5 className="product_types">
                    Products :{designer.product_types}
                  </h5>
                  <h5 className="image_gallery">
                    Images :<img src={"http://localhost:3001/" + designer.images[0]} width="100" height="100"/>
                    <img src={"http://localhost:3001/" + designer.images[1]} width="100" height="100"/>
                  </h5>
                  <h5 className="category_types">
                    Categories :{designer.category_types}
                  </h5>
                  <h5 className="source">Type of fabrics :{designer.fabric_types}</h5>
                </div>
              )})
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DesignerPrivate;
