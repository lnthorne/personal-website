import React, { useState, useEffect, useRef, MouseEventHandler } from "react";
import styled from "styled-components";

import useCursor from "../hooks/useCursor";
import {
	GlobalStyles,
	InputMirrorStyled,
	InputStyled,
	MainStyled,
	InputContainer,
} from "../styles/styles";

const TerminalWrapper = styled.div`
	background-color: black;
	color: green;
	padding: 0 20px;
	height: 100vh;
	font-family: monospace;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`;

const HistoryContainer = styled.div`
	flex: 1;
	padding: 20px 0;
`;

const TerminalInput = styled.input`
	background-color: black;
	color: green;
	border: none;
	outline: none;
	flex: 1;
	font-family: monospace;
	/* Custom caret to simulate a thick and blinking cursor */
	caret-color: green;
	caret-width: 2px; /* Make the caret thicker */

	/* Blinking effect for the caret */
	&::selection {
		animation: blink-caret 1s step-end infinite;
	}
`;

const Cli: React.FC = () => {
	const [input, setInput] = useState<string>("");
	const [history, setHistory] = useState<string[]>([
		'Welcome to the CLI! Type "help" for commands.',
	]);

	const bottomRef = useRef<HTMLDivElement | null>(null);
	const terminalRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleCommand = (command: string) => {
		let response = "";
		switch (command.toLowerCase()) {
			case "help":
				response = "Available commands: help, clear";
				break;
			case "clear":
				setHistory([]);
				return;
			default:
				response = `Command not found: ${command}`;
		}
		setInput("");
		setHistory((prev) => [...prev, `guest@portfolio:~$ ${command}`, response]);
	};

	const { handleOnFocus, handleOnBlur, handleKeyDown, shifts, paused } = useCursor({
		input,
		handleCommand,
	});

	const handleFocusClick = () => {
		console.log("I have clicked");
		inputRef.current?.focus();
		handleOnFocus();
	};

	useEffect(() => {
		const terminalElement = terminalRef.current;
		if (!terminalElement) return;

		const scrollThreshold = 100;

		const { scrollTop, scrollHeight, clientHeight } = terminalElement;

		const isNearBottom = scrollHeight - scrollTop - clientHeight < scrollThreshold;

		if (isNearBottom) {
			bottomRef.current?.scrollIntoView({ behavior: "smooth" });
		}
	}, [history]);

	const cursorPosition = input.length - shifts;

	const [beforeCursor, inCursor, afterCursor] = [
		input.slice(0, cursorPosition),
		input.charAt(cursorPosition),
		input.slice(cursorPosition + 1),
	];

	return (
		<>
			<GlobalStyles />
			<MainStyled onClick={handleFocusClick} onBlur={handleOnBlur} ref={terminalRef}>
				<HistoryContainer>
					{history.map((entry, index) => (
						<div key={index}>{entry}</div>
					))}
					<InputContainer>
						<span>guest@portfolio:~$ </span>
						<InputMirrorStyled cursorPaused={paused} cursorChar={inCursor}>
							{beforeCursor}
							<span>{inCursor}</span>
							{afterCursor}
						</InputMirrorStyled>
						<InputStyled
							onKeyDown={handleKeyDown}
							onChange={(e) => setInput(e.target.value)}
							ref={inputRef}
						/>
					</InputContainer>
					<div ref={bottomRef} />
				</HistoryContainer>
			</MainStyled>
		</>
	);
};

export default Cli;
