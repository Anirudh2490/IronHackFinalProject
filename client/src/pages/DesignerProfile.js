import React from "react";
import "../App.css";
import axios from "axios";
import DesignerDetails from "../components/designer-components/DesignerDetails";

const DesignerProfile = () => {
  // Will compose of the following components
  // Designer Name, Brand Name
  return (
    <div className="container">
      <DesignerDetails />
    </div>
  );
};

// brand / city / email

export default DesignerProfile;
