import type React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
	margin: 20px 0;
	line-height: 1.8;
`;

const Section = styled.div`
	margin-bottom: 20px;
`;

const SectionTitle = styled.div`
	color: #00ff00;
	font-weight: bold;
	margin-bottom: 8px;
	text-decoration: underline;
`;

const About: React.FC = () => {
	return (
		<AboutContainer>
			<Section>
				<SectionTitle>$ whoami</SectionTitle>
				<div>
					Hello! I'm Liam Thorne, a passionate full-stack developer and creative technologist with
					over 5 years of experience building innovative web applications and digital experiences.
				</div>
			</Section>

			<Section>
				<SectionTitle>$ cat background.txt</SectionTitle>
				<div>
					I specialize in modern JavaScript frameworks, cloud architecture, and creating seamless
					user experiences. My journey began with a Computer Science degree, but my real education
					came from countless hours of coding, experimenting, and pushing the boundaries of what's
					possible on the web.
				</div>
			</Section>

			<Section>
				<SectionTitle>$ ls interests/</SectionTitle>
				<div>
					• Web3 and blockchain technologies
					<br />• AI/ML integration in web applications
					<br />• Creative coding and generative art
					<br />• Open source contributions
					<br />• Terminal-based interfaces (obviously!)
					<br />• Coffee brewing optimization algorithms
				</div>
			</Section>

			<Section>
				<SectionTitle>$ echo $PHILOSOPHY</SectionTitle>
				<div>
					"Code is poetry written in logic. Every function should tell a story, every interface
					should feel intuitive, and every project should leave the world a little bit better than
					before."
				</div>
			</Section>
		</AboutContainer>
	);
};

export default About;
