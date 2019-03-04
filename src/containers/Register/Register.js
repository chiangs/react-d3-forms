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

	// TODO: Add toggle show/hide password
	// ? Refactor Form Validation and Handler to hook(s)?

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = {
			...this.state.form
		};
		const updatedFormElement = { ...updatedForm[inputIdentifier] };
		updatedFormElement.value = event.target.value;
		updatedFormElement.validation.valid = this.checkInputValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedForm[inputIdentifier] = updatedFormElement;
		console.log(updatedFormElement);
		this.setState({ form: updatedForm });
	};

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
		console.log('cancel');
	};

	formSubmitHandler = event => {
		event.preventDefault();
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
		const formElements = [];
		for (const key in this.state.form) {
			formElements.push({
				id: key,
				config: this.state.form[key]
			});
		}
		return (
			<article className={css.Register}>
				<section className={css.DataVisualization}>
					<InfoBox content={this.state.content} />
				</section>
				<section className={css.FormSection}>
					<Form
						formElements={formElements}
						togglePassword={this.togglePassword}
						cancelForm={this.cancelForm}
						inputChangedHandler={this.inputChangedHandler}
						showErrors={this.state.showErrors}
						formSubmitHandler={this.formSubmitHandler}
					/>
				</section>
			</article>
		);
	}
}
