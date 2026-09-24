import { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: ${fadeIn} 0.2s ease-out;
  cursor: pointer;
`;

const ModalVideo = styled.video`
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 8px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  animation: ${scaleIn} 0.2s ease-out;
  cursor: default;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 24px;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  transition: background 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Thumbnail = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 20px auto;
  text-align: center;
  width: fit-content;

  /* center the block itself */
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover .play-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  transition: background 0.15s;
  pointer-events: none;
`;

const PlayIcon = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: 4px;
    border-style: solid;
    border-width: 10px 0 10px 18px;
    border-color: transparent transparent transparent #111827;
  }
`;

const ThumbnailVideo = styled.video`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

/**
 * Extracts the video src from either the element's own src prop
 * or from a nested <source> child rendered by react-markdown.
 */
const resolveVideoSrc = (props: Record<string, unknown>): string => {
	if (typeof props.src === "string" && props.src) {
		return props.src;
	}

	const children = props.children;
	if (Array.isArray(children)) {
		for (const child of children) {
			if (child && typeof child === "object" && "props" in child) {
				const nested = (child as { props: Record<string, unknown> }).props;
				if (typeof nested.src === "string" && nested.src) {
					return nested.src;
				}
			}
		}
	}

	return "";
};

const resolveVideoType = (props: Record<string, unknown>): string => {
	const children = props.children;
	if (Array.isArray(children)) {
		for (const child of children) {
			if (child && typeof child === "object" && "props" in child) {
				const nested = (child as { props: Record<string, unknown> }).props;
				if (typeof nested.type === "string" && nested.type) {
					return nested.type;
				}
			}
		}
	}
	return "";
};

interface VideoModalProps {
	node?: unknown;
	[key: string]: unknown;
}

const VideoModal = ({ node, ...props }: VideoModalProps) => {
	const [open, setOpen] = useState(false);
	const modalVideoRef = useRef<HTMLVideoElement>(null);

	const src = resolveVideoSrc(props);
	const type = resolveVideoType(props);
	const poster = typeof props.poster === "string" ? props.poster : undefined;
	const width = typeof props.width === "string" || typeof props.width === "number" ? props.width : undefined;

	const close = useCallback(() => {
		setOpen(false);
	}, []);

	useEffect(() => {
		if (!open) return;

		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [open, close]);

	useEffect(() => {
		if (open && modalVideoRef.current) {
			modalVideoRef.current.play().catch(() => {});
		}
	}, [open]);

	return (
		<>
			<Thumbnail onClick={() => setOpen(true)}>
				<ThumbnailVideo
					src={src}
					poster={poster}
					width={width}
					muted
					playsInline
					preload="metadata"
				>
					{type && <source src={src} type={type} />}
				</ThumbnailVideo>
				<PlayOverlay className="play-overlay">
					<PlayIcon />
				</PlayOverlay>
			</Thumbnail>

			{open &&
				createPortal(
					<Overlay onClick={close}>
						<CloseButton onClick={close} aria-label="Close video">
							✕
						</CloseButton>
						<ModalVideo
							ref={modalVideoRef}
							controls
							autoPlay
							playsInline
							onClick={(e) => e.stopPropagation()}
						>
							<source src={src} type={type || "video/mp4"} />
						</ModalVideo>
					</Overlay>,
					document.body
				)}
		</>
	);
};

export default VideoModal;
