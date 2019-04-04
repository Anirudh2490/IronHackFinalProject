import React, { Component } from "react";
import "../App.css";
import AuthService from "../components/auth/auth-service";

//import AuthService from './auth-service';

class ManufacturerPublic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fabricLists: []
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    return this.service
      .listFabric()
      .then(data => this.setState({ fabricLists: data }));
  }

  render() {
    const fabricListsItems = this.state.fabricLists.map((item, index) => (
      <div className="fabric-listed-manufacturer-public" key={index}>
        <h5>{item.fabricType}</h5>
        <div className="price">{item.unit_cost}€ /meter</div>
        <div className="amount">{item.quantity} meter</div>
        <div>{item.description}</div>
      </div>
    ));
    return (
      <div>
        <div className="manufacturer-public">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div>
                  <h3>Rayban Factory LTD</h3>
                  <div className="description">
                    About the company ! Blablablablablablablablablablabla.
                  </div>
                  <div>
                    <h3>Fabric available</h3>
                    {fabricListsItems}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <h4 className="send-message-title-manufacturer-public">
                  Send a message to the user
                </h4>
                <form>
                  <textarea
                    className="form-control send-message-box-manufaturer-public"
                    aria-label="With textarea"
                  />
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManufacturerPublic;
