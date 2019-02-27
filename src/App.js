import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './Barchart/Barchart';
import Input from './components/UI/Forms/Input/Input';

class App extends Component {
	state = {
		orderForm: {
			name: {
				label: 'Name',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'your name'
				},
				value: ''
			},
			email: {
				label: 'E-Mail',
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'your email'
				},
				value: ''
			},
			country: {
				label: 'Country',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: ''
			},
			deliveryMethod: {
				label: 'Delivery Method',
				elementType: 'select',
				elementConfig: {
					type: 'select',
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: ''
			}
		}
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = {
			...this.state.orderForm
		};
		const updatedFormElement = { ...updatedForm[inputIdentifier] };
		updatedFormElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedFormElement;
		this.setState({ orderForm: updatedForm });
	};

	formSubmitHandler = event => {
		event.preventDefault();
		const formData = {};
		for (let elementIdentifier in this.state.orderForm) {
			formData[elementIdentifier] = this.state.orderForm[
				elementIdentifier
			].value;
		}
		const submitData = {
			formData
		};
		console.table(submitData);
	};

	render() {
		const formElements = [];
		for (const key in this.state.orderForm) {
			formElements.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		return (
			<div className="App">
				<form onSubmit={this.formSubmitHandler}>
					{formElements.map(element => (
						<Input
							key={element.id}
							label={element.config.label}
							elementType={element.config.elementType}
							elementConfig={element.config.elementConfig}
							value={element.config.value}
							changed={event =>
								this.inputChangedHandler(event, element.id)
							}
						/>
					))}
					<button type="submit">SUBMIT</button>
				</form>
			</div>
		);
	}
}

export default App;
