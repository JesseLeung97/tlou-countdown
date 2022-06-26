import classes from "./styles.module.css";
import logo from "./PartILogo.png";
import { useLoadingManager } from "../util/LoadingManager";

const PartILogo = () => {
    const { status, animationFinished } = useLoadingManager();

    return (
        <div className={`${status === "loaded" && animationFinished ? classes.animation : ""} ${classes.logo_container}`}>
            <img src={logo} />
        </div>
    );
}

export {
    PartILogo
}