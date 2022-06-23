import classes from "./styles.module.css";
import { useLoadingManager } from "../util/LoadingManager";
import { FireflyLogo } from "./FireflyLogo";
import { useEffect } from "preact/hooks";

const FireflyLoading = () => {
    const { status } = useLoadingManager();

    useEffect(() => {
        console.log(status);
    }, [status])

    return (
        <>
        { false &&
            <section className={`${classes.loading_container}`}>
                <FireflyLogo />
            </section>
        }
        </>
    );
}

export {
    FireflyLoading
}