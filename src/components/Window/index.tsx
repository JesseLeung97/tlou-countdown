import classes from "./styles.module.css";
import windowLoop from "./WindowLoop4k.mp4";
import { useLoadingManager } from "../util/LoadingManager";

const Window = () => {
    const { video } = useLoadingManager();

    return (
        <>
            <video onLoadStart={() => video.updateStatus("loading")} onCanPlayThrough={() => video.updateStatus("loaded")} width="100vw" height="100vh" autoPlay={true} muted={true} loop={true} className={classes.window}>
                <source src={windowLoop} type="video/mp4" />
            </video>
            <div className={classes.blur_overlay}/>
        </>
    );
}

export {
    Window
}