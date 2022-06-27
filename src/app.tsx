import { LoadingManager } from "./components/util/LoadingManager";
import { CountdownSection } from "./components/CountdownSection";
import { PreorderSection } from "./components/PreorderSection";
import { FooterSection } from "./components/FooterSection";
import { ScrollHandler } from "./components/util/ScrollHandler";
import { FireflyLoading } from "./components/FireflyLoading";
import { SmartphoneCheck } from "./components/util/SmartphoneCheck";

export function App() {

	(function(){
		var doc = window.document;
		
		// If there's a hash, or addEventListener is undefined, stop here
		if( !location.hash ){
			//scroll to 1
			window.scrollTo( 0, 1 );
			var scrollTop = 1,
				getScrollTop = function(){
					return window.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
				},
			
				//reset to 0 on bodyready, if needed
				bodycheck = setInterval(function(){
					if( doc.body ){
						clearInterval( bodycheck );
						scrollTop = getScrollTop();
						window.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
					}	
				}, 15 );
			
				window.addEventListener( "load", function(){
				setTimeout(function(){
					//at load, if user hasn't scrolled more than 20 or so...
					if( getScrollTop() < 20 ){
						//reset to hide addr bar at onload
						window.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
					}
				}, 0);
			}, false );
		}
	})();

	return (
		<SmartphoneCheck>
			<ScrollHandler>
				<LoadingManager>
					<CountdownSection />
					<PreorderSection />
					<FooterSection />
				</LoadingManager>
			</ScrollHandler>
		</SmartphoneCheck>
	);
}
