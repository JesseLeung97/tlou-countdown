import { LoadingManager } from "./components/util/LoadingManager";
import { CountdownSection } from "./components/CountdownSection";
import { PreorderSection } from "./components/PreorderSection";

export function App() {
	return (
		<LoadingManager>
			<CountdownSection />
			<PreorderSection />
		</LoadingManager>
	);
}
