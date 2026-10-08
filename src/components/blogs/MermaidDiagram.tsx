import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CloseButton, Overlay, scaleIn } from "./modalStyles";

const Figure = styled.figure`
	margin: 32px 0;
	text-align: center;
`;

// The inline diagram is a button so it can be opened with a mouse or keyboard.
const ExpandButton = styled.button`
	display: block;
	width: 100%;
	padding: 0;
	overflow-x: auto;
	border: none;
	border-radius: 4px;
	background: none;
	cursor: zoom-in;

	svg {
		max-width: 100%;
		height: auto;
	}

	&:focus-visible {
		outline: 2px solid #1d4ed8;
		outline-offset: 4px;
	}
`;

const Caption = styled.figcaption`
	margin-top: 8px;
	color: #6b7280;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	font-size: 0.8rem;
`;

const ModalPanel = styled.div`
	box-sizing: border-box;
	width: min(95vw, 1400px);
	height: 90vh;
	padding: 24px;
	overflow: auto;
	border-radius: 8px;
	background: #fafaf9;
	box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
	animation: ${scaleIn} 0.2s ease-out;
	cursor: default;

	/* Scale the diagram up to fill the panel. Mermaid sets an inline max-width, hence !important. */
	svg {
		display: block;
		width: 100%;
		height: 100%;
		max-width: none !important;
	}
`;

const Fallback = styled.pre`
	margin: 32px 0;
	padding: 16px;
	overflow-x: auto;
	border-radius: 4px;
	background: #f3f4f6;
	font-family: "IBM Plex Mono", monospace;
	font-size: 0.8em;
`;

type MermaidApi = typeof import("mermaid").default;

let mermaidPromise: Promise<MermaidApi> | null = null;
let diagramCount = 0;

// Load Mermaid on demand so pages without diagrams don't download it.
const loadMermaid = () => {
	if (!mermaidPromise) {
		mermaidPromise = import("mermaid").then(({ default: mermaid }) => {
			mermaid.initialize({
				startOnLoad: false,
				securityLevel: "strict",
				theme: "neutral",
				fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
			});
			return mermaid;
		});
	}
	return mermaidPromise;
};

interface MermaidDiagramProps {
	chart: string;
}

const MermaidDiagram = ({ chart }: MermaidDiagramProps) => {
	const [svg, setSvg] = useState("");
	const [modalSvg, setModalSvg] = useState("");
	const [failed, setFailed] = useState(false);
	const [open, setOpen] = useState(false);
	const expandButtonRef = useRef<HTMLButtonElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		let cancelled = false;
		diagramCount += 1;
		const id = `mermaid-diagram-${diagramCount}`;

		loadMermaid()
			.then((mermaid) => mermaid.render(id, chart))
			.then(({ svg: renderedSvg }) => {
				if (cancelled) return;
				setSvg(renderedSvg);
				// The SVG's styles and arrowheads are keyed to its id, so the modal copy
				// gets its own id to avoid duplicate ids in the page.
				setModalSvg(renderedSvg.split(id).join(`${id}-modal`));
			})
			.catch(() => {
				if (!cancelled) setFailed(true);
			});

		return () => {
			cancelled = true;
		};
	}, [chart]);

	const close = useCallback(() => {
		setOpen(false);
		expandButtonRef.current?.focus();
	}, []);

	useEffect(() => {
		if (!open) return;

		closeButtonRef.current?.focus();
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [open, close]);

	if (failed) {
		return <Fallback>{chart}</Fallback>;
	}

	// Mermaid sanitizes its output in strict security mode.
	return (
		<Figure>
			<ExpandButton
				ref={expandButtonRef}
				type="button"
				aria-label="Enlarge diagram"
				onClick={() => setOpen(true)}
				dangerouslySetInnerHTML={{ __html: svg }}
			/>
			{svg && <Caption>Click to enlarge</Caption>}

			{open &&
				createPortal(
					<Overlay onClick={close}>
						<CloseButton ref={closeButtonRef} onClick={close} aria-label="Close diagram">
							✕
						</CloseButton>
						<ModalPanel
							role="dialog"
							aria-modal="true"
							aria-label="Enlarged diagram"
							onClick={(e) => e.stopPropagation()}
							dangerouslySetInnerHTML={{ __html: modalSvg }}
						/>
					</Overlay>,
					document.body
				)}
		</Figure>
	);
};

export default MermaidDiagram;
