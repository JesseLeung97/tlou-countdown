import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface AudioIconProps {
    isMuted: boolean
}

const AudioIcon: FunctionalComponent<AudioIconProps> = ({ isMuted }) => {
    return (
        <>
        {isMuted && 
            <svg className={classes.speaker_container} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
                <path className={classes.speaker_base} d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"/>
                <path className={classes.speaker_audio} d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"/>
            </svg>
        }
        {!isMuted && 
            <svg className={classes.mute_container} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
                <path className={classes.mute_base} d="m39,14-17,15H6V48H22l17,15z"/>
                <path className={classes.mute_audio} d="m49,26 20,24m0-24-20,24"/>
            </svg>
        }
        </>
    );
}

export {
    AudioIcon
}