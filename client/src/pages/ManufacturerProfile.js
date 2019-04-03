import React from "react";
import "../App.css";
import axios from "axios";
import ManufacturerDetails from "../components/ManufacturerComponents/ManufacturerDetails";

const ManufacturerProfile = () => {
  // Will compose of the following components
  // Manufacturer Name, Brand Name
  return (
    <div className="container">
      <ManufacturerDetails />
    </div>
  );
};

export default ManufacturerProfile;
