import { createRef } from "preact";

const preorderSectionRef = createRef<HTMLElement>();
const scrollToPreorder = () => {
    if(preorderSectionRef.current) {
        preorderSectionRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }
}

export {
    preorderSectionRef,
    scrollToPreorder
}