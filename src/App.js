import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

	// App uses Menu, therefore raise the state from Menu to App
	// Menu accesses dishes through props
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES
		};
	};

	render() {
		return (
			<div>
				<Navbar dark color="primary">
				<div className="container">
					<NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
				</div>
				</Navbar>
				{/* now we require to pass dishes through state, previously it was part of MenuComponent as such:  <Menu /> */}
				<Menu dishes={this.state.dishes}/>
			</div>
		);
	}
}

export default App;
