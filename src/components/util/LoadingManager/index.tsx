import { createContext, FunctionComponent } from "preact";
import { useState, useEffect, useContext, useReducer } from "preact/hooks";

type TLoadingStatus = "loading" | "loaded";

type TLoadingContext = {
    status: TLoadingStatus;
    updateStatus: (status: TLoadingStatus) => void;
}

const reducer = (state: number, action: TLoadingStatus): number => {
    if(action === "loading") {
        return state += 1;
    }
    if(action === "loaded") {
        return state -= 1;
    }
    return 0;
}

const LoadingContext = createContext<TLoadingContext>(
    {} as TLoadingContext
);

const useLoadingManager = (): TLoadingContext => {
    return useContext(LoadingContext);
}

const LoadingManager: FunctionComponent = ({ children }) => {
    const [isLoading, setIsLoading] = useState<TLoadingStatus>("loading");
    const [loadingComponentsCount, notify] = useReducer<number, TLoadingStatus>(reducer, 0);

    useEffect(() => {
        setIsLoading(loadingComponentsCount > 0 ? "loading" : "loaded");
    }, [loadingComponentsCount]);

    return (
        <LoadingContext.Provider value={{status: isLoading, updateStatus: notify}}>
            { children }
        </LoadingContext.Provider>
    );
}

export {
    LoadingManager,
    useLoadingManager
}