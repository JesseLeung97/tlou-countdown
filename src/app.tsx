import { LoadingManager } from "./components/util/LoadingManager";
import { CountdownSection } from "./components/CountdownSection";
import { PreorderSection } from "./components/PreorderSection";
import { FooterSection } from "./components/FooterSection";
import { Window } from "./components/Window";
import { ScrollHandler } from "./components/util/ScrollHandler";
import { AboutOverlay } from "./components/AboutOverlay";

export function App() {
	return (
		<ScrollHandler>
			<LoadingManager>
				<Window />
				<CountdownSection />
				<PreorderSection />
				<AboutOverlay />
			</LoadingManager>
		</ScrollHandler>
	);
}
