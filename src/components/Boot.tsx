import React, { useEffect, useState } from "react";
import {
	BootScreenWrapper,
	BootWindow,
	ProgressBar,
	ProgressBarWrapper,
} from "../styles/bootWindow.styles";

function Boot() {
	const [progress, setProgress] = useState(0);
	const [bootComplete, setBootComplete] = useState(false);
	const [flicker, setFlicker] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					setFlicker(true);
					clearInterval(interval);
					setTimeout(() => {
						setBootComplete(true);
					}, 500);
					return 100;
				}
				return prev + 5;
			});
		}, 100);

		return () => clearInterval(interval);
	}, []);
	return (
		<BootScreenWrapper isVisible={!bootComplete} flicker={flicker}>
			<BootWindow>
				<div>Please wait, booting up...</div>
				<ProgressBarWrapper>
					<ProgressBar progress={progress}>{"#".repeat(progress / 5)}</ProgressBar>
				</ProgressBarWrapper>
			</BootWindow>
		</BootScreenWrapper>
	);
}

export default Boot;
