import classes from "./styles.module.css";
import tagClasses from "../PreorderStore/styles.module.css";
import { PreorderStore } from "../PreorderStore";
import storeListJson from "../../texts/storeList.json";
import { useState } from "preact/hooks";
import texts from "../../texts/siteTexts.json";
import { LocationSearch } from "../LocationSearch";
import { SubmitStoreForm } from "../SubmitStoreForm";
import { preorderSectionRef } from "../util/ScrollHandler";
import { useInitialize } from "../../util";
import { useSmartphoneCheck } from "../util/SmartphoneCheck";

type TPreorderStore = {
    name: string,
    link: string,
    location: string,
    hasSpecialEdition: boolean
}

const PreorderSection = () => {
    const storeListFull = storeListJson.storeList;
    const locations = [...new Set(storeListFull.map(store => store.location).sort((a, b) => a.localeCompare(b)))];
    const [storeList, setStoreList] = useState(storeListJson.storeList.sort((a, b) => a.location.localeCompare(b.location)));
    const [locationFilter, setLocationFilter] = useState<string>("");
    const [specialEditionFilter, setSpecialEditionFilter] = useState<boolean>(false);
    const [locationFilterHover, setLocationFilterHover] = useState<boolean>(false);
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const isSp = useSmartphoneCheck();

    const filterLocation = (location: string, isForceReset: boolean = false): void => {
        const isReset = location === locationFilter;
        if(isForceReset) {
            const isSameLocation = location === locationFilter;
            if(isSameLocation) {
                setLocationFilter("");
                if(specialEditionFilter) {
                    setStoreList(storeListFull.filter(store => store.hasSpecialEdition === true).sort((a: TPreorderStore, b: TPreorderStore) => a.location.localeCompare(b.location)));
                } else {
                    setStoreList(storeListFull.sort((a: TPreorderStore, b: TPreorderStore) => a.location.localeCompare(b.location)));
                }
            } else {
                setLocationFilter(location);
                if(specialEditionFilter) {
                    setStoreList(storeListFull.filter(store => (store.hasSpecialEdition === true && store.location === location)).sort((a: TPreorderStore, b: TPreorderStore) => a.location.localeCompare(b.location)));
                } else {
                    setStoreList(storeListFull.filter(store => store.location === location).sort((a: TPreorderStore, b: TPreorderStore) => a.location.localeCompare(b.location)));
                }
            }
        } else if(isReset) {
            setLocationFilter("");
            if(specialEditionFilter) {
                setStoreList(storeListFull.filter(store => store.hasSpecialEdition === true).sort((a: TPreorderStore, b: TPreorderStore) => a.location.localeCompare(b.location)));
            } else {
                setStoreList(storeListFull.sort((a: TPreorderStore, b: TPreorderStore) => a.location.localeCompare(b.location)));
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

    const handleLocationClick = (event: MouseEvent) => {
        if(isSp) {
            event.stopPropagation();
            let setHover = !locationFilterHover;
            if(locationFilter !== "") {
                setHover = false;
            }
            setLocationFilterHover(setHover);
        }
        filterLocation(locationFilter);
    }

    const hoverStart = () => {
        if(isSp) {
            return;
        }
        setLocationFilterHover(true);
    }

    const hoverEnd = () => {
        if(isSp) {
            return;
        }
        setLocationFilterHover(false)
    }

    const handleWindowClick = (event: MouseEvent) => {
        if(!isSp) {
            return;
        }
        event.stopPropagation();
        setLocationFilterHover(false);
    }

    const resetStoreList = () => {
        setSpecialEditionFilter(false);
        setLocationFilter("");
        setStoreList(storeListFull);
    }

    return (
        <section ref={preorderSectionRef} className={classes.wrapper} onClick={(e) => handleWindowClick(e)}>
            <h1 className={`${classes.preorder_title} ${classes.width_wrapper}`}>{texts.preorderSection.title}</h1>
            <h3 className={`${classes.last_updated} ${classes.width_wrapper}`}>{texts.preorderSection.lastUpdatedBase + texts.preorderSection.lastUpdatedDate}</h3>
            <section className={`${classes.selected_tags} ${classes.width_wrapper}`}>
                <span>
                <h3 className={`${classes.selected_tags_title}`}>{texts.preorderSection.selectedTags}</h3>
                <span className={classes.location_search_container}>
                    <span className={`${tagClasses.tag} ${locationFilter !== "" ? tagClasses.tag_active : ""}`} onMouseEnter={() => hoverStart()} onMouseLeave={() => hoverEnd()} onClick={(e) => handleLocationClick(e)}>{locationFilter === "" ? texts.preorderSection.location : locationFilter}<span className={tagClasses.close_tag}>x</span></span>
                    <LocationSearch isHover={locationFilterHover} locationFilter={locationFilter} filterLocation={filterLocation} locations={locations} />
                </span>
                <span className={`${tagClasses.tag} ${specialEditionFilter ? tagClasses.tag_active : ""}`} onClick={() => filterEdition("special")}>{texts.preorderStore.specialEdition}<span className={tagClasses.close_tag}>x</span></span>
                </span>
                <span className={`${classes.open_form}`} onClick={() => setIsFormOpen(true)}><h3>{texts.preorderSection.formButton}</h3><span className={classes.open_plus}>+</span></span>
            </section>
            <section className={`${classes.store_list} ${classes.width_wrapper}`}>
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
                { storeList.length < 1 && 
                    <div className={classes.empty_list}>
                        <span className={classes.empty_list_label}>No stores match these tags.</span>
                        <span className={`${tagClasses.tag}`} onClick={() => resetStoreList()}>Reset</span>
                    </div>
                }
            </section>
            <section className={`${classes.submit_store_form} ${isFormOpen ? classes.submit_store_form_open : ""}`}>
                <SubmitStoreForm formContainerClass={`${classes.form_container} ${isFormOpen ? classes.form_container_open : ""}`} onClose={setIsFormOpen} />
            </section>
        </section>
    );
}

export {
    PreorderSection
}