import type React from "react";
import { HelpContainer, CommandList, Command, CommandName, CommandDesc } from "./styles";

const Help: React.FC = () => {
	return (
		<HelpContainer>
			<div>Available Commands:</div>
			<CommandList>
				<Command>
					<CommandName>about</CommandName>
					<CommandDesc>Learn more about me and my background</CommandDesc>
				</Command>
				<Command>
					<CommandName>skills</CommandName>
					<CommandDesc>View my technical skills and expertise</CommandDesc>
				</Command>
				<Command>
					<CommandName>projects</CommandName>
					<CommandDesc>Browse my portfolio projects</CommandDesc>
				</Command>
				<Command>
					<CommandName>blogs</CommandName>
					<CommandDesc>Read notes on building products and software</CommandDesc>
				</Command>
				<Command>
					<CommandName>contact</CommandName>
					<CommandDesc>Get in touch with me</CommandDesc>
				</Command>
				<Command>
					<CommandName>clear</CommandName>
					<CommandDesc>Clear the terminal screen</CommandDesc>
				</Command>
				<Command>
					<CommandName>help</CommandName>
					<CommandDesc>Show this help message</CommandDesc>
				</Command>
			</CommandList>
			<div style={{ marginTop: "20px", color: "#006600" }}>
				Tip: After opening projects or blogs, use "open 1", "open 2", etc. to view an item.
			</div>
		</HelpContainer>
	);
};

export default Help;
