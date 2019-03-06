import React from 'react';
import css from './Input.module.css';
import Button from '../../Button/Button';

const Input = props => {
	let inputElement = null;
	const inputClasses = [css.InputElement];
	const labelClasses = [css.Input__Label];
	const optionLabel = props.shouldValidate.required ? null : (
		<i> (optional)</i>
	);
	const toggleText = props.elementConfig.hidden ? 'Show' : 'Hide';
	if (!props.valid && props.shouldValidate && props.showErrors) {
		labelClasses.push(css.Invalid);
		inputClasses.push(css.Invalid);
	}

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					id={props.id}
					name={props.name}
					type={props.elementType}
				/>
			);
			break;
		case 'password':
			inputElement = (
				<span className={css.PasswordInput}>
					<input
						className={inputClasses.join(' ')}
						// {...props.elementConfig}
						value={props.value}
						onChange={props.changed}
						id={props.id}
						name={props.name}
						type={
							props.elementConfig.hidden
								? props.elementType
								: 'text'
						}
					/>
					<Button
						type="button"
						passwordToggle={true}
						clicked={props.togglePassword}>
						{toggleText}
					</Button>
				</span>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={inputClasses.join(' ')}
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
					className={inputClasses.join(' ')}
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
					className={inputClasses.join(' ')}
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
				<span className={labelClasses.join(' ')}>
					{props.label}
					<span className={css.Input__Optional}>{optionLabel}</span>
				</span>
				<span className={css.Input__Hint}>{props.hint}</span>
			</label>
			{inputElement}
		</div>
	);
};

export default React.memo(Input);
