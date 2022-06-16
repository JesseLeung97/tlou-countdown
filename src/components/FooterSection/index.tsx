import classes from "./styles.module.css";
import texts from "../../texts/siteTexts.json";

const FooterSection = () => {
    return (
        <section className={classes.footer_wrapper}>
            <a href={texts.links.githubLink}>{texts.footer.github}</a>
        </section>
    );
}

export {
    FooterSection
}