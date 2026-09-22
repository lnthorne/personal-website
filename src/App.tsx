import React from "react";
import TerminalScreen from "./components/terminal/TerminalScreen";
import BlogDetail from "./components/blogs/BlogDetail";
import { styled } from "styled-components";
import { GlobalStyles } from "./styles/Global.styles";
import BootScreen from "./components/boot/BootScreen";

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

function App() {
	const blogPathMatch = window.location.pathname.match(/^\/blogs\/([^/]+)\/?$/);

	if (blogPathMatch) {
		return (
			<>
				<GlobalStyles />
				<BlogDetail slug={blogPathMatch[1]} />
			</>
		);
	}

	return (
		<AppContainer>
			<GlobalStyles />
			<BootScreen />
			<TerminalScreen />
		</AppContainer>
	);
}

export default App;
