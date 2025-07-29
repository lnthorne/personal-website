import { styled } from "styled-components";

export const AsciiArtContainer = styled.pre`
	font-family: "VT323", monospace;
	white-space: pre;
	letter-spacing: 0;
	line-height: 1.2;
	margin: 0;
	/* Ensure crisp scaling */
	transform-origin: top left;

	@media (max-width: 1080px) {
		transform: scale(0.7);
	}

	@media (max-width: 780px) {
		transform: scale(0.6);
	}
`;

export const Heading = styled.div`
	font-size: 8.2px;
`;

export const SubHeading = styled.div`
	font-size: 4px;
`;
