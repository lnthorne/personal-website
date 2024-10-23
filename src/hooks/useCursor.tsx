import { KeyboardEvent, useState } from "react";

interface Props {
	input: string;
	handleCommand: (input: string) => void;
}

function useCursor({ input, handleCommand }: Props) {
	const [shifts, setShifts] = useState(0);
	const [paused, setPaused] = useState(true);

	let timeoutRef: NodeJS.Timeout | null = null;

	function pauseWithTimeout() {
		setPaused(true);

		if (timeoutRef) {
			clearTimeout(timeoutRef);
		}

		timeoutRef = setTimeout(() => {
			setPaused(false);
		}, 500);
	}

	function updateShifts(key: string) {
		switch (key) {
			case "ArrowLeft":
				if (input.length > shifts) {
					setShifts(shifts + 1);
				}
				break;
			case "ArrowRight":
				if (shifts > 0) {
					setShifts(shifts - 1);
				}
				break;
			case "Delete":
				if (input.length >= shifts) {
					setShifts(shifts - 1);
				}
				break;
			case "Home":
			case "ArrowUp":
				setShifts(input.length);
				break;
			case "End":
			case "ArrowDown":
				setShifts(0);
				break;
			case "Enter":
				handleCommand(input);
				break;
			default:
				break;
		}
	}

	function handleOnFocus() {
		setPaused(false);
	}

	function handleOnBlur() {
		setPaused(true);
	}

	function handleKeyDown({ key }: KeyboardEvent<HTMLInputElement>) {
		pauseWithTimeout();

		updateShifts(key);
	}

	return {
		handleOnFocus,
		handleOnBlur,
		handleKeyDown,
		shifts,
		paused,
	};
}

export default useCursor;
