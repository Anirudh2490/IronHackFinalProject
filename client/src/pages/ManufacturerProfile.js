import React from "react";
import "../App.css";
import axios from "axios";

import ManufacturerDetails from "../components/ManufacturerComponents/ManufacturerDetails";

const ManufacturerProfile = (props) => {
  return (
    <div className="container">
      <ManufacturerDetails userInSession={props.userInSession} />
    </div>
  );
};

export default ManufacturerProfile;
