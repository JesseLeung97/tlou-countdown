import { createRef } from "preact";
import { useEffect } from "preact/hooks";
import classes from "./styles.module.css";

const FireflyLogo = () => {
    const topHalf_1 = createRef<SVGPolygonElement>();
    const bottomHalf_1 = createRef<SVGPathElement>();

    return (
        <svg className={classes.firefly_logo} viewBox="0 0 1000 729" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Firefly Logo</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
                <g className={classes.firefly_logo_group} >
                    <polygon ref={topHalf_1} className={classes.top_half} id="path2996" points="414.466061 0 480.358128 52.311257 480.358128 152.909833 319.903408 320.909413 301.79567 320.909413 181.580391 263.56824 181.580391 245.460503 441.124693 145.867933 441.124693 122.730251 128.766145 193.149246 107.640447 193.149246 8.00571279e-14 83.4968157 10.0598322 58.3471789 452.693519 58.3471789"></polygon>
                    <path className={classes.bottom_half} d="M430.561844,248.478464 L316.885447,387.304469 L429.555866,308.837598 L376.238631,467.783324 L439.364218,381.268576 L439.364218,658.417598 L478.346173,729.339581 L478.346173,313.364525 C452.108986,304.622176 435.34473,284.038676 430.561844,248.478464 Z" id="path3766"></path>
                    <polygon className={classes.top_half} id="path2996-7" points="585.533939 0 519.641872 52.311257 519.641872 152.909833 680.096592 320.909413 698.20433 320.909413 818.419609 263.56824 818.419609 245.460503 558.875307 145.867933 558.875307 122.730251 871.233855 193.149246 892.359553 193.149246 1000 83.4968157 989.940168 58.3471789 547.306481 58.3471789"></polygon>
                    <path ref={bottomHalf_1} className={classes.bottom_half} d="M569.438156,248.478464 L683.114553,387.304469 L570.444134,308.837598 L623.761369,467.783324 L560.635782,381.268576 L560.635782,658.417598 L521.653827,729.339581 L521.653827,313.364525 C547.891014,304.622176 564.65527,284.038676 569.438156,248.478464 L569.438156,248.478464 Z" id="path3766-4"></path>
                </g>
            </g>
        </svg>
    );
}

export {
    FireflyLogo
}