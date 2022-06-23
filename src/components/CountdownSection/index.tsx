import { Countdown } from "../Countdown";
import { QuoteGenerator } from "../QuoteGenerator";
import classes from "./styles.module.css";
import { Window } from "../Window";
import { scrollToPreorder } from "../util/ScrollHandler";
import { AboutOverlay } from "../AboutOverlay";
import { useState } from "preact/hooks";
import texts from "../../texts/siteTexts.json";

const CountdownSection = () => {
    const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

    return (
        <section className={classes.wrapper}> 
            <Window />
            <span className={`${classes.about_button}`} onClick={() => setIsAboutOpen(true)}>{texts.about.aboutTitle}</span>
            <span className={classes.down_button} onClick={scrollToPreorder}>DOWN</span>
            <div className={classes.container}>
                <Countdown />
                <QuoteGenerator />
            </div>
            <section className={`${classes.about_page} ${isAboutOpen ? classes.about_page_open : ""}`}>
                <AboutOverlay onClose={setIsAboutOpen}/>
            </section>
        </section>
    );
}

export {
    CountdownSection
}