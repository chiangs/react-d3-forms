import React from 'react';
import css from './Input.module.css';

const Input = props => {
	let inputElement = null;

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={css.InputElement}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					id={props.id}
					name={props.name}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={css.InputElement}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					id={props.id}
					name={props.name}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select
					className={css.InputElement}
					value={props.value}
					onChange={props.changed}
					id={props.id}
					name={props.name}>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					className={css.InputElement}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					id={props.id}
					name={props.name}
				/>
			);
			break;
	}

	return (
		<div className={css.Input}>
			<label
				className={css.Input__LabelGroup}
				htmlFor={props.id}
				id={props.id}
				name={props.name}>
				<span className={css.Input__Label}>{props.label}</span>
				<span className={css.Input__Hint}>{props.hint}</span>
			</label>
			{inputElement}
		</div>
	);
};

export default Input;
