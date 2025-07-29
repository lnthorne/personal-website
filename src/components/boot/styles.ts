import styled, { keyframes } from "styled-components";

export const BootScreenWrapper = styled.div<{ isVisible: boolean; flicker: boolean }>`
	display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	background-color: ${({ flicker }) => (flicker ? "black" : "green")};
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
`;

export const BootWindow = styled.div`
	background-color: black;
	color: green;
	font-family: "IBM Plex Mono", monospace;
	border: 2px solid green;
	padding: 20px;
	width: 300px;
	text-align: center;
`;

export const ProgressBarWrapper = styled.div`
	margin-top: 10px;
	background-color: green;
	width: 100%;
	height: 20px;
	border: 1px solid green;
`;

export const ProgressBar = styled.div<{ progress: number }>`
	background-color: black;
	height: 100%;
	width: 100%;
	color: green;
	text-align: left;
	font-family: "IBM Plex Mono", monospace;
`;

export const crtFlash = keyframes`
  0% {
    opacity: 1;
    transform: scaleY(0.01);
  }
  25% {
    opacity: 1;
    transform: scaleY(1);
  }
  75% {
    opacity: 0;
    transform: scaleY(1); 
  }
  100% {
    opacity: 0;
    transform: scaleY(0.01);
  }
`;

// Styled component for the CRT Flash
export const CRTFlashEffect = styled.div<{ isVisible: boolean }>`
	display: ${({ isVisible }) => (isVisible ? "block" : "none")};
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: white;
	z-index: 10000; /* Ensure it's on top */
	animation: ${crtFlash} 0.7s ease-in-out;
`;
