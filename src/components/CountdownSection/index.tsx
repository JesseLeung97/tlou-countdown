import { Countdown } from "../Countdown";
import { QuoteGenerator } from "../QuoteGenerator";
import classes from "./styles.module.css";

const CountdownSection = () => {
    return (
        <div className={classes.wrapper}>
            <Countdown />
            <QuoteGenerator />
        </div>
    );
}

export {
    CountdownSection
}