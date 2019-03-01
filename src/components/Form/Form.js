import React from 'react';
import css from './Form.module.css';
import Input from './Input/Input';
import Button from '../Button/Button';

const Form = props => {
	const buttonConfirmLabel = 'REGISTER';
	const buttonCancelLabel = 'CANCEL';
	const formElements = [...props.formElements];

	return (
		<form className={css.Form} onSubmit={props.formSubmitHandler}>
			{formElements.map(element => (
				<Input
					key={element.id}
					label={element.config.label}
					hint={element.config.hint}
					elementType={element.config.elementType}
					elementConfig={element.config.elementConfig}
					value={element.config.value}
					changed={event =>
						props.inputChangedHandler(event, element.id)
					}
				/>
			))}
			<section className={css.Form__ActionButtons}>
				<Button>{buttonConfirmLabel}</Button>
				<Button>{buttonCancelLabel}</Button>
			</section>
		</form>
	);
};

export default Form;
