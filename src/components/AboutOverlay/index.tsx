import classes from "./styles.module.css";
import { OverlayBackground } from "../util/OverlayBackground";

const AboutOverlay = () => {

    const bubbleOnClose = () => {
        console.log("close about");
    }

    return (
        <section>
        <OverlayBackground onClick={bubbleOnClose}/>
        <div className={classes.about_content}>
            <h3>ABOUT</h3>
        </div>
        </section>
    );
}

export {
    AboutOverlay
}