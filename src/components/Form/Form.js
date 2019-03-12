import React from 'react';
import css from './Form.module.css';
import Input from './Input/Input';
import Button from '../Button/Button';
import ErrorMessages from './ErrorMessages/ErrorMessages';

import useForm from './_utilities/useForm';

const Form = props => {
	// * Other form local state
	const buttonConfirmLabel = 'REGISTER';
	const buttonCancelLabel = 'CANCEL';
	const errorMessages = [];

	// * Validate the form config props
	for (const [index, value] of formElements.entries()) {
		if (!value.config.validation.valid) {
			errorMessages.push({
				id: index,
				msg: `There's error with ${value.config.label}`
			});
		}
	}

	// * create formElements from form
	const formElements = [];
	for (const key in props.form) {
		formElements.push({
			id: key,
			config: props.form[key]
		});
	}

	// * Create and use form hook w/ init values
	const initForm = { ...props.form };
	for (let key in initForm) {
		initForm[key] = initForm[key].value;
	}
	const formSubmit = event => props.formSubmit(event);
	const { values, handleChange, handleSubmit, resetForm } = useForm(
		initForm,
		formSubmit
	);

	// * Error message container
	const errorMessagesArticle =
		props.showErrors && errorMessages.length > 0 ? (
			<section className={css.Form__ErrorSection}>
				{
					<ErrorMessages
						showErrors={props.showErrors}
						errorMessages={errorMessages}
					/>
				}
			</section>
		) : null;

	return (
		<form className={css.Form} onSubmit={handleSubmit}>
			{errorMessagesArticle}
			<section className={css.Form__FormControls}>
				{formElements.map(element => (
					<Input
						key={element.id}
						show={true}
						label={element.config.label}
						hint={element.config.hint}
						elementType={element.config.elementType}
						elementConfig={element.config.elementConfig}
						shouldValidate={element.config.validation}
						valid={element.config.validation.valid}
						showErrors={props.showErrors}
						togglePassword={() => props.togglePassword(element.id)}
						value={values[element.id]}
						changed={event => handleChange(event, element.id)}
					/>
				))}
			</section>
			<section className={css.Form__ActionButtons}>
				<Button>{buttonConfirmLabel}</Button>
				<Button type="button" clicked={resetForm}>
					{buttonCancelLabel}
				</Button>
			</section>
		</form>
	);
};

// ! original form before hook integration
// <form className={css.Form} onSubmit={props.formSubmitHandler}>
// 	{errorMessagesArticle}
// 	<section className={css.Form__FormControls}>
// 		{formElements.map(element => (
// 			<Input
// 				key={element.id}
// 				show={true}
// 				label={element.config.label}
// 				hint={element.config.hint}
// 				elementType={element.config.elementType}
// 				elementConfig={element.config.elementConfig}
// 				value={element.config.value}
// 				shouldValidate={element.config.validation}
// 				valid={element.config.validation.valid}
// 				showErrors={props.showErrors}
// 				changed={event =>
// 					props.inputChangedHandler(event, element.id)
// 				}
// 				togglePassword={() => props.togglePassword(element.id)}
// 			/>
// 		))}
// 	</section>
// 	<section className={css.Form__ActionButtons}>
// 		<Button>{buttonConfirmLabel}</Button>
// 		<Button type="button" clicked={props.cancelForm}>
// 			{buttonCancelLabel}
// 		</Button>
// 	</section>
// </form>

export default React.memo(Form);
