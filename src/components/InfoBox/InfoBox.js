import React from 'react';
import css from './InfoBox.module.css';

const InfoBox = props => {
	const information = [];
	for (const [index, value] of props.content.information.entries()) {
		information.push(<p key={index}>{value}</p>);
	}
	return (
		<article className={css.InfoBox}>
			<h1 className={css.InfoBox__Title}>{props.content.title}</h1>
			<section className={css.InfoBox__Information}>
				{information}
			</section>
		</article>
	);
};

export default React.memo(InfoBox);
