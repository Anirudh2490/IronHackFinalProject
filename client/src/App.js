import React, { Component } from "react";
import "./App.css";
import ManufacturerPublic from "./pages/Manufacturer-public";
import ManufacturerPrivate from "./pages/Manufacturer-private";
import DesignerProfile from "./pages/DesignerProfile";
import DesignerPrivate from "./pages/Designer-profile-private";
import { Switch, Route } from "react-router-dom";
import AuthService from "./components/auth/auth-service";
import Home from "./pages/Home";
import NavbarHeader from "./components/NavbarHeader";
import Footer from "./components/Footer";
import Concept from "./pages/Concept";
import MyProfile from "./pages/MyProfile";
import ModalLogin from "./components/ModalLogin";
import ManufactureForm from "./forms/ManufactureForm";
import DesignerForm from "./forms/DesignerForm";
import ProtectedRoute from "./components/auth/protected-route";
import ManufacturerProfile from "./pages/ManufacturerProfile";
import ManufacturerDetails from './components/ManufacturerComponents/ManufacturerDetails'

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
          <Route
            exact
            path="/"
            render={() => <Home getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/login"
            render={() => <ModalLogin getUser={this.getTheUser} />}
          />
          {/* Two signup : one for designers, one for manufacturers */}
          <Route exact path="/manufacturers" component={ManufacturerPublic} />
          <Route
            exact
            path="/manufacturer-registration"
            component={ManufactureForm}
          />
          <Route exact path="/designer-registration" component={DesignerForm} />
          <Route
            exact
            path="/manufacturers-private"
            component={ManufacturerDetails}
          />
          <Route
            exact
            path="/manufacturers-profile"
            component={ManufacturerDetails}
          />
          <Route exact path="/designers-profile" component={DesignerProfile} />
          <Route exact path="/designers" component={DesignerProfile} />
          <Route exact path="/concept" component={Concept} />
          <ProtectedRoute
            user={this.state.loggedInUser}
            exact
            path="/profile"
            component={MyProfile}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
