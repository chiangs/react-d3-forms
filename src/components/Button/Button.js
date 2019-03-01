import React from 'react';
import css from './Button.module.css';

const Button = props => {
	return (
		<button className={css.Button} onClick={props.clicked}>
			{props.children}
		</button>
	);
};

export default Button;
