import { createRef, FunctionalComponent } from "preact";
import { useInitialize } from "../../../util";

const ScrollHandler: FunctionalComponent = ({
    children
}) => {
    const scrollSection = createRef<HTMLElement>();

    const handleScroll = () => {
        const element = scrollSection.current;
        if(element !== null && element !== undefined) {
            if(element.scrollTop > (100 + element.clientHeight)) {
                element.classList.remove("scroll_container_snap");
            } else {
                element.classList.add("scroll_container_snap");
            }
        }
    }

    return (
        <section onScroll={() => handleScroll()} ref={scrollSection} id="scroll_container" className={"scroll_container_snap"}>
            {children}
        </section>
    );
}

export {
    ScrollHandler
}





