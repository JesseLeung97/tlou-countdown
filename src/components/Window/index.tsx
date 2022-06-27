import classes from "./styles.module.css";
import windowLoop from "./WindowLoop4k.mp4";
import windowLoopSP from "./WindowLoopSP.mp4";
import { useLoadingManager } from "../util/LoadingManager";
import { useState } from "preact/hooks";
import { useInitialize } from "../../util";

const Window = () => {
    const _spCheckWidth = 600;
    const [isSP, setIsSP] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth <= _spCheckWidth : false);
    const { video } = useLoadingManager();

    const updateSPCheck = () => {
        if(typeof window !== "undefined") {
            setIsSP(window.innerWidth <= _spCheckWidth);
        }
    }

    useInitialize(() => {
        if(typeof window !== "undefined") {
            window.addEventListener("resize", updateSPCheck);
        }
        return () => {
            if(typeof window !== undefined) {
                window.removeEventListener("resize", updateSPCheck);
            }
        }
    });

    return (
        <>
            <video onLoadStart={() => video.updateStatus("loading")} onCanPlayThrough={() => video.updateStatus("loaded")} width="100vw" height="100%" autoPlay={true} muted={true} loop={true} playsInline={true} className={classes.window}>
                <source src={isSP ? windowLoopSP : windowLoop} type="video/mp4" />
            </video>
            <div className={classes.blur_overlay}/>
        </>
    );
}

export {
    Window
}