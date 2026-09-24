import styled from "styled-components";

export const BlogsContainer = styled.div`
  margin: 20px 0;
  line-height: 1.6;
`;

export const BlogList = styled.div`
  margin-top: 16px;
`;

export const Blog = styled.article`
  margin: 16px 0;
  padding: 12px;
  border: 1px solid #00ff00;
  border-radius: 4px;
`;

export const BlogTitle = styled.div`
  color: #00ff00;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const BlogNumber = styled.span`
  margin-right: 8px;
`;

export const BlogHeader = styled.div`
  color: #00cc00;
  margin-bottom: 8px;
`;

export const BlogMeta = styled.div`
  color: #006600;
  font-size: 14px;
`;

export const Instruction = styled.div`
  margin-top: 20px;
  color: #ffff00;
  font-style: italic;
`;

export const BlogLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #ffff00;
    text-decoration: underline;
  }
`;

export const BlogPage = styled.main`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: clamp(40px, 8vw, 96px) 24px;
  background: #fafaf9;
  color: #1f2937;
  font-family: Georgia, "Times New Roman", serif;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
`;

export const DetailContainer = styled.article`
  max-width: 760px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.75;

  a {
    color: #1d4ed8;
  }

  a:hover {
    color: #1e40af;
  }
`;

export const DetailHeader = styled.header`
  padding-bottom: 24px;
  margin-bottom: 36px;
  border-bottom: 1px solid #d1d5db;
`;

export const DetailTitle = styled.h1`
  margin: 0 0 12px;
  color: #111827;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
`;

export const DetailSubtitle = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const DetailMeta = styled.div`
  margin-top: 16px;
  color: #6b7280;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 0.9rem;
`;

export const MarkdownContent = styled.div`
  color: #1f2937;

  h1,
  h2,
  h3,
  h4 {
    margin: 40px 0 16px;
    color: #111827;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.25;
  }

  h2 {
    font-size: 1.6rem;
  }

  p,
  li {
    max-width: 68ch;
  }

  p,
  ul,
  ol,
  blockquote {
    margin: 0 0 20px;
  }

  ul,
  ol {
    padding-left: 28px;
  }

  li + li {
    margin-top: 6px;
  }

  blockquote {
    padding-left: 20px;
    border-left: 3px solid #93c5fd;
    color: #4b5563;
    font-style: italic;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }

  video {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 20px 0;
    border-radius: 4px;
  }

  code {
    padding: 2px 5px;
    border-radius: 3px;
    background: #e5e7eb;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.85em;
  }
`;

export const StatusMessage = styled.div`
  margin: 20px 0;
  color: #4b5563;
`;
