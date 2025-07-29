import type React from "react";
import {
	ContactContainer,
	SectionTitle,
	ContactMethod,
	ContactLabel,
	ContactLink,
	ContactValue,
	MessageSection,
} from "./styles";

const Contact: React.FC = () => {
	return (
		<ContactContainer>
			<SectionTitle>Connections</SectionTitle>

			<ContactMethod>
				<ContactLabel>Email:</ContactLabel>
				<ContactLink href="mailto:liam.thorne@example.com">liam.thorne@example.com</ContactLink>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>LinkedIn:</ContactLabel>
				<ContactLink
					href="https://linkedin.com/in/liamthorne"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin.com/in/liamthorne
				</ContactLink>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>GitHub:</ContactLabel>
				<ContactLink href="https://github.com/liamthorne" target="_blank" rel="noopener noreferrer">
					github.com/liamthorne
				</ContactLink>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>Twitter:</ContactLabel>
				<ContactLink
					href="https://twitter.com/liam_codes"
					target="_blank"
					rel="noopener noreferrer"
				>
					@liam_codes
				</ContactLink>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>Website:</ContactLabel>
				<ContactLink href="https://liamthorne.dev" target="_blank" rel="noopener noreferrer">
					liamthorne.dev
				</ContactLink>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>Location:</ContactLabel>
				<ContactValue>San Francisco, CA</ContactValue>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>Timezone:</ContactLabel>
				<ContactValue>PST (UTC-8)</ContactValue>
			</ContactMethod>

			<MessageSection>
				<SectionTitle>Let's Build Something Amazing</SectionTitle>
				<div>
					I'm always interested in discussing new opportunities, innovative projects, or just
					chatting about technology and creative coding. Whether you're looking for a collaborator,
					have a project in mind, or want to grab a virtual coffee, don't hesitate to reach out!
				</div>
				<br />
				<div>
					<strong>Currently available for:</strong>
					<br />• Full-stack development projects
					<br />• Technical consulting and architecture review
					<br />• Open source collaborations
					<br />• Speaking engagements and workshops
				</div>
			</MessageSection>
		</ContactContainer>
	);
};

export default Contact;
