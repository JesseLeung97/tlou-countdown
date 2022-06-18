import classes from "./styles.module.css";
import { config } from "../../config";
import { useEffect, useState } from "preact/hooks";
import texts from "../../texts/quotes.json";
import { useLoadingManager } from "../util/LoadingManager";

const QuoteGenerator = () => {
    const quotes = texts.quotes;

    let updateInterval: ReturnType<typeof setInterval> | null = null;
    const [quote, setQuote] = useState<string>("");
    const { status } = useLoadingManager();

    useEffect(() => {
        if(status === "loading") return;
        if(updateInterval === null) {
            updateInterval = setInterval(() => {
                pickQuote();
            }, config.QUOTE_INTERVAL);
        }
    }, [status]);

    const pickQuote = (): void => {
        const quotesLength = quotes.length;
        const randomIndex = Math.floor(Math.random() * quotesLength);
        setQuote(quotes[randomIndex]);
    }

    return (
        <div className={classes.quote_container}>
            <h2 className={classes.shown_quote}>{quote !== "" ? `"${quote}"` : ""}</h2>
        </div>
    );
}

export {
    QuoteGenerator
}