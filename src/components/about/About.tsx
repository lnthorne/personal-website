import type React from "react";
import { AboutContainer, Interest, Section, SectionTitle } from "./styles";

const About: React.FC = () => {
	return (
		<AboutContainer>
			<Section>
				<SectionTitle>$ whoami</SectionTitle>
				<div>
					{`Hey, I'm Liam Thorne -> software dev. One year out of SFU (’24). I build software that doesn't fall over.`}
				</div>
			</Section>

			<Section>
				<SectionTitle>$ cat background.txt</SectionTitle>
				<div>
					Day to day I turn fuzzy problems into simple, dependable solutions across web, mobile, and
					backend services. I like small, readable services, clear boundaries, and logs that
					actually help at 3 a.m. Most of what I know came from shipping, breaking things, and
					fixing them better. Goal: useful, fast, predictable, and cheap to run.
				</div>
			</Section>

			<Section>
				<SectionTitle>$ ls interests/</SectionTitle>
				<div>
					<Interest>Event-driven stuff (Kafka) & async jobs</Interest>
					<Interest>Data modeling & query tuning in Postgres</Interest>
					<Interest>Caching and making things fast (without burning $$$)</Interest>
					<Interest>Observability: logs, traces, metrics that tell the truth</Interest>
					<Interest>Self-hosting (K8s, NAS, Networking, Monitoring)</Interest>
					<Interest>3D Printing</Interest>
					<Interest>Coffee brewing optimization algorithms</Interest>
				</div>
			</Section>

			<Section>
				<SectionTitle>$ echo $PHILOSOPHY</SectionTitle>
				<div>Ship small, measure, repeat. Make prod boring. Future-me shouldn’t hate past-me.</div>
			</Section>
		</AboutContainer>
	);
};

export default About;
