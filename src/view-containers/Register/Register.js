import React, { Component } from 'react';
import css from './Register.module.css';
import { RegisterForm } from './_Register-form-settings';
import Form from '../../components/Form/Form';
import InfoBox from '../../components/InfoBox/InfoBox';

export default class Register extends Component {
	state = {
		form: RegisterForm,
		content: {
			title: 'Register Form',
			information: [
				'This register form is built by providing an initial state in a JavaScript object with configuration settings for the controls and for validation. These settings are then passed to a reusable Form and Input components. Potential refactor opportunities are to move the validation, change and submit handlers to a Form Container or React Hook.',
				"Validation messages aren't shown until user tries to submit, and is highly accessible allowing user to navigate via keyboard, screen reader friendly, and positions labels and texts to facilitate visual acquisition."
			]
		},
		showErrors: false
	};

	// ? Refactor Form Validation and Handler to hook(s)?

	// inputChangedHandler = (event, inputIdentifier) => {
	// 	const updatedForm = {
	// 		...this.state.form
	// 	};
	// 	const updatedFormElement = { ...updatedForm[inputIdentifier] };
	// 	updatedFormElement.value = event.target.value;
	// 	updatedFormElement.validation.valid = this.checkInputValidity(
	// 		updatedFormElement.value,
	// 		updatedFormElement.validation
	// 	);
	// 	updatedForm[inputIdentifier] = updatedFormElement;
	// 	console.log(updatedFormElement);
	// 	this.setState({ form: updatedForm });
	// };

	togglePassword = inputIdentifier => {
		const updatedForm = {
			...this.state.form
		};
		const updatedFormElement = { ...updatedForm[inputIdentifier] };
		updatedFormElement.elementConfig.hidden = !updatedFormElement
			.elementConfig.hidden;
		updatedForm[inputIdentifier] = updatedFormElement;
		this.setState({ form: updatedForm });
	};

	checkInputValidity(value, rules) {
		let isValid = true;
		// eslint-disable-next-line no-useless-escape
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (rules.required) isValid = value.trim() !== '' && isValid;
		if (rules.minLength)
			isValid = value.length >= rules.minLength && isValid;
		if (rules.email) isValid = value.match(mailformat) && isValid;
		return isValid;
	}

	checkFormValidity(form) {
		for (let elementIdentifier in form) {
			if (form[elementIdentifier].validation.valid === false) {
				return false;
			}
		}
		return true;
	}

	cancelForm = () => {
		this.setState({ form: RegisterForm });
	};

	formSubmitHandler = event => {
		console.log('in register submit handler', event);
		event.preventDefault();
		// TODO Getting new shape of data...adjust here
		// ? refactor validation to hook?
		const formData = {};
		if (!this.checkFormValidity(this.state.form)) {
			console.error('form not valid');
			this.setState({ showErrors: true });
			return;
		}
		console.log('form valid');
		for (let elementIdentifier in this.state.form) {
			formData[elementIdentifier] = this.state.form[
				elementIdentifier
			].value;
		}
		const submitData = {
			formData
		};
		console.table(submitData);
	};

	render() {
		return (
			<article className={css.Register}>
				<section className={css.DataVisualization}>
					<InfoBox content={this.state.content} />
				</section>
				<section className={css.FormSection}>
					<Form
						form={this.state.form}
						formSubmit={this.formSubmitHandler}
						togglePassword={this.togglePassword}
						cancelForm={this.cancelForm}
						// inputChangedHandler={this.inputChangedHandler}
						showErrors={this.state.showErrors}
						// formSubmitHandler={this.formSubmitHandler}
					/>
				</section>
			</article>
		);
	}
}
