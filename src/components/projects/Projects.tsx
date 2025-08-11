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
						Spade - Home Services Platform
					</ProjectTitle>
					<ProjectDesc>
						A two-sided marketplace for home services. Homeowners post jobs with photos and
						timelines; companies bid, chat in-app, and get hired. Reviews and progress updates keep
						everything transparent from post to completion.
					</ProjectDesc>
					<ProjectTech>
						Stack: React Native, Node.js, PostgreSQL, Redis, Kubernetes, Kafka, Prometheus
					</ProjectTech>
				</Project>

				<Project>
					<ProjectTitle>
						<ProjectNumber>[2]</ProjectNumber>
						HHA CBR - Community-Based Rehabilitation
					</ProjectTitle>
					<ProjectDesc>
						A mobile-first system for community health teams in Ugandan refugee settlements. It
						tracks patients, visits, and care plans; manages medical inventory and equipment; and
						works offline with seamless sync when connectivity returns. Built for field use with
						fast search and role-based access, and deployed with Hope Health Action’s CBR program.
					</ProjectDesc>
					<ProjectTech>Stack: React Native, Python, Django, PostgreSQL, WatermelonDB</ProjectTech>
				</Project>

				<Project>
					<ProjectTitle>
						<ProjectNumber>[3]</ProjectNumber>
						WoaLocative - AR Without Maps
					</ProjectTitle>
					<ProjectDesc>
						A Center for Digital Media × UBC CeDAR research prototype exploring a mapless AR
						interface. Instead of a basemap and pins, geospatial anchors attach visual cues and
						context directly to places—inviting people to relate to land, space, and environment
						without assuming today’s boundaries were inevitable.
					</ProjectDesc>
					<ProjectTech>Stack: Unity, ARCore, Google Geospatial</ProjectTech>
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
