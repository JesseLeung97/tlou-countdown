import classes from "./styles.module.css";
import { OverlayBackground } from "../util/OverlayBackground";
import texts from "../../texts/siteTexts.json";
import { FunctionalComponent } from "preact";
import { StateUpdater } from "preact/hooks";

interface SubmitStoreFormProps {
    aboutContainerClass: string,
    onClose: StateUpdater<boolean>
}

const AboutOverlay: FunctionalComponent<SubmitStoreFormProps> = ({ aboutContainerClass, onClose }) => {
    const bubbleOnClose = () => {
        onClose(false);
    }

    return (
        <section className={classes.about_container}>
            <OverlayBackground onClick={bubbleOnClose}/>
            <div className={`${aboutContainerClass ?? ""} ${classes.about_wrapper}`}>
                <div className={classes.about_content}>
                    <span>
                        <span className={classes.title_container}>
                            <h3 className={classes.about_title}>{texts.about.aboutTitle}</h3>
                            <div className={classes.close_icon} onClick={() => bubbleOnClose()} >x</div>
                        </span>
                        <p className={`${classes.text} ${classes.text_margin_bottom}`}>{texts.about.about}</p>
                        <p className={classes.text}>{texts.about.aboutTech} <a href={texts.links.githubLink} target="_"><span><u>{texts.footer.github}</u></span></a></p>
                    </span>
                    <span className={classes.disclaimer_container}>
                        <h3 className={classes.disclaimer_title}>{texts.about.supportTitle}</h3>
                        <p className={`${classes.text} ${classes.text_margin_bottom}`}>{texts.about.support_1}</p>
                        <p className={`${classes.text} ${classes.text_margin_bottom}`}>{texts.about.support_2}</p>
                        <div className={classes.supporters_list}>
                        { texts.about.supporters.map(supporter => <span className={classes.supporter}>{supporter}</span>)}
                        </div>
                    </span>
                    <span className={classes.disclaimer_container}>
                        <h3 className={classes.disclaimer_title}>{texts.about.disclaimerTitle}</h3>
                        <p className={classes.text}>{texts.about.disclaimer}</p>
                    </span>
                </div>
            </div>
        </section>
    );
}

export {
    AboutOverlay
}