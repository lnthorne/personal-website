import React, { useState, useEffect, useRef, MouseEventHandler } from "react";
import Donut from "react-spinning-donut";

import useCursor from "../hooks/useCursor";
import {
	GlobalStyles,
	InputMirrorStyled,
	InputStyled,
	MainStyled,
	InputContainer,
	HistoryContainer,
	RowContainer,
} from "../styles/cli.styles";
import AsciiArt from "./Name";
import Boot from "./Boot";

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
				response = "Available commands: help, clear, whois, portfolio, linkedin";
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
			<Boot />
			<MainStyled onClick={handleFocusClick} onBlur={handleOnBlur} ref={terminalRef}>
				<RowContainer>
					<Donut color="green" />
					<AsciiArt />
				</RowContainer>
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
