import React from 'react';
import css from './Button.module.css';

const Button = props => {
	const type = props.type ? props.type : 'submit';
	return (
		<button className={css.Button} type={type} onClick={props.clicked}>
			{props.children}
		</button>
	);
};

export default React.memo(Button);
