import React, { Component } from "react";
import "./App.css";
// import ManufacturerPublic from "./pages/Manufacturer-public";
// import ManufacturerPrivate from "./pages/Manufacturer-private";
import DesignerProfile from "./pages/DesignerProfile";
// import DesignerPrivate from "./pages/Designer-profile-private";
import { Switch, Route } from "react-router-dom";
import AuthService from "./components/auth/auth-service";
import Home from "./pages/Home";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Concept from "./pages/Concept";
// import MyProfile from "./pages/MyProfile";
import ModalLogin from "./components/ModalLogin";
import ManufactureForm from "./forms/ManufactureForm";
import DesignerForm from "./forms/DesignerForm";
// import ProtectedRoute from "./components/auth/protected-route";
import ManufacturerProfile from "./pages/ManufacturerProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js";
    script.async = true;

    document.body.appendChild(script);
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
    }
    return (
      <div className="App">
        <NavbarHeader
          getUser={this.getTheUser}
          userInSession={this.state.loggedInUser}
        />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/" render={() => <Home getUser={this.getTheUser} />} />
          <Route exact path="/manufacturers" component={ManufacturerProfile} />
          <Route exact path="/login" render={() => <ModalLogin getUser={this.getTheUser} />} />
          {/* Two signup : one for designers, one for manufacturers */}
          <Route user={this.state.loggedInUser} exact path="/manufacturers" component={ManufacturerProfile} />
          <Route user={this.state.loggedInUser} exact path="/manufacturer-registration" component={ManufactureForm} />
          <Route user={this.state.loggedInUser} exact path="/designer-registration" component={DesignerForm} />
          {/* <ProtectedRoute user={this.state.loggedInUser} exact path="/manufacturers-private" component={ManufacturerPrivate} /> */}
          {/* <ProtectedRoute user={this.state.loggedInUser} exact path="/manufacturers-profile" component={ManufacturerProfile} /> */}
          {/*<Route user={this.state.loggedInUser} exact path="/designers-profile" component={DesignerProfile} />*/}
          <Route exact path="/designers-profile" render={(props) => <DesignerProfile {...props} userInSession={this.state.loggedInUser} />} />
          <Route exact path="/manufacturers-profile" render={(props) => <ManufacturerProfile {...props} userInSession={this.state.loggedInUser} />} />
          {/* <ProtectedRoute user={this.state.loggedInUser} exact path="/designers" component={DesignerPrivate} /> */}
          <Route exact path="/concept" component={Concept} />
          {/* <ProtectedRoute user={this.state.loggedInUser} exact path="/profile" component={MyProfile} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
