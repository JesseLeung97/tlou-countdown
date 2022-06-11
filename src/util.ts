import { useEffect } from "preact/hooks";

const useInitialize = (initializeFunction: () => any) => useEffect(initializeFunction, []);

export {
    useInitialize
}