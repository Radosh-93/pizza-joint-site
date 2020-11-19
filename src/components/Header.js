import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ resetOrder }) => {
	return (
		<HeaderStyle>
			<Link to="/" onClick={resetOrder}>
				<svg
					className="pizza-svg"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
				>
					<path
						fill="none"
						d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
					/>
					<path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
				</svg>
			</Link>
			<motion.div
				className="title"
				initial={{ y: -250 }}
				animate={{ y: -10 }}
				transition={{ type: "spring", stiffness: 120 }}
			>
				<h1>Pizza Joint</h1>
			</motion.div>
		</HeaderStyle>
	);
};
const HeaderStyle = styled.header`
	display: grid;
	grid-template-columns: 8rem 1fr;
	grid-gap: 2rem;
	align-items: center;
	height: 20vh;
	padding: 2rem 4rem 0;
	.pizza-svg {
		width: 8rem;
		overflow: visible;
		stroke: #ffffff;
		stroke-width: 4;
		stroke-linejoin: round;
		stroke-linecap: round;
	}
	.title {
		font-size: 1rem;
		h1 {
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			padding-bottom: 1rem;
		}
	}
`;
export default Header;
