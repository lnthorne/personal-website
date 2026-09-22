import type React from "react";
import { blogPosts } from "./blogData";
import {
	Blog,
	BlogHeader,
	BlogLink,
	BlogList,
	BlogMeta,
	BlogNumber,
	BlogsContainer,
	BlogTitle,
	Instruction,
} from "./styles";

const Blogs: React.FC = () => {
	return (
		<BlogsContainer>
			<div>Writing:</div>
			<BlogList>
				{blogPosts.map((post) => (
					<Blog key={post.id}>
						<BlogTitle>
							<BlogLink href={`/blogs/${post.slug}`} target="_blank" rel="noopener noreferrer">
								<BlogNumber>[{post.id}]</BlogNumber>
								{post.title}
							</BlogLink>
						</BlogTitle>
						<BlogHeader>{post.header}</BlogHeader>
						<BlogMeta>
							{post.published} · {post.readTime}
						</BlogMeta>
					</Blog>
				))}
			</BlogList>
			<Instruction>
				Type "open [number]" to read a post. Example: "open 1" to read "{blogPosts[0].title}".
			</Instruction>
		</BlogsContainer>
	);
};

export default Blogs;
