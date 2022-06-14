import classes from "./styles.module.css";
import windowLoop from "./WindowLoop.mp4";

const Window = () => {
    return (
        <>
            <div className={classes.window_container}>
            </div>
            <video width="100vw" height="100vh" autoPlay={true} muted={true} loop={true} className={classes.window}>
                <source src={windowLoop} type="video/mp4" />
            </video>
        </>
    );
}

export {
    Window
}