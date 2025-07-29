import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 600) {
	const [isMobile, setIsMobile] = useState(
		typeof window !== "undefined" && window.innerWidth <= breakpoint
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
		const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

		mql.addEventListener ? mql.addEventListener("change", onChange) : mql.addListener(onChange);

		return () => {
			mql.removeEventListener
				? mql.removeEventListener("change", onChange)
				: mql.removeListener(onChange);
		};
	}, [breakpoint]);

	return isMobile;
}
