import type React from "react";
import {
	ContactContainer,
	SectionTitle,
	ContactMethod,
	ContactLabel,
	ContactLink,
	MessageSection,
	Available,
} from "./styles";

const Contact: React.FC = () => {
	return (
		<ContactContainer>
			<SectionTitle>Connections</SectionTitle>

			<ContactMethod>
				<ContactLabel>Email:</ContactLabel>
				<ContactLink href="mailto:lnthorne@shaw.ca">lnthorne@shaw.ca</ContactLink>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>LinkedIn:</ContactLabel>
				<ContactLink
					href="https://www.linkedin.com/in/liam-thorne/"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin.com/in/liam-thorne
				</ContactLink>
			</ContactMethod>

			<ContactMethod>
				<ContactLabel>GitHub:</ContactLabel>
				<ContactLink href="https://github.com/lnthorne" target="_blank" rel="noopener noreferrer">
					github.com/lnthorne
				</ContactLink>
			</ContactMethod>

			<MessageSection>
				<SectionTitle>Drop a Line</SectionTitle>
				<div>
					Always down to chat new projects, weird ideas, or just nerding out about 3D printers. If
					you need a hand shipping something real, message me.
				</div>
				<br />
				<div>
					<strong>Currently available for:</strong>
					<Available>Full-stack projects</Available>
					<Available>Open source collabs</Available>
				</div>
			</MessageSection>
		</ContactContainer>
	);
};

export default Contact;
