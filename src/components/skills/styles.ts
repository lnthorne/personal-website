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

export const SkillLevel = styled.span<{ level: "expert" | "advanced" | "intermediate" }>`
	margin-left: 8px;
	color: ${(props) => {
		switch (props.level) {
			case "expert":
				return "#00ff00";
			case "advanced":
				return "#ffff00";
			case "intermediate":
				return "#ff8800";
			default:
				return "#00cc00";
		}
	}};
	font-size: 12px;
`;
