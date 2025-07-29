import type React from "react";
import {
	DetailContainer,
	ProjectHeader,
	ProjectTitle,
	ProjectSubtitle,
	Section,
	SectionTitle,
	FeatureList,
	LinkSection,
	Link,
} from "./styles";

interface ProjectDetailProps {
	id?: number;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id }) => {
	const projects = {
		1: {
			title: "EcoTrack - Sustainability Dashboard",
			subtitle: "Enterprise Environmental Impact Monitoring",
			overview:
				"EcoTrack is a comprehensive sustainability platform that helps organizations monitor, analyze, and reduce their environmental footprint through real-time data visualization and AI-powered recommendations.",
			features: [
				"Real-time carbon footprint tracking across multiple facilities",
				"Interactive dashboards with customizable KPI widgets",
				"AI-powered sustainability recommendations and predictions",
				"Integration with IoT sensors and third-party data sources",
				"Automated ESG reporting and compliance monitoring",
				"Team collaboration tools and goal-setting features",
			],
			technical:
				"Built with a microservices architecture using React for the frontend, Node.js/Express for the API layer, and PostgreSQL for data persistence. Implemented real-time updates using WebSockets and deployed on AWS with auto-scaling capabilities.",
			challenges:
				"The main challenge was processing and visualizing large datasets in real-time while maintaining responsive performance. Solved this by implementing efficient data aggregation pipelines and using D3.js for optimized chart rendering.",
			github: "https://github.com/liamthorne/ecotrack",
			demo: "https://ecotrack-demo.vercel.app",
		},
		2: {
			title: "Neural Canvas - AI Art Generator",
			subtitle: "Creative AI Platform for Digital Artists",
			overview:
				"Neural Canvas combines machine learning with interactive design tools to create a platform where users can generate, customize, and evolve digital artworks using various AI models and creative algorithms.",
			features: [
				"Multiple AI model integration (DALL-E, Stable Diffusion, custom models)",
				"Interactive canvas with real-time style transfer",
				"Collaborative creation rooms for team projects",
				"NFT minting and marketplace integration",
				"Advanced prompt engineering tools",
				"3D artwork generation and WebGL rendering",
			],
			technical:
				"Frontend built with Next.js and Three.js for 3D rendering, backend powered by Python/FastAPI with TensorFlow for ML operations. Used MongoDB for storing artwork metadata and AWS S3 for asset storage.",
			challenges:
				"Balancing creative freedom with computational efficiency was key. Implemented a queue system for heavy ML operations and optimized model inference using GPU acceleration and model quantization techniques.",
			github: "https://github.com/liamthorne/neural-canvas",
			demo: "https://neural-canvas.art",
		},
		3: {
			title: "DevFlow - Developer Productivity Suite",
			subtitle: "Terminal-Based Development Workflow Automation",
			overview:
				"DevFlow is a command-line productivity suite designed to streamline developer workflows through intelligent automation, project templating, and seamless integration with popular development tools.",
			features: [
				"Smart project scaffolding with customizable templates",
				"Automated code quality checks and formatting",
				"Git workflow automation and branch management",
				"Integrated task management and time tracking",
				"Custom command creation and sharing",
				"Cross-platform compatibility (Linux, macOS, Windows)",
			],
			technical:
				"Built entirely in Node.js/TypeScript with a plugin-based architecture. Uses Commander.js for CLI interface, integrates with Git APIs, and includes a local SQLite database for configuration and history.",
			challenges:
				"Creating a consistent experience across different operating systems and terminal environments required extensive testing and platform-specific optimizations. Implemented a robust plugin system for extensibility.",
			github: "https://github.com/liamthorne/devflow",
			demo: "https://devflow.dev",
		},
	};

	const project = projects[id as keyof typeof projects];

	if (!project) {
		return (
			<DetailContainer>
				<div>Project not found. Use "projects" to see available projects.</div>
			</DetailContainer>
		);
	}

	return (
		<DetailContainer>
			<ProjectHeader>
				<ProjectTitle>{project.title}</ProjectTitle>
				<ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
			</ProjectHeader>

			<Section>
				<SectionTitle>Overview</SectionTitle>
				<div>{project.overview}</div>
			</Section>

			<Section>
				<SectionTitle>Key Features</SectionTitle>
				<FeatureList>
					{project.features.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</FeatureList>
			</Section>

			<Section>
				<SectionTitle>Technical Implementation</SectionTitle>
				<div>{project.technical}</div>
			</Section>

			<Section>
				<SectionTitle>Challenges & Solutions</SectionTitle>
				<div>{project.challenges}</div>
			</Section>

			<LinkSection>
				<SectionTitle>Links</SectionTitle>
				<Link href={project.github} target="_blank" rel="noopener noreferrer">
					GitHub Repository
				</Link>
				<Link href={project.demo} target="_blank" rel="noopener noreferrer">
					Live Demo
				</Link>
			</LinkSection>
		</DetailContainer>
	);
};

export default ProjectDetail;
