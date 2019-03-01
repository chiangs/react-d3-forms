import React from 'react';
import css from './Form.module.css';
import Input from './Input/Input';
import Button from '../Button/Button';
import ErrorMessages from './ErrorMessages/ErrorMessages';

const Form = props => {
	const buttonConfirmLabel = 'REGISTER';
	const buttonCancelLabel = 'CANCEL';
	const formElements = [...props.formElements];

	return (
		<form className={css.Form} onSubmit={props.formSubmitHandler}>
			<section className={css.Form__ErrorSection}>
				<ErrorMessages showErrors={props.showErrors} />
			</section>
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
					/>
				))}
			</section>
			<section className={css.Form__ActionButtons}>
				<Button>{buttonConfirmLabel}</Button>
				<Button>{buttonCancelLabel}</Button>
			</section>
		</form>
	);
};

export default Form;
