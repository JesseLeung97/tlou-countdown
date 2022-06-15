import classes from "./styles.module.css";
import tagClasses from "../PreorderStore/styles.module.css";
import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

interface LocationSearchProps {
    isHover: boolean,
    locationFilter: string,
    filterLocation: (location: string, isForceReset: boolean) => void,
    locations: string[]
}

const LocationSearch: FunctionalComponent<LocationSearchProps> = ({
    isHover,
    locationFilter,
    filterLocation,
    locations
}) => {
    const [isListHover, setIsListHover] = useState<boolean>(false);

    const handleClick = (location: string): void => {
        setIsListHover(false);
        filterLocation(location, true);
    }

    return (
        <div className={`${classes.search_items_container} ${(isHover || isListHover) ? classes.search_items_visible : ""}`} onMouseEnter={() => setIsListHover(true)} onMouseLeave={() => setIsListHover(false)}>
            <ul className={classes.list_container}>
                { locations.map(location => {
                    return (
                        <li onClick={() => handleClick(location)} className={`${classes.search_item} ${locationFilter === location ? classes.search_item_active : ""}`}>{location}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export {
    LocationSearch
}