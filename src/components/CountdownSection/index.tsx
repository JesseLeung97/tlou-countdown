import { Countdown } from "../Countdown";
import { QuoteGenerator } from "../QuoteGenerator";
import classes from "./styles.module.css";
import { Window } from "../Window";
import { scrollToPreorder } from "../util/ScrollHandler";

const CountdownSection = () => {
    return (
        <section className={classes.wrapper}>  
            <Window />
            <span className={classes.down_button} onClick={scrollToPreorder}>DOWN</span>
            <div className={classes.container}>
                <Countdown />
                <QuoteGenerator />
            </div>
        </section>
    );
}

export {
    CountdownSection
}