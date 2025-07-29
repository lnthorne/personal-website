import type React from "react";
import {
	ProjectsContainer,
	ProjectList,
	Project,
	ProjectTitle,
	ProjectNumber,
	ProjectDesc,
	ProjectTech,
	Instruction,
} from "./styles";

const Projects: React.FC = () => {
	return (
		<ProjectsContainer>
			<div>Featured Projects:</div>

			<ProjectList>
				<Project>
					<ProjectTitle>
						<ProjectNumber>[1]</ProjectNumber>
						EcoTrack - Sustainability Dashboard
					</ProjectTitle>
					<ProjectDesc>
						A comprehensive web application that helps companies track and visualize their
						environmental impact with real-time analytics and AI-powered insights.
					</ProjectDesc>
					<ProjectTech>Tech Stack: React, Node.js, PostgreSQL, D3.js, AWS</ProjectTech>
				</Project>

				<Project>
					<ProjectTitle>
						<ProjectNumber>[2]</ProjectNumber>
						Neural Canvas - AI Art Generator
					</ProjectTitle>
					<ProjectDesc>
						An interactive platform that combines machine learning with creative coding to generate
						unique digital artworks based on user inputs and preferences.
					</ProjectDesc>
					<ProjectTech>Tech Stack: Next.js, Python, TensorFlow, Three.js, MongoDB</ProjectTech>
				</Project>

				<Project>
					<ProjectTitle>
						<ProjectNumber>[3]</ProjectNumber>
						DevFlow - Developer Productivity Suite
					</ProjectTitle>
					<ProjectDesc>
						A terminal-based productivity tool that integrates with popular development workflows,
						featuring custom commands, project templates, and automation scripts.
					</ProjectDesc>
					<ProjectTech>Tech Stack: Node.js, TypeScript, CLI frameworks, Git APIs</ProjectTech>
				</Project>
			</ProjectList>

			<Instruction>
				Type "open [number]" to view detailed information about a project. Example: "open 1" to view
				EcoTrack details.
			</Instruction>
		</ProjectsContainer>
	);
};

export default Projects;
