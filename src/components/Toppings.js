import React from 'react';
import {ButtonsBlock, Container} from "../styles";
import {Link} from "react-router-dom";

const Toppings = ({addToppings, pizza}) => {
	let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
	return (
		<Container>
			<div>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map(topping => {
					const activeClass = pizza.toppings.includes(topping) ? 'active' : '';
					return (
						<li key={topping} onClick={() => addToppings(topping)}>
							<span className={activeClass}>{topping}</span>
						</li>
					)
				})}
			</ul>
			<ButtonsBlock>
				<Link to="/base">
					<button>
						Back
					</button>
				</Link>
				<Link to="/order">
					<button>
						Order
					</button>
				</Link>
			</ButtonsBlock>
			</div>
		</Container>
	);
};
export default Toppings;