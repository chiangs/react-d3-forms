import React from 'react';
import css from './Button.module.css';

const Button = props => {
	const type = props.type ? props.type : 'submit';
	const classes = [css.Button];
	if (props.passwordToggle) {
		classes.push(css.Toggle);
	}
	return (
		<button
			className={classes.join(' ')}
			type={type}
			onClick={props.clicked}>
			{props.children}
		</button>
	);
};

export default React.memo(Button);
