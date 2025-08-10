import type React from "react";
import { SkillsContainer, SkillCategory, CategoryTitle, SkillList, Skill } from "./styles";

const Skills: React.FC = () => {
	return (
		<SkillsContainer>
			<SkillCategory>
				<CategoryTitle>Frontend Technologies</CategoryTitle>
				<SkillList>
					<Skill>React.js / Next.js</Skill>
					<Skill>React Native</Skill>
					<Skill>TypeScript / JavaScript</Skill>
					<Skill>HTML5 / CSS3 / SASS</Skill>
					<Skill>Tailwind CSS / Styled Components</Skill>
					<Skill>Three.js / WebGL</Skill>
				</SkillList>
			</SkillCategory>

			<SkillCategory>
				<CategoryTitle>Backend & Database</CategoryTitle>
				<SkillList>
					<Skill>Node.js / Express.js</Skill>
					<Skill>C# / .NET</Skill>
					<Skill>C++</Skill>
					<Skill>Python / Django </Skill>
					<Skill>PostgreSQL / MongoDB / Redis</Skill>
					<Skill>GraphQL / REST APIs</Skill>
				</SkillList>
			</SkillCategory>

			<SkillCategory>
				<CategoryTitle>Messaging & Streaming</CategoryTitle>
				<SkillList>
					<Skill>Kafka</Skill>
					<Skill>RabbitMQ</Skill>
					<Skill>Amazon SQS</Skill>
					<Skill>Amazon SNS</Skill>
				</SkillList>
			</SkillCategory>

			<SkillCategory>
				<CategoryTitle>Cloud & DevOps</CategoryTitle>
				<SkillList>
					<Skill>AWS / Google Cloud</Skill>
					<Skill>Docker / Kubernetes</Skill>
					<Skill>CI/CD Pipelines</Skill>
					<Skill>Terraform / Infrastructure as Code</Skill>
				</SkillList>
			</SkillCategory>

			<SkillCategory>
				<CategoryTitle>Observability</CategoryTitle>
				<SkillList>
					<Skill>Metrics (Prometheus / Grafana)</Skill>
					<Skill>APM & Tracing (Datadog)</Skill>
					<Skill>Logging pipelines</Skill>
					<Skill>Alerting & SLOs</Skill>
				</SkillList>
			</SkillCategory>
		</SkillsContainer>
	);
};

export default Skills;
