import React, {Component} from 'react';

class RequiredFabric extends Component {
	constructor(props){
		super(props)
		this.state = {
			fabrics: []
		}
	}

	componentWillReceiveProps(props) {
	    this.setState({fabrics: props.fabric});
	}

	render() {
		const items = this.state.fabrics.map((object, i) => 				
				<div key={i}>{object.category} | {object.amount} mtrs</div>
			)
		return 	(
    	<div>
    			{items}
    	</div>
		)
	}
}

export default RequiredFabric;
