import classes from "./styles.module.css";
import mainMenuMusic from "./MainMenuMusic.mp3";
import { useLoadingManager } from "../util/LoadingManager";
import { createRef } from "preact";
import texts from "../../texts/siteTexts.json";
import { useEffect, useState } from "preact/hooks";
import { AudioIcon } from "../AudioIcon";
import { useInitialize } from "../../util";
import { useSmartphoneCheck } from "../util/SmartphoneCheck";

const Music = () => {
    const { audio } = useLoadingManager();
    const audioElem = createRef<HTMLAudioElement>();
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const isSp = useSmartphoneCheck();

    useEffect(() => {
        if(isSp) {
            audio.updateStatus("loaded");
        }
    }, [isSp]);

    const toggleAudio = () => {
        if(audioElem.current !== null) {
            audioElem.current.play();
            audioElem.current.muted = !audioElem.current.muted;
            setIsMuted(!isMuted);
        }
    }

    return (
        <>
            <audio ref={audioElem} muted={true} loop={true} onCanPlayThrough={() => audio.updateStatus("loaded")} id="main_menu_music">
                <source src={mainMenuMusic} type="audio/mp3" />
            </audio>
            <span onClick={() => toggleAudio()} className={classes.mute_button}>{isMuted ? texts.countdownSection.toggleMuteOff : texts.countdownSection.toggleMuteOn}
                <span className={classes.button_icon}>
                    <AudioIcon isMuted={isMuted}/>
                </span>
            </span>
        </>
    );
}

export {
    Music
}