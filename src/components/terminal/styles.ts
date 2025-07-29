import styled, { keyframes } from "styled-components";

const TerminalContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: #000;
	color: #00ff00;
	font-family: "IBM Plex Mono", monospace;
	position: relative;
	overflow: hidden;
	data-terminal: true;

	/* CRT effect */
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%);
		background-size: 100% 4px;
		pointer-events: none;
		z-index: 1000;
	}

	/* Phosphor glow */
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 100px rgba(0, 255, 0, 0.1);
		pointer-events: none;
		z-index: 999;
	}
`;

const InputContainer = styled.span`
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

const Prompt = styled.span`
	color: #00ff00;
	margin-right: 8px;
`;

const TerminalContent = styled.div`
	padding: 20px;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	position: relative;
	z-index: 1;

	/* Custom scrollbar */
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #000;
	}

	&::-webkit-scrollbar-thumb {
		background: #00ff00;
		border-radius: 4px;
	}
`;

const TerminalLine = styled.div`
	margin-bottom: 16px;
	white-space: pre-wrap;
	line-height: 1.4;
`;

const InputWrapper = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
`;

const Input = styled.input`
	background: transparent;
	border: none;
	color: #00ff00;
	font-family: "IBM Plex Mono", monospace;
	font-size: 16px;
	outline: none;
	flex: 1;
	caret-color: transparent; /* Hide the default cursor */

	&::placeholder {
		color: #006600;
	}
`;

const RowContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
  `;

const Cursor = styled.span`
	animation: ${blink} 1s infinite;
	position: absolute;
	left: 2px;
	pointer-events: none;
`;

export {
	TerminalContainer,
	InputContainer,
	TerminalContent,
	RowContainer,
	TerminalLine,
	Prompt,
	InputWrapper,
	Input,
	Cursor,
};
