import React, { useState, useEffect, useRef } from "react";
import Donut from "react-spinning-donut";
import { aboutMe } from "./Text";
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
	const [displayedText, setDisplayedText] = useState<string>("");

	const bottomRef = useRef<HTMLDivElement | null>(null);
	const terminalRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleCommand = async (command: string) => {
		let response: string | string[] = "";
		switch (command.toLowerCase()) {
			case "help":
				response = "Available commands: help, clear, whois, portfolio, linkedin";
				break;
			case "clear":
				setHistory([]);
				setDisplayedText("");
				return;
			case "about":
				response = aboutMe;
				break;
			default:
				response = `Command not found: ${command}`;
		}

		setHistory((prev) => [...prev, `guest@portfolio:~$ ${command}`]);

		if (typeof response === "string") {
			await typeText(response);
			setHistory((prev) => [...prev, ...(Array.isArray(response) ? response : [response])]);
			setDisplayedText("");
		}
		setInput("");
	};

	const typeText = async (text: string) => {
		setDisplayedText("");
		for (let i = 0; i < text.length; i++) {
			await new Promise((resolve) => setTimeout(resolve, 1));
			setDisplayedText((prev) => prev + text[i]);
		}
	};

	const { handleOnFocus, handleOnBlur, handleKeyDown, shifts, paused } = useCursor({
		input,
		handleCommand,
	});

	const handleFocusClick = () => {
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
	}, [history, displayedText]);

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
					<div>{displayedText}</div>

					<InputContainer>
						<span>guest@portfolio:~$ </span>
						<InputMirrorStyled cursorPaused={paused} cursorChar={inCursor}>
							{beforeCursor}
							<span>{inCursor}</span>
							{afterCursor}
						</InputMirrorStyled>
						<InputStyled
							value={input}
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
