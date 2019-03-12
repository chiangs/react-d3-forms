import React, { Component } from 'react';
import './App.css';
import { ROUTES } from './_references/Constants';
import { Route } from 'react-router-dom';
import Layout from './view-containers/Layout/Layout';
import Register from './view-containers/Register/Register';
import Landing from './view-containers/Landing/Landing';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Route path={ROUTES.INDEX} component={Landing} exact />
					<Route path={ROUTES.REGISTER} component={Register} exact />
					{/* Login Form */}
					{/* Ordering Form */}
					{/* Multi-step form */}
					{/* Data entry / Budget Form */}
				</Layout>
			</div>
		);
	}
}

export default App;
