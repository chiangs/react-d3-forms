import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Register from './containers/Register/Register';

class App extends Component {
	state = {
		// orderForm: {
		// 	name: {
		// 		label: 'Name',
		// 		elementType: 'input',
		// 		elementConfig: {
		// 			type: 'text',
		// 			placeholder: 'your name'
		// 		},
		// 		value: ''
		// 	},
		// 	email: {
		// 		label: 'E-Mail',
		// 		elementType: 'input',
		// 		elementConfig: {
		// 			type: 'email',
		// 			placeholder: 'your email'
		// 		},
		// 		value: ''
		// 	},
		// 	country: {
		// 		label: 'Country',
		// 		elementType: 'input',
		// 		elementConfig: {
		// 			type: 'text',
		// 			placeholder: 'Country'
		// 		},
		// 		value: ''
		// 	},
		// 	deliveryMethod: {
		// 		label: 'Delivery Method',
		// 		elementType: 'select',
		// 		elementConfig: {
		// 			type: 'select',
		// 			options: [
		// 				{ value: 'fastest', displayValue: 'Fastest' },
		// 				{ value: 'cheapest', displayValue: 'Cheapest' }
		// 			]
		// 		},
		// 		value: ''
		// 	}
		// }
	};

	// inputChangedHandler = (event, inputIdentifier) => {
	// 	const updatedForm = {
	// 		...this.state.orderForm
	// 	};
	// 	const updatedFormElement = { ...updatedForm[inputIdentifier] };
	// 	updatedFormElement.value = event.target.value;
	// 	updatedForm[inputIdentifier] = updatedFormElement;
	// 	this.setState({ orderForm: updatedForm });
	// };

	// formSubmitHandler = event => {
	// 	event.preventDefault();
	// 	const formData = {};
	// 	for (let elementIdentifier in this.state.orderForm) {
	// 		formData[elementIdentifier] = this.state.orderForm[
	// 			elementIdentifier
	// 		].value;
	// 	}
	// 	const submitData = {
	// 		formData
	// 	};
	// 	console.table(submitData);
	// };

	render() {
		return (
			<div className="App">
				{/* Header with Nav*/}
				{/* RouterLinks - LoginForm */}
				{/* <Layout> */}
				<Register />
				{/* </Layout> */}
			</div>
		);
	}
}

export default App;
