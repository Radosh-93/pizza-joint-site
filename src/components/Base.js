import React from "react";
import { ButtonStyle, Container } from "../styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
	return (
		<Container
			initial={{ x: "100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", delay: 0.3 }}
		>
			<div>
				<h3>Step 1: Choose Your Base</h3>
				<ul>
					{bases.map((base) => {
						const activeClass = pizza.base === base ? "active" : "";
						return (
							<li key={base} onClick={() => addBase(base)}>
								<span className={activeClass}>{base}</span>
							</li>
						);
					})}
				</ul>
				<Next>
					{pizza.base && (
						<motion.div
							animate={{ x: "0vw" }}
							initial={{ x: "-100vw" }}
							transition={{ type: "spring", stiffness: 120 }}
						>
							<Link to="/topping">
								<ButtonStyle>Next</ButtonStyle>
							</Link>
						</motion.div>
					)}
				</Next>
			</div>
		</Container>
	);
};
const Next = styled(motion.div)`
	min-height: 7rem;
`;
export default Base;
