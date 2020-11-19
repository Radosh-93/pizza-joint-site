import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
//Remove Gray Highlight When Tapping Links in Mobile
*:active {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
	font-size: 10px;
}
body {
    background: radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(62,20,86,1) 100%);
    color: white;
    font-family: 'Quicksand', sans-serif;
}
#root {
    overflow-x: hidden;
    position: relative;
    width: 100%;
}
.App {
	max-height: 100vh;
}
li {
	list-style: none;
}
`;
export default GlobalStyles;
