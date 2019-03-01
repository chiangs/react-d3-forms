import React from 'react';
import css from './ErrorMessages.module.css';

const ErrorMessages = props => {
	const errorMessages = props.errorMessages.map(message => (
		<li className={css.Error} key={message.id}>
			{message.msg}
		</li>
	));

	return (
		<article>
			<ul className={css.ErrorMessages}>{errorMessages}</ul>
		</article>
	);
};

export default ErrorMessages;
