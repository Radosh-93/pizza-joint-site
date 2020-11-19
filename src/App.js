import React, {useState} from "react";
import {Switch, Route} from 'react-router-dom'
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

function App() {
	const [pizza, setPizza] = useState({base: '', toppings: []});
	const addBase = (base) => {
		setPizza({...pizza, base})
	}
	const addToppings = (topping) => {

		if(!pizza.toppings.includes(topping)) {
			setPizza({...pizza, toppings: [...pizza.toppings, topping]})
		} else {
			const filteredToppings = pizza.toppings.filter(item => item !== topping)
			setPizza({...pizza, toppings: filteredToppings})
		}
	}
	const resetOrder = () => {
		setPizza({base: '', toppings: []})
	}
	return (
		<div className="App">
			<GlobalStyles/>
			<Header resetOrder={resetOrder}/>
			<Switch>
                <Route path='/' exact component={Home}/>
				<Route path='/base'>
					<Base addBase={addBase} pizza={pizza}/>
				</Route>
				<Route path='/topping'>
					<Toppings addToppings={addToppings} pizza={pizza}/>
				</Route>
				<Route path='/order'>
					<Order pizza={pizza} resetOrder={resetOrder}/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
