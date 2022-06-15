import classes from "./styles.module.css";
import tagClasses from "../PreorderStore/styles.module.css";
import { PreorderStore } from "../PreorderStore";
import storeListJson from "../../texts/storeList.json";
import { useState } from "preact/hooks";
import { FooterSection } from "../FooterSection";
import texts from "../../texts/siteTexts.json";
import { LocationSearch } from "../LocationSearch";

const PreorderSection = () => {
    const storeListFull = storeListJson.storeList;
    const locations = [...new Set(storeListFull.map(store => store.location))];
    const [storeList, setStoreList] = useState(storeListJson.storeList);
    const [locationFilter, setLocationFilter] = useState<string>("");
    const [specialEditionFilter, setSpecialEditionFilter] = useState<boolean>(false);
    const [locationFilterHover, setLocationFilterHover] = useState<boolean>(false);

    const filterLocation = (location: string, isForceReset: boolean = false): void => {
        const isReset = location === locationFilter;
        if(isForceReset) {
            const isSameLocation = location === locationFilter;
            if(isSameLocation) {
                setLocationFilter("");
                if(specialEditionFilter) {
                    setStoreList(storeListFull.filter(store => store.hasSpecialEdition === true));
                } else {
                    setStoreList(storeListFull);
                }
            } else {
                setLocationFilter(location);
                if(specialEditionFilter) {
                    setStoreList(storeListFull.filter(store => (store.hasSpecialEdition === true && store.location === location)));
                } else {
                    setStoreList(storeListFull.filter(store => store.location === location));
                }
            }
        } else if(isReset) {
            setLocationFilter("");
            if(specialEditionFilter) {
                setStoreList(storeListFull.filter(store => store.hasSpecialEdition === true));
            } else {
                setStoreList(storeListFull);
            }
        } else {
            setLocationFilter(location);
            setStoreList(storeList.filter(store => store.location === location));
        }
    }

    const filterEdition = (edition: "normal" | "special"): void => {
        if(edition === "normal") return;
        if(specialEditionFilter) {
            if(locationFilter !== "") {
                setStoreList(storeListFull.filter(store => store.location === locationFilter));
            } else {
                setStoreList(storeListFull);
            }
        } else {
            setStoreList(storeList.filter(store => store.hasSpecialEdition === true));
        }
        setSpecialEditionFilter(!specialEditionFilter);
    }

    return (
        <section className={classes.wrapper}>
            <h1 className={classes.preorder_title}>{texts.preorderSection.title}</h1>
            <h3>{texts.preorderSection.lastUpdatedBase + texts.preorderSection.lastUpdatedDate}</h3>
            <section className={`${classes.selected_tags}`}>
                <h3 className={`${classes.selected_tags_title}`}>{texts.preorderSection.selectedTags}</h3>
                <span className={classes.location_search_container}>
                    <span className={`${tagClasses.tag} ${locationFilter !== "" ? tagClasses.tag_active : ""}`} onMouseEnter={() => setLocationFilterHover(true)} onMouseLeave={() => setLocationFilterHover(false)} onClick={() => filterLocation(locationFilter)}>{locationFilter === "" ? texts.preorderSection.location : locationFilter}</span>
                    <LocationSearch isHover={locationFilterHover} locationFilter={locationFilter} filterLocation={filterLocation} locations={locations} />
                </span>
                <span className={`${tagClasses.tag} ${specialEditionFilter ? tagClasses.tag_active : ""}`} onClick={() => filterEdition("special")}>{texts.preorderStore.specialEdition}</span>
            </section>
            <section className={classes.store_list}>
                { storeList.map(store => {
                    return (
                        <PreorderStore 
                            name={store.name}
                            link={store.link}
                            location={store.location}
                            hasSpecial={store.hasSpecialEdition}
                            locationFilter={locationFilter}
                            editionFilter={specialEditionFilter}
                            filterLocation={filterLocation} 
                            filterEdition={filterEdition} />
                    );
                })}
            </section>
            <FooterSection />
        </section>
    );
}

export {
    PreorderSection
}