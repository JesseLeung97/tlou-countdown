import { createContext, FunctionComponent } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";

type TLoadingStatus = "loading" | "loaded";

type TComponentLoadingContext = {
    status: TLoadingStatus;
    updateStatus: (status: TLoadingStatus) => void;
}

type TLoadingContext = {
    status: TLoadingStatus;
    animationFinished: boolean,
    video: TComponentLoadingContext
    audio: TComponentLoadingContext
}

const LoadingContext = createContext<TLoadingContext>(
    {} as TLoadingContext
);

const useLoadingManager = (): TLoadingContext => {
    return useContext(LoadingContext);
}

const LoadingManager: FunctionComponent = ({ children }) => {
    const _removeLoadingTimeout = 1750;
    const [isLoading, setIsLoading] = useState<TLoadingStatus>("loading");
    const [isAnimationFinished, setIsAnimationFinished] = useState<boolean>(false);
    const [videoLoading, setVideoLoading] = useState<TLoadingStatus>("loading");
    const [audioLoading, setAudioLoading] = useState<TLoadingStatus>("loading");

    useEffect(() => {
        if(videoLoading === "loaded" && audioLoading === "loaded") {
            setIsLoading("loaded");
        }
        if(isLoading === "loaded") {
            const loadingContainer = document.getElementById("loading_container");
            const topHalf = document.getElementsByClassName("top_half_pre");
            const bottomHalf = document.getElementsByClassName("bottom_half_pre");
            if(loadingContainer !== null && topHalf !== null && bottomHalf !== null) {
                Array.from(topHalf).forEach(elem => {
                    elem.addEventListener("animationiteration", () => elem.remove());
                });
                Array.from(bottomHalf).forEach(elem => {
                    elem.addEventListener("animationiteration", () => elem.remove());
                });
                topHalf[0].addEventListener("animationiteration", () => {
                    loadingContainer.classList.add("loading_container_hide");
                    setIsAnimationFinished(true);
                    setTimeout(() => {
                        loadingContainer.remove();
                    }, _removeLoadingTimeout);
                });
            }
        }
    }, [videoLoading, audioLoading, isLoading]);

    const [isSimpleLoading, setIsSimpleLoading] = useState<TLoadingStatus>("loaded");

    return (
        <LoadingContext.Provider value={{status: isLoading, animationFinished: isAnimationFinished, video: {status: videoLoading, updateStatus: setVideoLoading}, audio: {status: audioLoading, updateStatus: setAudioLoading}}}>
            <SimpleLoadingContext.Provider value={{status: isSimpleLoading, updateStatus: setIsSimpleLoading}}>
                { children }
            </SimpleLoadingContext.Provider>
        </LoadingContext.Provider>
    );
}

type TSimpleLoadingContext = {
    status: TLoadingStatus;
    updateStatus: (status: TLoadingStatus) => void;
}

const SimpleLoadingContext = createContext<TSimpleLoadingContext>(
    {} as TSimpleLoadingContext
);

const useSimpleLoadingManager = (): TSimpleLoadingContext => {
    return useContext(SimpleLoadingContext);
}

export {
    LoadingManager,
    useLoadingManager,
    useSimpleLoadingManager
}