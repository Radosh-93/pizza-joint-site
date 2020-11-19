import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ButtonStyle } from "../styles";
import { motion } from "framer-motion";
import { Button } from "./commonComponents";
const Home = (props) => {
	return (
		<HomeStyle
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ delay: 0.3, duration: 1.5 }}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<Button>Create Your Pizza</Button>
			</Link>
		</HomeStyle>
	);
};
const HomeStyle = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		color: white;
		padding: 15px 30px;
		font-size: 1.6em;
		border: 3px solid white;
		margin: 30px 20px;
		backface-visibility: hidden;
	}
`;
export default Home;
