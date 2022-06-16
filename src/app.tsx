import { LoadingManager } from "./components/util/LoadingManager";
import { CountdownSection } from "./components/CountdownSection";
import { PreorderSection } from "./components/PreorderSection";
import { FooterSection } from "./components/FooterSection";
import { Window } from "./components/Window";
import { ScrollHandler } from "./components/util/ScrollHandler";

export function App() {
	return (
		<ScrollHandler>
			<LoadingManager>
				<Window />
				<CountdownSection />
				<PreorderSection />
			</LoadingManager>
		</ScrollHandler>
	);
}
