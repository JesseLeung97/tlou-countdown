import { createContext, FunctionalComponent } from "preact";
import { useContext, useState } from "preact/hooks";
import { useInitialize } from "../../../util";

const SmartphoneCheckContext = createContext<boolean>(false);

const useSmartphoneCheck = () => {
    return useContext(SmartphoneCheckContext);
}

const SmartphoneCheck: FunctionalComponent = ({ children }) => {
    const _spCheckWidth = 600;
    const [isSmartphone, setIsSmartphone] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth <= _spCheckWidth : false);

    const updateSPCheck = () => {
        if(typeof window !== "undefined") {
            setIsSmartphone(window.innerWidth <= _spCheckWidth);
        }
    }

    useInitialize(() => {
        if(typeof window !== "undefined") {
            window.addEventListener("resize", updateSPCheck);
        }
        return () => {
            if(typeof window !== undefined) {
                window.removeEventListener("resize", updateSPCheck);
            }
        }
    });

    return (
        <SmartphoneCheckContext.Provider value={isSmartphone} >
            { children }
        </SmartphoneCheckContext.Provider>
    );
}

export {
    SmartphoneCheck,
    useSmartphoneCheck
}