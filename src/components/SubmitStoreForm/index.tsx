import classes from "./styles.module.css";
import texts from "../../texts/siteTexts.json";
import { StateUpdater, useState } from "preact/hooks";
import { createRef, FunctionalComponent, JSX } from "preact";

interface SubmitStoreFormProps {
    onClose: StateUpdater<boolean>
}

const SubmitStoreForm: FunctionalComponent<SubmitStoreFormProps> = ({
    onClose
}) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const formSubmit = createRef<HTMLFormElement>();

    const validateForm = (data: FormData): boolean => {
        let isMissingValues = true;
        for(const pair of data.entries()) {
            if(pair[0] === "message" && pair[1] !== "") {
                return true;
            }
            if(pair[0] === "specialEditionAvailable" || pair[0] === "message") {
                continue;
            }
            if(pair[1] === "") {
                setIsError(true);
                return false
            };
        }
        setIsError(false);
        return true;
    }

    const onSubmit = async (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        if(!validateForm(formData)) {
            return;
        }
        console.log("should call this shit");
        await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(_ => {
            form.reset();
            setIsSuccess(true);
        }).catch(err => {
            console.log(texts.newStoreForm.submitError);
        });
    }

    const bubbleOnClose = (close: boolean) => {
        setIsError(false);
        setIsSuccess(false);
        onClose(close);
    }

    return (
        <>
        <div className={classes.overlay_background} onClick={() => bubbleOnClose(true)} />
        <div className={classes.form_wrapper}> 
            <form ref={formSubmit} className={classes.form_container} action="https://formspree.io/f/xlezvyev" method="POST" onSubmit={async event => await onSubmit(event)} >
                { isSuccess && 
                    <>
                    <span className={classes.title_container}>
                        <h3 className={classes.form_title}>{texts.newStoreForm.submitSuccess_1}<br/>{texts.newStoreForm.submitSuccess_2}</h3>
                        <div className={classes.close_icon} onClick={() => bubbleOnClose(false)} >x</div>
                    </span>
                    <span className={classes.submit_button} onClick={() => setIsSuccess(false)}>{texts.newStoreForm.restart}</span>
                    </>
                }
                { !isSuccess &&
                    <>
                    <span className={classes.title_container}>
                        <h3 className={classes.form_title}>
                            {texts.newStoreForm.title}<br/>
                            {isError &&
                                <span className={classes.error_text}>{texts.newStoreForm.validationError}</span>
                            }
                        </h3>
                        <div className={classes.close_icon} onClick={() => bubbleOnClose(false)} >x</div>
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
                    </>
                }
            </form>
            
        </div>
        </>
    );
}

export {
    SubmitStoreForm
}