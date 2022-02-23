import React from "react";
import Lottie from "lottie-react";
import styles from "../styles/Home.module.css";
import heart from "../assets/lotties/heart.json";


export default function ValidateModal({ show }) {
  return (
        <section className={styles.section} style={{ display: show ? "block" : "none"}}>
          <div className={styles.top_container}>
            <div className={styles.validate_success_icon}>
                <Lottie animationData={heart} className={styles.validate_done} loop={true} autoplay={true} />
            </div>
            <p className={styles.validate_amount}><span className={styles.validate_amount_sign}>₦</span>2,000. <span className={styles.validate_amount_trail}>00</span></p>
            <p className={styles.validate_title}>Please wait.</p>
            <p className={styles.validate_text}>Validating user credentials...</p>
          </div>
            
            <div className={styles.validate_loading}>
                <span className={styles.validate_loading_dots}></span>
                <span className={styles.validate_loading_dots}></span>
                <span className={styles.validate_loading_dots}></span>
            </div>
        </section>
  )
}
