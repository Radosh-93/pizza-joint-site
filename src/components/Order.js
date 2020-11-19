import React from 'react';
import {ButtonsBlock, Container} from "../styles";
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Order = ({pizza, resetOrder}) => {
	return (
		<Container>
			<div>
				<h2>Thank you for your order :)</h2>
				<p>You ordered a {pizza.base} pizza{pizza.toppings.length ? " with:" : '.'}</p>
				{pizza.toppings.map(topping => (
					<ToppingItem key={topping}>- {topping}</ToppingItem>
				))}
				<ButtonsBlock>
					<Link to='/topping'>
						<button>Back</button>
					</Link>
					<Link to='/'>
						<button onClick={resetOrder}>New Order</button>
					</Link>
				</ButtonsBlock>
			</div>
		</Container>
	);
};
const ToppingItem = styled.p`
	margin: .5rem 0 !important;
`;
export default Order;