import classes from "./styles.module.css";
import texts from "../../texts/siteTexts.json";
import { FunctionComponent } from "preact";

interface TPreorderStoreProps {
    name: string;
    location: string;
    hasSpecial: boolean;
    link: string;
    locationFilter: string,
    editionFilter: boolean,
    filterLocation: (location: string) => void,
    filterEdition: (edition: "normal" | "special") => void
}

const PreorderStore: FunctionComponent<TPreorderStoreProps> = ({
    name,
    location,
    hasSpecial,
    link,
    locationFilter,
    editionFilter,
    filterLocation,
    filterEdition
}) => {
    return (
        <div className={classes.store_container}>
            <h3 className={classes.store_name}><a href={link} target="_blank">{name}</a></h3>
            <span className={`${classes.tag} ${locationFilter === location ? classes.tag_active : ""}`} onClick={() => filterLocation(location)}>{location}</span>
            <span className={classes.tag} onClick={() => filterEdition("normal")}>{texts.preorderStore.normalEdition}</span>
            { hasSpecial &&
                <span className={`${classes.tag} ${editionFilter ? classes.tag_active : ""}`} onClick={() => filterEdition("special")}>{texts.preorderStore.specialEdition}</span>     
            }
        </div>
    );
}

export {
    PreorderStore
}