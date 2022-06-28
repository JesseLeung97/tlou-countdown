import classes from "./styles.module.css";
import { config } from "../../config";
import { useEffect, useState } from "preact/hooks";
import texts from "../../texts/quotes.json";
import { useLoadingManager } from "../util/LoadingManager";

const QuoteGenerator = () => {
    const quotes = texts.quotes;

    let updateInterval: ReturnType<typeof setInterval> | null = null;
    const [quote, setQuote] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { status } = useLoadingManager();

    useEffect(() => {
        if(status === "loading") return;
        startUpdate();
    }, [status]);

    const _duration = 9000;
    const _start = 0;
    const _keyframe_0 = (15 / 100) * _duration ;
    const _keyFrame_1 = (25 / 100) * _duration;
    const _keyframe_2 = (75 / 100) * _duration;
    const _keyframe_3 = (85 / 100) * _duration;
    const _end = 100;

    const startUpdate = () => {
        let startTime = new Date().getTime();
        const update = () => {
            const frameTime = new Date().getTime();
            const dTime = frameTime - startTime;
            if(dTime > _duration) {
                startTime = new Date().getTime();
                pickQuote();
                requestAnimationFrame(update);
                return;
            }
            if(dTime >= _keyframe_2) {
                setIsVisible(false);
            } else if(dTime >= _keyframe_0) {
                setIsVisible(true);
            } 
            window.requestAnimationFrame(update);
        }
        update();
    }

    const pickQuote = (): void => {
        const quotesLength = quotes.length;
        const randomIndex = Math.floor(Math.random() * quotesLength);
        setQuote(quotes[randomIndex]);
    }

    return (
        <div className={classes.quote_container}>
            <h2 className={`${isVisible ? classes.quote_visible : ""} ${classes.shown_quote}`}>{quote !== "" ? `"${quote}"` : ""}</h2>
        </div>
    );
}

export {
    QuoteGenerator
}