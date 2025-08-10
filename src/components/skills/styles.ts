import styled from "styled-components";

export const SkillsContainer = styled.div`
	margin: 20px 0;
	line-height: 1.6;
`;

export const SkillCategory = styled.div`
	margin-bottom: 24px;
`;

export const CategoryTitle = styled.div`
	color: #00ff00;
	font-weight: bold;
	margin-bottom: 12px;
	text-decoration: underline;
`;

export const SkillList = styled.div`
	margin-left: 16px;
`;

export const Skill = styled.div`
	margin: 4px 0;

	&::before {
		content: "> ";
		color: #00ff00;
	}
`;
