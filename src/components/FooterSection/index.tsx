import classes from "./styles.module.css";
import texts from "../../texts/siteTexts.json";
import { useState } from "preact/hooks";
import { AboutOverlay } from "../AboutOverlay";

const FooterSection = () => {
    const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

    return (
        <section className={classes.footer_wrapper}>
            <div className={classes.width_wrapper}>
                <a href={texts.links.author} target="_blank" className={classes.footer_link}>{texts.footer.author}</a>
                <span className={`${classes.open_about} ${classes.footer_link}`} onClick={() => setIsAboutOpen(true)}>{texts.about.aboutTitle}</span>
                <a href={texts.links.githubLink} target="_blank" className={classes.footer_link}>{texts.footer.github}</a>
                <section className={`${classes.about_page} ${isAboutOpen ? classes.about_page_open : ""}`}>
                    <AboutOverlay onClose={setIsAboutOpen}/>
                </section>
            </div>
        </section>
    );
}

export {
    FooterSection
}