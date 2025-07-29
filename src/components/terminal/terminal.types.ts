import React from "react";

export interface TerminalEntry {
	type: "command" | "output" | "screen";
	content: string | React.ReactNode;
	id: string;
}

export interface TerminalState {
	currentScreen: string;
	projectId?: number;
	entries: TerminalEntry[];
}
