// import React, { Component } from "react";
// import Form from "react-bootstrap/Form";
// import AuthService from "../components/auth/auth-service";
// import "../App.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";

// class ManufacturerPrivate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { user_id: '', description: "", quantity: "", unit_cost:"", deadlinedate: "", fabricType: "", error: false, fabricLists: [] };
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.service = new AuthService();
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
//   }

//   handleFormSubmit = event => {
//     event.preventDefault();
//     const formData = {
//       description: this.state.description,
//       quantity: this.state.quantity,
//       unit_cost: this.state.unit_cost,
//       deadlinedate: this.state.deadlinedate,
//       fabricType: this.state.fabricType
//     }

//     this.service
//       .createFabric(formData)
//       .then(response => {
//         this.getAllFabrics()
//       })
//       .catch(error => console.log(error));
//   }

//   handleChange = event => {
//     const { name, value } =  event.target;
//     this.setState({ [name]: value })
//   }

//   getAllFabrics() {
//     this.service
//         .listFabric()
//         .then(data => this.setState({ fabricLists: data}))    
//   }
   
//   componentDidMount() {
//     this.getAllFabrics();
//   }

//   render() {
//     console.log(this.state.loggedInUser);
//     const fabricListsItems = this.state.fabricLists.map((item) =>
//         <div className="fabric-listed-manufacturer-public">
//           <h5>{item.fabricType}</h5>
//           <div className="price">{item.unit_cost}€ /meter</div>
//           <div className="amount">{item.quantity} meter</div>
//           <div>{item.description}</div>
//         </div>
//       );
//     return (
//       <div className="manufacturer-private">
//         <div className="container">
//           <div className="row">
//             <div className="col-7">
//                 <div>
//                   <h3>{this.state.companyName}</h3>
//                   <div className="description">
//                     Description of the company (field to be fill when the
//                     manufacturer signs up) ! Blablablablablablablablablablabla.
//                   </div>
//                   <div>
//                     <h3>Fabric available</h3>
//                     {fabricListsItems}
//                   </div>
//               </div>
//             </div>

//             <div className="col-5">
//               <div className="list-fabrics">
//                 <h4 className="title-form">List of fabrics</h4>

//                 <Form onSubmit={this.handleFormSubmit}>
//                   <Form.Group required controlId="description">
//                     <Form.Label>Describe the fabric</Form.Label>
//                     <Form.Control required
//                       size="sm"
//                       type="textarea"
//                       placeholder="Description"
//                       name="description"
//                       value={this.state.description}
//                       onChange={e => this.handleChange(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="amount">
//                     <Form.Label>Amount of fabric</Form.Label>
//                     <Form.Control required
//                       size="sm"
//                       type="text"
//                       placeholder="How many meters do you have ? "
//                       name="quantity"
//                       value={this.state.quantity}
//                       onChange={e => this.handleChange(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="cost">
//                     <Form.Label>Cost of fabric</Form.Label>
//                     <Form.Control required
//                       size="sm"
//                       type="<text></text>"
//                       placeholder="Cost per meter in euros"
//                       name="unit_cost"
//                       value={this.state.unit_cost}
//                       onChange={e => this.handleChange(e)}
//                     />
//                   </Form.Group>

//                   <Form.Group>
//                     <Form.Label>Choose Fabric</Form.Label>
//                     <Form.Control required as="select" name="fabricType" value={this.state.fabricType} onChange={e => this.handleChange(e)}>
//                       <option>Select</option>
//                       <option>Denim</option>
//                       <option>Cotton</option>
//                       <option>Wool</option>
//                       <option>Velvet</option>
//                       <option>Leather</option>
//                     </Form.Control>
//                   </Form.Group>
//                   <input
//                     className="btn btn-secondary"
//                     type="submit"
//                     value="Submit"
//                   />
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default ManufacturerPrivate;