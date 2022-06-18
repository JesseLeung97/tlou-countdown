import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface OverlayBackgroundProps {
    onClick: () => any
}

const OverlayBackground: FunctionalComponent<OverlayBackgroundProps> = ({
    onClick
}) => {
    return (
        <div className={classes.overlay_background} onClick={() => onClick()} />
    );
}

export {
    OverlayBackground
}