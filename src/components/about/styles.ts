import styled from "styled-components";

export const AboutContainer = styled.div`
	margin: 20px 0;
	line-height: 1.8;
`;

export const Section = styled.div`
	margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
	color: #00ff00;
	font-weight: bold;
	margin-bottom: 8px;
	text-decoration: underline;
`;

export const Interest = styled.div`
	&::before {
		content: "> ";
		color: #00ff00;
	}
`;
