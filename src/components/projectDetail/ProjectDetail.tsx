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
			title: "Spade — Home Services Platform",
			subtitle: "Marketplace for Home Services",
			overview:
				"Spade connects homeowners with service providers. Post a job with photos and details, get competitive bids, chat in-app, pick a provider, and track progress end-to-end with reviews at completion.",
			features: [
				"Job posting with photos, scope, budget, and timelines",
				"Competitive bidding with profiles, past work, and ratings",
				"In-app messaging with image sharing and push notifications",
				"Job tracking from open → in progress → closed",
				"Reviews and ratings to build trust and repeat work",
				"Search & filters by service type, date, and location",
			],
			technical:
				"React Native app for iOS/Android. Backend microservices in Node.js/TypeScript on Kubernetes with PostgreSQL. Event pipeline with Kafka for bids/notifications/audit. Real-time chat, email and push notifications. Image uploads to object storage, geocoding for locations, and observability with Prometheus/Grafana. Redis used for caching",
			challenges:
				"Balancing real-time features (chat, bids, notifications) with cost and reliability. Solved with an event-driven pipeline (Kafka), debounced geocoding and server-side validation, and tighter caching/metrics to keep the app responsive while spend stays predictable.",
			demo: "https://www.spadeservices.app",
		},
		2: {
			title: "HHA CBR — Community-Based Rehabilitation",
			subtitle: "Field Care & Resource Management",
			overview:
				"Built in collaboration between Simon Fraser University and Hope Health Action. A mobile-first app used by HHA’s CBR teams in Ugandan refugee settlements to register patients, plan visits and care, and manage medical resources. Designed to work fully offline with reliable sync when connectivity returns.",
			features: [
				"Patient registry with assessments, conditions, and care plans",
				"Visit scheduling, task lists, and follow-up tracking",
				"Offline-first data capture with background sync & conflict handling",
				"Inventory and equipment tracking for medical supplies",
				"Role-based access for field staff, supervisors, and admins",
				"Dashboards and exports for program reporting",
			],
			technical:
				"React Native app with local-first storage via WatermelonDB and delta sync to a Django REST API backed by PostgreSQL. Media captured offline and uploaded on sync. Token-based auth, encrypted transport, and audit trails for clinical changes.",
			challenges:
				"Intermittent connectivity and low-end Android hardware. Solved with offline-by-default workflows, resumable sync, careful query/index tuning, and battery-friendly background processes.",
			demo: "https://www.hopehealthaction.org",
		},
		3: {
			title: "WoaLocative — AR Without Maps",
			subtitle: "Geospatial AR Interface Research",
			overview:
				"A Center for Digital Media × UBC CeDAR prototype exploring how to relate to land without traditional maps. Instead of a basemap and pins, WoaLocative uses geospatial anchors and in place of visual cues to surface context directly in place, challenging the idea that today’s boundaries were inevitable.",
			features: [
				"Mapless AR: place-linked content via geospatial anchors",
				"Proximity & direction cues (no 2D map or blue dot)",
				"Context overlays tied to specific locations",
				"Pathless exploration with distance-based reveals",
				"Field authoring & testing mode for anchor placement",
				"Calibration utilities and accuracy gating for safer UX",
			],
			technical:
				"Unity prototype using ARCore’s Geospatial API for Earth-relative anchoring (lat/lng/alt/heading). Localization via VPS with sensor fallback. Client-side anchor management for rapid iteration and custom mapless UI patterns (compass ring, distance gates, viewport hints).",
			challenges:
				"Reliable orientation without a map and variable VPS availability. Addressed with confidence thresholds, heading smoothing, and progressive, proximity-first cues that don’t rely on a basemap.",
			demo: "https://thecdm.ca/projects/mobile-ar-immersive-experience-cedar",
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
				<Link href={project.demo} target="_blank" rel="noopener noreferrer">
					Website
				</Link>
			</LinkSection>
		</DetailContainer>
	);
};

export default ProjectDetail;
