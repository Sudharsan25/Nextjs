"use client";

import { useFormStatus } from "react-dom";
import styles from "./form-submit.module.css";

export default function FormSubmit() {
    const status = useFormStatus();

    return (
        <>
            <button type="reset" className={styles.button}>Reset</button>
            <button className={styles.button} disabled={status.pending}>
                {status.pending ? <span className={styles.loader}></span> : "Create Post"}
            </button>
        </>
    );
}
