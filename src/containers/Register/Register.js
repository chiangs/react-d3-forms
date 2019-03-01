import React, { Component } from 'react';
import css from './Register.module.css';
import DataVisualization from '../../components/DataVisualization/DataVisualization';
import Form from '../../components/Form/Form';
import { RegisterForm } from './_Register-form-setttings';

export default class Register extends Component {
	state = {
		form: RegisterForm,
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
					<DataVisualization />
				</section>
				<section className={css.FormSection}>
					<Form
						formElements={formElements}
						formSubmitHandler={this.formSubmitHandler}
						inputChangedHandler={this.inputChangedHandler}
						showErrors={this.state.showErrors}
					/>
				</section>
			</article>
		);
	}
}
