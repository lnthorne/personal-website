import { styled } from "styled-components";

export const AsciiArtContainer = styled.pre`
	font-family: "IBM Plex Mono", monospace;
	white-space: pre;
	letter-spacing: 0;
	line-height: 1.2;
	margin: 0;
	transform-origin: top left;

	@media (max-width: 1080px) {
		transform: scale(0.7);
	}

	@media (max-width: 780px) {
		transform: scale(0.6);
	}

	@media (max-width: 425px) {
		transform: scale(0.45);
	}
`;

export const Heading = styled.div`
	font-size: 8.2px;

	@media (max-width: 425px) {
		font-size: 6.2px;
	}
`;

export const SubHeading = styled.div`
	font-size: 4px;
`;
