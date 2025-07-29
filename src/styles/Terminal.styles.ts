import styled, { css, keyframes } from "styled-components";

const Color = {
	front: "green",
	background: "black",
};
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
	padding-left: 1rem;
`;

const InputContainer = styled.span`
	display: flex;
	align-items: center;
	width: 90vw;
	gap: 8px;

	> span {
		margin-right: 8px;
	}
	// background-color: blue;
`;

const HistoryContainer = styled.div`
	flex: 1;
	padding: 20px 0;
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
	// background-color: tan;th

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

const RowContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
`;

export {
	MainStyled,
	InputContainer,
	InputStyled,
	InputMirrorStyled,
	HistoryContainer,
	RowContainer,
};
