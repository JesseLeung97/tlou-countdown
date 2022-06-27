import classes from "./styles.module.css";
import windowLoop from "./WindowLoop4k.mp4";
import windowLoopSP from "./WindowLoopSP.mp4";
import { useLoadingManager } from "../util/LoadingManager";
import { useSmartphoneCheck } from "../util/SmartphoneCheck";

const Window = () => {
    const { video } = useLoadingManager();
    const isSp = useSmartphoneCheck();

    const handleMetadataLoaded = () => {
        if(!isSp) {
            return;
        }
        video.updateStatus("loaded");
    }

    return (
        <>
            <video onCanPlayThrough={() => video.updateStatus("loaded")} onLoadedMetadata={() => handleMetadataLoaded()} width="100vw" height="100%" autoPlay={true} muted={true} loop={true} playsInline={true} className={classes.window}>
                <source src={isSp ? windowLoopSP : windowLoop} type="video/mp4" />
            </video>
            <div className={classes.blur_overlay}/>
        </>
    );
}

export {
    Window
}