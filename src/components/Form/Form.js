import React from 'react';
import css from './Form.module.css';
import Input from './Input/Input';
import Button from '../Button/Button';
import ErrorMessages from './ErrorMessages/ErrorMessages';

const Form = props => {
	const buttonConfirmLabel = 'REGISTER';
	const buttonCancelLabel = 'CANCEL';
	const formElements = [...props.formElements];
	const errorMessages = [];
	for (const [index, value] of formElements.entries()) {
		if (!value.config.validation.valid) {
			errorMessages.push({
				id: index,
				msg: `There's error with ${value.config.label}`
			});
		}
	}
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
		<form className={css.Form} onSubmit={props.formSubmitHandler}>
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
						value={element.config.value}
						shouldValidate={element.config.validation}
						valid={element.config.validation.valid}
						showErrors={props.showErrors}
						changed={event =>
							props.inputChangedHandler(event, element.id)
						}
						togglePassword={() => props.togglePassword(element.id)}
					/>
				))}
			</section>
			<section className={css.Form__ActionButtons}>
				<Button>{buttonConfirmLabel}</Button>
				<Button type="button" clicked={props.cancelForm}>
					{buttonCancelLabel}
				</Button>
			</section>
		</form>
	);
};

export default React.memo(Form);
