import { Countdown } from "../Countdown";
import { QuoteGenerator } from "../QuoteGenerator";
import classes from "./styles.module.css";
import { Window } from "../Window";
import { scrollToPreorder } from "../util/ScrollHandler";
import { AboutOverlay } from "../AboutOverlay";
import { useState } from "preact/hooks";
import texts from "../../texts/siteTexts.json";
import { Music } from "../Music";
import { MouseScroll } from "../MouseScroll";
import { AboutIcon } from "../AboutIcon";
import { PartILogo } from "../PartILogo";

const CountdownSection = () => {
    const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

    return (
        <section className={classes.wrapper}> 
            <Window />
            <Music />
            <span className={`${classes.about_button}`} onClick={() => setIsAboutOpen(true)}>{texts.about.aboutTitle}<span className={classes.button_icon}><AboutIcon /></span></span>
            <span className={classes.down_button} onClick={scrollToPreorder}>
                <MouseScroll />
            </span>
            <PartILogo />
            <div className={classes.container}>
                <Countdown />
                <QuoteGenerator />
            </div>
            <div className={classes.blur_overlay}/>
            <section className={`${classes.about_page} ${isAboutOpen ? classes.about_page_open : ""}`}>
                <AboutOverlay aboutContainerClass={`${classes.about_container} ${isAboutOpen ? classes.about_container_open : ""}`} onClose={setIsAboutOpen}/>
            </section>
        </section>
    );
}

export {
    CountdownSection
}