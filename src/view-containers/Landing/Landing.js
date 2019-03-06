import React, { Component } from 'react';
import InfoBox from '../../components/InfoBox/InfoBox';

export default class Landing extends Component {
	state = {
		content: {
			title:
				'A practical exercise in form design patterns and data visualization in React 16.8+',
			information: ['Stuff', 'Stuff2', 'Stuff3']
		}
	};
	render() {
		return (
			<article>
				<InfoBox content={this.state.content} />
			</article>
		);
	}
}
