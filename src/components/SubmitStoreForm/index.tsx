import classes from "./styles.module.css";
import texts from "../../texts/siteTexts.json";

const SubmitStoreForm = () => {

    

    return (
        <section className={classes.form_wrapper}>
            <form className={classes.form_container} action="https://formspree.io/f/xlezvyev" method="POST">
                <span className={classes.title_container}>
                    <h3 className={classes.form_title}>{texts.newStoreForm.title}</h3>
                    <div className={classes.close_icon}>x</div>
                </span>
                <label for="form_store_name">
                    <span className={classes.label}>{texts.newStoreForm.storeNamePrompt}</span>
                    <input type="text" id="form_store_name" placeholder={texts.newStoreForm.storeNamePlaceholder} name="storeName" />
                </label>
                <label for="form_store_location">
                    <span className={classes.label}>{texts.newStoreForm.storeLocationPrompt}</span>
                    <input type="text" id="form_store_location" placeholder={texts.newStoreForm.storeLocationPlaceholder} name="storeCountry" />
                </label>
                <label for="form_store_link">
                    <span className={classes.label}>{texts.newStoreForm.storeLinkPrompt}</span>
                    <input type="text" id="form_store_link" placeholder={texts.newStoreForm.storeLinkPlaceholder}  name="storeLink" />
                </label>
                <label for="form_store_editions">
                    <span className={classes.label}>{texts.newStoreForm.storeEditionPrompt}</span>
                    <span className={classes.radio_button_group}>
                        <input type="radio" id="form_store_editions_yes" value={"available"} name="specialEditionAvailable" />
                        <label for="form_store_editions_yes" className={classes.radio_button_elem}>{texts.newStoreForm.available}</label>
                        <input type="radio" id="form_store_editions_no" value={"unavailable"} name="specialEditionAvailable" checked={true}/>
                        <label for="form_store_editions_no" className={classes.radio_button_elem}>{texts.newStoreForm.unavailable}</label>
                    </span>
                </label>
                <label for="extra_remarks">
                    <span className={classes.label}>{texts.newStoreForm.otherPrompt}</span>
                    <textarea id="extra_remarks" className={classes.other_remarks_container} name="message"></textarea>
                </label>
                <span className={classes.thank_you_container}>
                    <span className={classes.thank_you}>{texts.newStoreForm.thankYou}</span>
                    <button type="submit" className={classes.submit_button}>{texts.newStoreForm.submit}</button>
                </span>
            </form>
        </section>
    );
}

export {
    SubmitStoreForm
}