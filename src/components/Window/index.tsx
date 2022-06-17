import classes from "./styles.module.css";
import windowLoop from "./WindowLoop4k.mp4";

const Window = () => {
    return (
        <>
            <video width="100vw" height="100vh" autoPlay={true} muted={true} loop={true} className={classes.window}>
                <source src={windowLoop} type="video/mp4" />
            </video>
        </>
    );
}

export {
    Window
}