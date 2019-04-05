import React from "react";
import "../App.css";
import axios from "axios";
import DesignerDetails from "../components/designer-components/DesignerDetails";

const DesignerProfile = (props) => {
  // Will compose of the following components
  // Designer Name, Brand Name
  return (
    <div className="container">
      <DesignerDetails userInSession={props.userInSession} />
    </div>
  );
};

// brand / city / email

export default DesignerProfile;
