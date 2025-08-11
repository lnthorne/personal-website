import styled from "styled-components";

export const DetailContainer = styled.div`
	margin: 20px 0;
	line-height: 1.6;
`;

export const ProjectHeader = styled.div`
	border-bottom: 2px solid #00ff00;
	padding-bottom: 12px;
	margin-bottom: 20px;
`;

export const ProjectTitle = styled.h2`
	color: #00ff00;
	margin-bottom: 8px;
`;

export const ProjectSubtitle = styled.div`
	color: #00cc00;
	font-style: italic;
`;

export const Section = styled.div`
	margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
	color: #00ff00;
	margin-bottom: 8px;
	text-decoration: underline;
`;

export const Feature = styled.div`
	&::before {
		content: "> ";
		color: #00ff00;
	}
`;

export const LinkSection = styled.div`
	margin-top: 20px;
	padding: 12px;
	border: 1px solid #00ff00;
	border-radius: 4px;
`;

export const Link = styled.a`
	color: #00ff00;
	text-decoration: underline;
	margin-right: 16px;

	&:hover {
		color: #ffff00;
	}
`;
