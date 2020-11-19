import React from "react";
import { ButtonStyle } from "../styles";

export const Button = ({ children }) => {
	return <ButtonStyle whileHover={{ scale: 1.1 }}>{children}</ButtonStyle>;
};
