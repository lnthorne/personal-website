import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { getBlogPostBySlug } from "./blogData";
import {
	BlogPage,
	DetailContainer,
	DetailHeader,
	DetailMeta,
	DetailSubtitle,
	DetailTitle,
	MarkdownContent,
	StatusMessage,
} from "./styles";
import VideoModal from "./VideoModal";

interface BlogDetailProps {
	slug?: string;
}

type ContentStatus = "loading" | "ready" | "error";

const sanitizeSchema = {
	...defaultSchema,
	tagNames: [...(defaultSchema.tagNames ?? []), "video", "source"],
	attributes: {
		...defaultSchema.attributes,
		div: [...(defaultSchema.attributes?.div ?? []), "style"],
		span: [...(defaultSchema.attributes?.span ?? []), "style"],
		img: [...(defaultSchema.attributes?.img ?? []), "width", "height", "style"],
		video: ["src", "width", "height", "controls", "autoPlay", "autoplay", "loop", "muted", "playsInline", "playsinline", "preload", "poster", "style"],
		source: ["src", "type"],
	},
};

const BlogDetail = ({ slug }: BlogDetailProps) => {
	const post = getBlogPostBySlug(slug);
	const [markdown, setMarkdown] = useState("");
	const [status, setStatus] = useState<ContentStatus>("loading");

	useEffect(() => {
		if (!post) {
			return;
		}

		const controller = new AbortController();

		const loadPost = async () => {
			setStatus("loading");

			try {
				const response = await fetch(`${process.env.PUBLIC_URL}${post.markdownPath}`, {
					signal: controller.signal,
				});
				const contentType = response.headers.get("content-type") ?? "";

				if (!response.ok || contentType.includes("text/html")) {
					throw new Error("Unable to load post content.");
				}

				setMarkdown(await response.text());
				setStatus("ready");
			} catch (error) {
				if ((error as DOMException).name !== "AbortError") {
					setStatus("error");
				}
			}
		};

		void loadPost();
		return () => controller.abort();
	}, [post]);

	if (!post) {
		return (
			<BlogPage>
				<DetailContainer>
					<DetailTitle>Post not found</DetailTitle>
					<StatusMessage>The requested blog post does not exist.</StatusMessage>
					<a href="/">← Return to terminal</a>
				</DetailContainer>
			</BlogPage>
		);
	}

	return (
		<BlogPage>
			<DetailContainer>
				<DetailHeader>
					<DetailTitle>{post.title}</DetailTitle>
					<DetailSubtitle>{post.header}</DetailSubtitle>
					<DetailMeta>
						{post.published} · {post.readTime}
					</DetailMeta>
				</DetailHeader>

				{status === "loading" && <StatusMessage>Loading post…</StatusMessage>}
				{status === "error" && (
					<StatusMessage>Unable to load this post. Please try again later.</StatusMessage>
				)}
				{status === "ready" && (
					<MarkdownContent>
						<ReactMarkdown
							rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
							components={{
								a: ({ node, children, ...props }) => (
									<a {...props} target="_blank" rel="noopener noreferrer">
										{children}
									</a>
								),
								video: (props) => <VideoModal {...props} />,
							}}
						>
							{markdown}
						</ReactMarkdown>
					</MarkdownContent>
				)}

				<DetailMeta>
					<a href="/">← Return to terminal</a>
				</DetailMeta>
			</DetailContainer>
		</BlogPage>
	);
};

export default BlogDetail;
