import React, { Component } from 'react';
import css from './Layout.module.css';

export default class Layout extends Component {
	state = {
		openSideDrawer: false
	};

	render() {
		const Fragment = React.Fragment;
		return (
			<Fragment>
				{/* Toolbar */}
				{/* Sidedrawer */}
				<main className={css.Main}>{this.props.children}</main>
			</Fragment>
		);
	}
}
