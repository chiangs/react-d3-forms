import React from 'react';
import css from './Navbar.module.css';

const Navbar = props => {
	const logo = (
		<p>
			<span className={css.Navbar__LogoMain}>Form Design Patterns</span>
			<br />
			<span className={css.Navbar__LogoSecondary}>
				using React and D3
			</span>
		</p>
	);

	return (
		<header className={css.Navbar}>
			<section className={css.Navbar__Logo}>{logo}</section>
			<section>Navigation</section>
		</header>
	);
};

export default React.memo(Navbar);
