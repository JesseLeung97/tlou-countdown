import { LoadingManager } from "./components/util/LoadingManager";
import { CountdownSection } from "./components/CountdownSection";
import { PreorderSection } from "./components/PreorderSection";
import { FooterSection } from "./components/FooterSection";
import { ScrollHandler } from "./components/util/ScrollHandler";
import { Music } from "./components/Music";
import { FireflyLoading } from "./components/FireflyLoading";

export function App() {
	return (
		<ScrollHandler>
			<LoadingManager>
				<Music />
				<CountdownSection />
				<PreorderSection />
				<FooterSection />
			</LoadingManager>
		</ScrollHandler>
	);
}
