import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Register from './containers/Register/Register';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Header with Nav*/}
				{/* RouterLinks - LoginForm */}
				<Layout>
					<Register />
				</Layout>
			</div>
		);
	}
}

export default App;
