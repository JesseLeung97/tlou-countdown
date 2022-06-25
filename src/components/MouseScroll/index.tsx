import { createRef } from "preact";
import { useEffect } from "preact/hooks";
import classes from "./styles.module.css";

const MouseScroll = () => {
    return (
        <>
        <svg className={classes.scroll_arrow_container} viewBox="0 0 110 81" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Scroll Arrow</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <polyline className={classes.bounce_alpha} id="Path-2" stroke-width="10" points="5 5 55 35 105 5"></polyline>
                <polyline className={`${classes.bounce_alpha} ${classes.bounce_alpha_delay}`} id="Path-2" stroke-width="10" points="5 45 55 75 105 45"></polyline>
            </g>
        </svg>
        </>
    );
}

export {
    MouseScroll
}