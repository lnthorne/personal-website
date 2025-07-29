import styled from "styled-components";

export const ContactContainer = styled.div`
	margin: 20px 0;
	line-height: 1.8;
`;

export const SectionTitle = styled.div`
	color: #00ff00;
	font-weight: bold;
	margin-bottom: 16px;
	font-size: 18px;
	text-decoration: underline;
`;

export const ContactMethod = styled.div`
	margin: 12px 0;
	display: flex;
	align-items: center;
`;

export const ContactLabel = styled.span`
	color: #00ff00;
	width: 120px;
	display: inline-block;
	font-weight: bold;
`;

export const ContactLink = styled.a`
	color: #00cc00;
	text-decoration: underline;

	&:hover {
		color: #ffff00;
	}
`;

export const ContactValue = styled.span`
	color: #00cc00;
`;

export const MessageSection = styled.div`
	margin-top: 30px;
	padding: 16px;
	border: 1px solid #00ff00;
	border-radius: 4px;
`;
