import React from 'react';
import css from './ErrorMessages.module.css';

const ErrorMessages = props => {
	return (
		<ul className={css.ErrorMessages}>
			<li className={css.Error}>This is an error</li>
			<li className={css.Error}>This is an error</li>
			<li className={css.Error}>This is an error</li>
			<li className={css.Error}>This is an error</li>
		</ul>
	);
};

export default ErrorMessages;
