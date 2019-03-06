import React, { Component } from 'react';
import './App.css';
import Layout from './view-containers/Layout/Layout';
import Register from './view-containers/Register/Register';
import Landing from './view-containers/Landing/Landing';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					{/* <Landing /> */}
					<Register />
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
