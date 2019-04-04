import React, { Component } from "react";
import { MDBFileInput } from "mdbreact";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import AuthService from "../components/auth/auth-service";
import { withRouter } from 'react-router-dom';
import content from '../text.json'

class DesignerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			brand_name: "",
			address: "",
			city: "",
			state: "",
			zipcode: "",
			country: "",
			design_inspiration: "",
			product_types: "",
			image_gallery: null,
			accessories: false,
			pants: false,
			shirts: false,
			jackets: false,
			leftOverFabric: false,
			cotton: false,
			wool: false,
			denim: false,
			leather: false,
			synthetics: false,
			velvet: false,
			muslin: false
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		// this.fileSelectHandler = this.fileSelectHandler.bind(this);
		this.service = new AuthService();
	}

	fileSelectHandler = event => {
		// console.log(event.target.files);
		// let images = []
		// for (var i = 0; i < event.target.files.length; i++) {
			 // console.log(event.target.files.item(i));
		// 	images.push(event.target.files.item(i).name);
		// }
		// console.log(images)
		// images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
		// let message = `${images.length} valid image(s) selected`
		this.setState({ image_gallery: event.target.files })
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const category_types = []
		const categoriesArray = ["accessories", "pants", "shirts", "jackets", "leftOverFabric"].forEach((catName) => {
			if (this.state[catName]) category_types.push(catName)
		})
		const fabric_types_array = []
		const fabricArray = ["cotton", "wool", "denim", "leather", "synthetics", "velvet", "muslin"].forEach((fabName) => {
			if (this.state[fabName]) fabric_types_array.push(fabName)
		})
		
		const fd = new FormData();

		for(var x=0; x<this.state.image_gallery.length; x++) {
			fd.append('image_gallery', this.state.image_gallery[x])
		}

    fd.append('brand_name', this.state.brand_name)
    fd.append('address', this.state.address)
    fd.append('city', this.state.city)
    fd.append('zip_code', this.state.zip_code)
    fd.append('state', this.state.state)
    fd.append('country', this.state.country)
    fd.append('service', this.state.service)
    fd.append('design_inspiration', this.state.design_inspiration)
    fd.append('product_types', this.state.product_types)
    fd.append('category_types', category_types)
    fd.append('fabric_types', fabric_types_array)


		this.service
			.createDesigner(fd)
			.then(res => {
				console.log(res);
				this.props.history.push('/profile')
			})
			.catch(error => {
				console.log("No" + error);
			});
	}

	render() {
		return (
			<div className="row">
				<div className="designer-registration">
					<Form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
						<div className="register-title">
							<h2>Register as a designer</h2>
						</div>
						<Form.Row>
							<Form.Group as={Col} md="6">
								<Form.Label>Name of your brand</Form.Label>
								<Form.Control
									required
									type="text"
									name="brand_name"
									placeholder="Enter your brand name"
									value={this.state.brand}
									onChange={e => this.handleChange(e)} />
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md="4">
								<Form.Label>Address</Form.Label>
								<Form.Control
									required
									type="text"
									name="address"
									value={this.state.address}
									onChange={e => this.handleChange(e)} />
							</Form.Group>
							<Form.Group as={Col} md="4">
								<Form.Label>City</Form.Label>
								<Form.Control
									required
									type="text"
									name="city"
									value={this.state.city}
									onChange={e => this.handleChange(e)} />
							</Form.Group>
							<Form.Group as={Col} md="4">
								<Form.Label>Zip Code</Form.Label>
								<Form.Control
									required
									type="text"
									name="zipcode"
									value={this.state.zipcode}
									onChange={e => this.handleChange(e)} />
								{isNaN(this.state.zipcode) ? <p className='error-message' > {content.errorMessage.errorMessageZipCode}</p> : ''}

							</Form.Group>

						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md="6">
								<Form.Label>State</Form.Label>
								<Form.Control
									required
									type="text"
									name="state"
									value={this.state.state}
									onChange={e => this.handleChange(e)} />
							</Form.Group>
							<Form.Group as={Col} md="6">
								<Form.Label>Country</Form.Label>
								<Form.Control
									required
									as="select"
									name="country"
									value={this.state.country}
									onChange={e => this.handleChange(e)}>
									<option>Choose...</option>
									<option>Germany</option>
									<option>Great Britain</option>
									<option>Sweden</option>
									<option>Spain</option>
									<option>Poland</option>
									<option>Greece</option>
									<option>Russia</option>
									<option>Japan</option>
									<option>India</option>
									<option>France</option>
									<option>Denmark</option>
									<option>Portugal</option>
									<option>Finland</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md="12">
								<Form.Label>Tell us about your design inspirations</Form.Label>
								<Form.Control
									required
									type="textarea"
									row="6"
									name="design_inspiration"
									placeholder="what does your brand stand for?"
									value={this.state.design_inspiration}
									onChange={e => this.handleChange(e)}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} md="12">
								<Form.Label>
									What type of products are you designing?
        						</Form.Label>
								<Form.Control
									required
									type="textarea"
									row="6"
									name="product_types"
									placeholder="Accessories, shoes, pants etc"
									value={this.state.product_types}
									onChange={e => this.handleChange(e)}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} md="12">
								<Form.Label>Uplaod photos of your past products</Form.Label>
								<Form.Control
									required
									type="file"
									name="image_gallery[]"
									onChange={this.fileSelectHandler}
									multiple
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} md="12">
								<Form.Label>
									Please choose the categories for which you would like to get
									updates for</Form.Label>
								<Form.Check
									type="checkbox"
									label="Accessories"
									name="accesories"
									id="formcategorycheckbox1"
									onChange={e => this.handleChange(e)}
									value={this.state.accesories}
								/>
								<Form.Check
									type="checkbox"
									label="Pants"
									name="pants"
									id="formcategorycheckbox2"
									onChange={e => this.handleChange(e)}
									value={this.state.pants} />
								<Form.Check
									type="checkbox"
									label="Shirts"
									name="shirts"
									id="formcategorycheckbox3"
									onChange={e => this.handleChange(e)}
									value={this.state.shirts} />
								<Form.Check
									type="checkbox"
									label="Jackets"
									name="jackets"
									id="formcategorycheckbox4"
									onChange={e => this.handleChange(e)}
									value={this.state.jackets} />
								<Form.Check
									type="checkbox"
									label="Leftover fabric"
									name="leftOverFabric"
									id="formcategorycheckbox5"
									onChange={e => this.handleChange(e)}
									value={this.state.leftOverFabric} />
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md="12">
								<Form.Label>
									What type of fabric are you looking to source?
        						</Form.Label>
								<Form.Check
									type="checkbox"
									label="Cotton"
									name="cotton"
									id="formsourcecheckbox1"
									onChange={e => this.handleChange(e)}
									value={this.state.cotton}
								/>
								<Form.Check
									type="checkbox"
									label="Wool"
									name="wool"
									id="formsourcecheckbox2"
									onChange={e => this.handleChange(e)}
									value={this.state.wool}
								/>

								<Form.Check
									type="checkbox"
									label="Denim"
									name="denim"
									id="formsourcecheckbox3"
									onChange={e => this.handleChange(e)}
									value={this.state.denim}
								/>
								<Form.Check
									type="checkbox"
									label="Leather"
									name="leather"
									id="formsourcecheckbox4"
									onChange={e => this.handleChange(e)}
									value={this.state.leather}
								/>
								<Form.Check
									type="checkbox"
									label="Synthetics"
									name="synthetics"
									id="formsourcecheckbox5"
									onChange={e => this.handleChange(e)}
									value={this.state.synthetics}
								/>
								<Form.Check
									type="checkbox"
									label="Velvet"
									name="velvet"
									id="formsourcecheckbox6"
									onChange={e => this.handleChange(e)}
									value={this.state.velvet}
								/>
								<Form.Check
									type="checkbox"
									label="Muslin"
									name="muslin"
									id="formsourcecheckbox6"
									onChange={e => this.handleChange(e)}
									value={this.state.muslin}
								/>
							</Form.Group>
						</Form.Row>
						<Button variant="primary" type="submit">
							Create List{" "}
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default withRouter(DesignerForm);
