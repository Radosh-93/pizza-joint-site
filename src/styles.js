import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80vh;
	max-width: 30rem;
	margin: 0 auto;
	letter-spacing: 1px;
	h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
	h3 {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 0.8rem;
		margin-bottom: 1rem;
		width: 18rem;
	}
	ul {
		display: flex;
		flex-direction: column;
		margin-left: 0.5rem;
		li {
			padding: 1rem;
			cursor: pointer;
			font-size: 1.2rem;
			span.active {
				font-weight: bold;
				position: relative;
				text-decoration: underline;
				&::before {
					content: ">";
					position: absolute;
					top: 0;
					left: -10px;
					transform: scale(0.8, 1);
					display: inline-block;
				}
			}
		}
	}

	button {
		font-size: 1.6rem;
		margin: 1.5rem 0;
	}
	p {
		margin: 20px 0;
		font-size: 1.6rem;
	}
`;
export const ButtonsBlock = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 2rem;
	justify-content: center;
`;
export const ButtonStyle = styled(motion.button)`
	color: white;
	padding: 10px 30px;
	font-size: 1em;
	background: transparent;
	border-radius: 50px;
	border: 1px solid white;
	margin: 40px auto 0;
	cursor: pointer;
	opacity: 0.7;
	transition: all 0.3s ease;
	&:focus {
		outline: none;
	}
`;
