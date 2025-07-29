import type React from "react";
import {
	SkillsContainer,
	SkillCategory,
	CategoryTitle,
	SkillList,
	Skill,
	SkillLevel,
} from "./styles";

const Skills: React.FC = () => {
	return (
		<SkillsContainer>
			<SkillCategory>
				<CategoryTitle>Frontend Technologies</CategoryTitle>
				<SkillList>
					<Skill>
						React.js / Next.js <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
					<Skill>
						TypeScript / JavaScript <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
					<Skill>
						Vue.js / Nuxt.js <SkillLevel level="advanced">[Advanced]</SkillLevel>
					</Skill>
					<Skill>
						HTML5 / CSS3 / SASS <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
					<Skill>
						Tailwind CSS / Styled Components <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
					<Skill>
						Three.js / WebGL <SkillLevel level="intermediate">[Intermediate]</SkillLevel>
					</Skill>
				</SkillList>
			</SkillCategory>

			<SkillCategory>
				<CategoryTitle>Backend & Database</CategoryTitle>
				<SkillList>
					<Skill>
						Node.js / Express.js <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
					<Skill>
						Python / Django / FastAPI <SkillLevel level="advanced">[Advanced]</SkillLevel>
					</Skill>
					<Skill>
						PostgreSQL / MongoDB <SkillLevel level="advanced">[Advanced]</SkillLevel>
					</Skill>
					<Skill>
						Redis / ElasticSearch <SkillLevel level="intermediate">[Intermediate]</SkillLevel>
					</Skill>
					<Skill>
						GraphQL / REST APIs <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
				</SkillList>
			</SkillCategory>

			<SkillCategory>
				<CategoryTitle>Cloud & DevOps</CategoryTitle>
				<SkillList>
					<Skill>
						AWS / Google Cloud <SkillLevel level="advanced">[Advanced]</SkillLevel>
					</Skill>
					<Skill>
						Docker / Kubernetes <SkillLevel level="advanced">[Advanced]</SkillLevel>
					</Skill>
					<Skill>
						CI/CD Pipelines <SkillLevel level="advanced">[Advanced]</SkillLevel>
					</Skill>
					<Skill>
						Terraform / Infrastructure as Code{" "}
						<SkillLevel level="intermediate">[Intermediate]</SkillLevel>
					</Skill>
				</SkillList>
			</SkillCategory>

			<SkillCategory>
				<CategoryTitle>Tools & Workflow</CategoryTitle>
				<SkillList>
					<Skill>
						Git / GitHub Actions <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
					<Skill>
						VS Code / Vim <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
					<Skill>
						Figma / Adobe Creative Suite <SkillLevel level="advanced">[Advanced]</SkillLevel>
					</Skill>
					<Skill>
						Linux / Terminal <SkillLevel level="expert">[Expert]</SkillLevel>
					</Skill>
				</SkillList>
			</SkillCategory>
		</SkillsContainer>
	);
};

export default Skills;
