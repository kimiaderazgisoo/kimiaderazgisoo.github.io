import "./App.css";

import { Branding } from "./components/branding";
import { Portfolio } from "./components/portfolio";

function App() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center gap-12">
			<Branding />
			<Portfolio />
		</div>
	);
}

export default App;
