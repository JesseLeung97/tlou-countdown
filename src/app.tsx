import { LoadingManager } from "./components/util/LoadingManager";
import { CountdownSection } from "./components/CountdownSection";
import { PreorderSection } from "./components/PreorderSection";
import { FooterSection } from "./components/FooterSection";
import { Window } from "./components/Window";

export function App() {
	return (
		<section id="scroll_container">
			<LoadingManager>
				<Window />
				<CountdownSection />
				<PreorderSection />
			</LoadingManager>
		</section>
	);
}
