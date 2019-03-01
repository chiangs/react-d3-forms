import React, { Component } from 'react';
import css from './Register.module.css';
import DataVisualization from '../../components/DataVisualization/DataVisualization';
import Form from '../../components/Form/Form';
import { RegisterForm } from './_Register-form-setttings';

export default class Register extends Component {
	state = {
		form: RegisterForm
	};

	// TODO: Add toggle show/hide password

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = {
			...this.state.form
		};
		const updatedFormElement = { ...updatedForm[inputIdentifier] };
		updatedFormElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedFormElement;
		this.setState({ form: updatedForm });
	};

	formSubmitHandler = event => {
		event.preventDefault();
		const formData = {};
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
					/>
				</section>
			</article>
		);
	}
}
