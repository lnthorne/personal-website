import type React from "react";
import Donut from "react-spinning-donut";
import { DonutWrapper } from "./styles";

const SpinningDonut: React.FC = () => {
	return (
		<DonutWrapper>
			<Donut color="#00ff00" />
		</DonutWrapper>
	);
};

export default SpinningDonut;
