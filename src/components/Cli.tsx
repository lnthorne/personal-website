import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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

const InputContainer = styled.div`
	display: flex;
`;

const Prompt = styled.span`
	margin-right: 8px;
`;

const TerminalInput = styled.input`
	background-color: black;
	color: green;
	border: none;
	outline: none;
	flex: 1;
	font-family: monospace;
`;

const Cli: React.FC = () => {
	const [input, setInput] = useState<string>("");
	const [history, setHistory] = useState<string[]>([
		'Welcome to the CLI! Type "help" for commands.',
	]);

	const bottomRef = useRef<HTMLDivElement | null>(null);
	const terminalRef = useRef<HTMLDivElement | null>(null);

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
		setHistory((prev) => [...prev, `> ${command}`, response]);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleCommand(input);
			setInput(""); // Clear input after processing the command
		}
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

	return (
		<TerminalWrapper ref={terminalRef}>
			<HistoryContainer>
				{history.map((line, index) => (
					<div key={index}>{line}</div>
				))}
				<InputContainer>
					<Prompt> {">"} </Prompt>
					<TerminalInput
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyPress}
						autoFocus
					/>
				</InputContainer>
				<div ref={bottomRef} />
			</HistoryContainer>
		</TerminalWrapper>
	);
};

export default Cli;
