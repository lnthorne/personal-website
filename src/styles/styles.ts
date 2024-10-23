import styled, { css, keyframes, createGlobalStyle } from "styled-components";

const Color = {
	front: "green",
	background: "black",
};

const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		background: ${Color.background};
		color: ${Color.front};
		font-family: VT323, monospace; /* Ensure it's a monospaced font */
        letter-spacing: 0.1em;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
	    overflow-y: auto;
        padding: 0;
	}
`;

const hidde = css`
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;

const MainStyled = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100vw;
	height: 100vh;
	padding: 1rem;
`;

const InputContainer = styled.span`
	display: flex;
	align-items: center;
	width: 90vw;

	> span {
		margin-right: 4px;
	}
	// background-color: blue;
`;

const blink = keyframes`
  0%  { opacity: 1 }
  49% { opacity: 1 }
  50% { opacity: 0 }
  100% { opacity: 0 }
`;

const animationBlink = css`
	animation: ${blink} 1s ease infinite;
`;

const InputStyled = styled.input`
	${hidde}
`;

const fontWidth = 7;

const InputMirrorStyled = styled.span<{ cursorPaused: boolean; cursorChar: string }>`
	display: block;
	height: 1rem;
	width: 50vw;
	word-break: break-all;
	white-space: pre-wrap;
	position: relative;
	background-color: tan;

	> span:before {
		${({ cursorChar }) => (cursorChar ? `content: "${cursorChar}"` : `content: ""`)};
		position: absolute;
		color: ${Color.background};
		background: ${Color.front};
		height: 1rem;
		width: ${fontWidth}px;
		display: inline-block;
		${({ cursorPaused }) => !cursorPaused && animationBlink}
	}
`;

export { GlobalStyles, MainStyled, InputContainer, InputStyled, InputMirrorStyled };
