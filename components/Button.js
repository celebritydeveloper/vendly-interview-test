import React from 'react';
import styles from "../styles/Home.module.css";
import Lottie from "lottie-react";
import done from "../assets/lotties/done.json";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Button ({ showInstruction, className, onClick, disabled, showLoader, text, showArrow }) {
    return (
        <button className={styles.survey_submit_button} disabled={disabled} style={{ padding: showLoader ? 0 : "" }} onClick={ onClick }>
            <span style={{ display: showLoader ? "none" : "block" }}>{ text }</span>
            <Lottie animationData={done} className={styles.done} loop={true} autoplay={true} style={{ display: showLoader ? "block" : "none" }} />
            <ChevronRightIcon className={styles.survey_submit_icon} style={{ display: showArrow ? "flex" : "none" }} />
        </button>
    );
}
