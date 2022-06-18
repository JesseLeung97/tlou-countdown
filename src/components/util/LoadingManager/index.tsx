import { createContext, FunctionComponent } from "preact";
import { useState, useEffect, useContext, useReducer } from "preact/hooks";

type TLoadingStatus = "loading" | "loaded";

type TLoadingContext = {
    status: TLoadingStatus;
    updateStatus: (status: TLoadingStatus) => void;
}

type TSimpleLoadingContext = {
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

const SimpleLoadingContext = createContext<TSimpleLoadingContext>(
    {} as TSimpleLoadingContext
);

const useLoadingManager = (): TLoadingContext => {
    return useContext(LoadingContext);
}

const useSimpleLoadingManager = (): TSimpleLoadingContext => {
    return useContext(SimpleLoadingContext);
}

const LoadingManager: FunctionComponent = ({ children }) => {
    const [isLoading, setIsLoading] = useState<TLoadingStatus>("loading");
    const [loadingComponentsCount, notify] = useReducer<number, TLoadingStatus>(reducer, 0);

    const [isSimpleLoading, setIsSimpleLoading] = useState<TLoadingStatus>("loaded");
    const [simpleLoadingComponentsCount, notifySimple] = useReducer<number, TLoadingStatus>(reducer, 0);

    useEffect(() => {
        setIsLoading(loadingComponentsCount > 0 ? "loading" : "loaded");
    }, [loadingComponentsCount]);

    useEffect(() => {
        setIsSimpleLoading(simpleLoadingComponentsCount > 0 ? "loading" : "loaded");
    }, [simpleLoadingComponentsCount]);

    return (
        <LoadingContext.Provider value={{status: isLoading, updateStatus: notify}}>
            <SimpleLoadingContext.Provider value={{status: isSimpleLoading, updateStatus: notifySimple}}>
                { children }
            </SimpleLoadingContext.Provider>
        </LoadingContext.Provider>
    );
}

export {
    LoadingManager,
    useLoadingManager,
    useSimpleLoadingManager
}