import { useState, useEffect } from "preact/hooks";
import { useInitialize } from "../../util";
import { config } from "../../config";
import { useLoadingManager } from "../util/LoadingManager";
import classes from "./styles.module.css";

const Countdown = () => {
    const _YEAR_SEC = 31557600; // 24 * 60 * 60 * 365.25
    const _DAYS_SEC = 86400; // 24 * 60 * 60
    const _HOURS_SEC = 3600; // 60 * 60
    const _MIN_SEC = 60;
    const _SEC_MILLI = 1000;
    
    let updateInterval: ReturnType<typeof setInterval> | null = null;
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const { status, animationFinished } = useLoadingManager();
    const endDateLocal = new Date(
            config.END_DATE_YEAR, 
            config.END_DATE_MONTH_INDEX, 
            config.END_DATE_DAY);
    const endDateUtc = Date.UTC(
            endDateLocal.getFullYear(), 
            endDateLocal.getMonth(), 
            endDateLocal.getDate());
    

    useInitialize(() => {
        calcRemaining();
        if(updateInterval === null) {
            updateInterval = setInterval(() => {
                calcRemaining();
            }, _SEC_MILLI)
        }
    });

    const calcRemaining = () => {
        let nowLocal = new Date();
        let nowUtc = Date.UTC(
                nowLocal.getFullYear(), 
                nowLocal.getMonth(), 
                nowLocal.getDate(),
                nowLocal.getHours(), 
                nowLocal.getMinutes(), 
                nowLocal.getSeconds());

        let diff = (endDateUtc - nowUtc) / _SEC_MILLI;
        if(diff >= _DAYS_SEC) {
            const newDays = Math.floor(diff / _DAYS_SEC);
            setDays(newDays);
            diff -= newDays * _DAYS_SEC;
        }
        if(diff >= _HOURS_SEC) {
            const newHours = Math.floor(diff / _HOURS_SEC);
            setHours(newHours);
            diff -= newHours * _HOURS_SEC;
        }
        if(diff >= _MIN_SEC) {
            const newMinutes = Math.floor(diff / _MIN_SEC);
            setMinutes(newMinutes);
            diff -= newMinutes * _MIN_SEC;
        }
        setSeconds(diff);
    }

    const formatString = (datePiece: number): string => {
        let stringDatePiece = String(datePiece);
        while(stringDatePiece.length < 2) {
            stringDatePiece = "0" + stringDatePiece;
        }
        return stringDatePiece;
    }

    return (
        <div className={`${classes.countdown} ${status === "loaded" && animationFinished ? classes.countdown_animation : ""}`}>
            <span className={classes.countdown_col}>
                <span className={classes.countdown_col_element}>
                    <strong>{formatString(days)}</strong>
                    <span>{days === 1 ? "Day" : "Days"}</span>
                </span>
            </span>

            <span className={classes.countdown_col}>
                <span className={classes.countdown_col_element}>
                    <strong>{formatString(hours)}</strong>
                    <span>Hours</span>
                </span>
            </span>

            <span className={classes.countdown_col}>
                <span className={classes.countdown_col_element}>
                    <strong>{formatString(minutes)}</strong>
                    <span>Min</span>
                </span>
            </span>

            <span className={classes.countdown_col}>
                <span className={classes.countdown_col_element}>
                    <strong>{formatString(seconds)}</strong>
                    <span>Sec</span>
                </span>
            </span>
        </div>
    );
}

export {
    Countdown
}