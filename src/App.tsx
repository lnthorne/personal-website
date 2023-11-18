import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Works, Contact } from "./components";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div
					className="bg-hero-pattern bg-cover
		    bg-no-repeat bg-center "
				>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
			</div>
			<div className="relative z-0">
				<Contact />
			</div>
		</BrowserRouter>
	);
};

export default App;
