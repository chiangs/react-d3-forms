import React, { Component } from 'react';
import css from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';

export default class Layout extends Component {
	state = {
		openSideDrawer: false
	};

	render() {
		const Fragment = React.Fragment;
		return (
			<Fragment>
				<Navbar />
				{/* Sidedrawer */}
				<main className={css.Main}>{this.props.children}</main>
			</Fragment>
		);
	}
}
