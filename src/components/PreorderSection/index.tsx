import classes from "./styles.module.css";
import tagClasses from "../PreorderStore/styles.module.css";
import { Countdown } from "../Countdown";
import { QuoteGenerator } from "../QuoteGenerator";
import { PreorderStore } from "../PreorderStore";
import storeListJson from "../../texts/storeList.json";
import { useState } from "preact/hooks";
import { FooterSection } from "../FooterSection";
import texts from "../../texts/siteTexts.json";


const PreorderSection = () => {
    const storeListFull = storeListJson.storeList;
    const [storeList, setStoreList] = useState(storeListJson.storeList);
    const [locationFilter, setLocationFilter] = useState<string>("");
    const [specialEditionFilter, setSpecialEditionFilter] = useState<boolean>(false);

    const filterLocation = (location: string): void => {
        const isReset = location === locationFilter;
        if(isReset) {
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
            <section>
                <span className={`${tagClasses.tag} ${locationFilter === "" ? tagClasses.tag_hidden : ""}`}>{locationFilter}</span>
                <span className={`${tagClasses.tag} ${!specialEditionFilter ? tagClasses.tag_hidden : ""}`}>{texts.preorderStore.specialEdition}</span>
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