import React, { useState, useEffect, useRef } from "react";
import Donut from "react-spinning-donut";
import {
	InputContainer,
	RowContainer,
	TerminalContainer,
	TerminalContent,
	TerminalLine,
	Prompt,
	InputWrapper,
	Input,
	Cursor,
} from "./styles";
import AsciiHeader from "../header/AsciiHeader";
import { TerminalEntry, TerminalState } from "./terminal.types";
import Help from "../help/Help";

const Terminal: React.FC = () => {
	const [input, setInput] = useState<string>("");
	const [state, setState] = useState<TerminalState>({
		currentScreen: "welcome",
		entries: [],
	});
	const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);

	const terminalContentRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// Focus immediately on component mount
		const timer = setTimeout(() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Auto-focus input immediately and on any state change
		const focusInput = () => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		};

		focusInput();

		// Also focus when clicking anywhere in the terminal
		const handleTerminalClick = () => {
			focusInput();
		};

		const terminalElement = document.querySelector('[data-terminal="true"]');
		if (terminalElement) {
			terminalElement.addEventListener("click", handleTerminalClick);
		}

		return () => {
			if (terminalElement) {
				terminalElement.removeEventListener("click", handleTerminalClick);
			}
		};
	}, [state, input]);

	useEffect(() => {
		// Global focus management - always keep input focused
		const handleGlobalClick = (e: MouseEvent) => {
			// Don't interfere with links or buttons
			const target = e.target as HTMLElement;
			if (target.tagName === "A" || target.tagName === "BUTTON") {
				return;
			}

			if (inputRef.current) {
				inputRef.current.focus();
			}
		};

		document.addEventListener("click", handleGlobalClick);

		return () => {
			document.removeEventListener("click", handleGlobalClick);
		};
	}, []);

	useEffect(() => {
		// Auto-scroll to bottom when new content is added
		if (terminalContentRef.current) {
			const scrollElement = terminalContentRef.current;
			// Small delay to ensure content is rendered
			setTimeout(() => {
				scrollElement.scrollTop = scrollElement.scrollHeight;
			}, 10);
		}
	}, [state.entries]);

	const getScreenContent = (screenType: string, projectId?: number) => {
		switch (screenType) {
			case "help":
				return <Help />;
			case "about":
			// return <AboutScreen />
			case "skills":
			// return <SkillsScreen />
			case "projects":
			// return <ProjectsScreen />
			case "contact":
			// return <ContactScreen />;
			case "project-detail":
			// return <ProjectDetail id={projectId!} />
			default:
				return null;
		}
	};

	const handleCommand = (command: string) => {
		const trimmedCommand = command.trim().toLowerCase();

		// Add the command to entries
		const commandEntry: TerminalEntry = {
			type: "command",
			content: `guest@portfolio:~$ ${command}`,
			id: `cmd-${Date.now()}`,
		};

		if (!trimmedCommand) {
			setState((prev) => ({
				...prev,
				entries: [...prev.entries, commandEntry],
			}));
			return;
		}

		// Handle project detail commands
		if (trimmedCommand.startsWith("open ")) {
			const projectId = Number.parseInt(trimmedCommand.split(" ")[1]);
			if (projectId >= 1 && projectId <= 3) {
				const screenEntry: TerminalEntry = {
					type: "screen",
					content: getScreenContent("project-detail", projectId),
					id: `screen-${Date.now()}`,
				};
				setState((prev) => ({
					currentScreen: "project-detail",
					projectId,
					entries: [...prev.entries, commandEntry, screenEntry],
				}));
			} else {
				const errorEntry: TerminalEntry = {
					type: "output",
					content: "Invalid project number. Use: open 1, open 2, or open 3",
					id: `error-${Date.now()}`,
				};
				setState((prev) => ({
					...prev,
					entries: [...prev.entries, commandEntry, errorEntry],
				}));
			}
			return;
		}

		let newScreen = "";
		let screenContent = null;

		switch (trimmedCommand) {
			case "help":
				newScreen = "help";
				screenContent = getScreenContent("help");
				break;
			case "about":
				newScreen = "about";
				screenContent = getScreenContent("about");
				break;
			case "skills":
				newScreen = "skills";
				screenContent = getScreenContent("skills");
				break;
			case "projects":
				newScreen = "projects";
				screenContent = getScreenContent("projects");
				break;
			case "contact":
				newScreen = "contact";
				screenContent = getScreenContent("contact");
				break;
			case "clear":
				setState({
					currentScreen: "welcome",
					entries: [],
				});
				return;
			default:
				const errorEntry: TerminalEntry = {
					type: "output",
					content: `Command not found: ${command}\nType "help" to see available commands.`,
					id: `error-${Date.now()}`,
				};
				setState((prev) => ({
					...prev,
					entries: [...prev.entries, commandEntry, errorEntry],
				}));
				return;
		}

		if (screenContent) {
			const screenEntry: TerminalEntry = {
				type: "screen",
				content: screenContent,
				id: `screen-${Date.now()}`,
			};
			setState((prev) => ({
				currentScreen: newScreen,
				entries: [...prev.entries, commandEntry, screenEntry],
			}));
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			const command = input.trim();

			// Add non-empty commands to history
			if (command) {
				setCommandHistory((prev) => [...prev, command]);
			}

			handleCommand(input);
			setInput("");
			setCommandHistoryIndex(-1); // Reset history index
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			if (commandHistory.length > 0) {
				const newIndex =
					commandHistoryIndex === -1
						? commandHistory.length - 1
						: Math.max(0, commandHistoryIndex - 1);
				setCommandHistoryIndex(newIndex);
				setInput(commandHistory[newIndex]);
			}
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			if (commandHistoryIndex !== -1) {
				const newIndex = commandHistoryIndex + 1;
				if (newIndex >= commandHistory.length) {
					setCommandHistoryIndex(-1);
					setInput("");
				} else {
					setCommandHistoryIndex(newIndex);
					setInput(commandHistory[newIndex]);
				}
			}
		}
	};

	useEffect(() => {
		// Only reset if the input was changed by typing, not by arrow navigation
		const currentCommand = commandHistory[commandHistoryIndex];
		if (commandHistoryIndex !== -1 && input !== currentCommand) {
			setCommandHistoryIndex(-1);
		}
	}, [input, commandHistoryIndex, commandHistory]);

	return (
		<TerminalContainer data-terminal="true" onClick={() => inputRef.current?.focus()}>
			<TerminalContent ref={terminalContentRef}>
				<RowContainer>
					<Donut color="green" />
					<AsciiHeader />
				</RowContainer>
				{state.entries.map((entry) => (
					<TerminalLine key={entry.id}>{entry.content}</TerminalLine>
				))}

				<InputContainer>
					<Prompt>guest@portfolio:~$ </Prompt>
					<InputWrapper>
						<Input
							ref={inputRef}
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							placeholder="Type 'help' to get started..."
						/>
						{input.length === 0 && <Cursor>_</Cursor>}
					</InputWrapper>
				</InputContainer>
			</TerminalContent>
		</TerminalContainer>
	);
};

export default Terminal;
