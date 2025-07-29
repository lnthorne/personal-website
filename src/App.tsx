import React from "react";
import Terminal from "./components/terminal/TerminalScreen";
import { styled } from "styled-components";
import { GlobalStyles } from "./styles/Global.styles";
import BootScreen from "./components/boot/BootScreen";

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

function App() {
	return (
		<AppContainer>
			<GlobalStyles />
			<BootScreen />
			<Terminal />
		</AppContainer>
	);
}

export default App;
