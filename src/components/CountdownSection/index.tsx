import { Countdown } from "../Countdown";
import { QuoteGenerator } from "../QuoteGenerator";
import classes from "./styles.module.css";

const CountdownSection = () => {
    return (
        <section className={classes.wrapper}>
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