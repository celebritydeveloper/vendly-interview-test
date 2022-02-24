import React from "react";
import styles from "../styles/Home.module.css";
import Button from "./Button";


export default function Survey({ showSurvey, openInstruction }) {
  return (
        <section className= {styles.survey } style={{ display: showSurvey ? "block" : "none" }}>
          <div className={styles.top_container}>
            <div className={styles.survey_indicators}>
                <span className={styles.survey_indicator, styles.survey_indicator_done}></span>
                <span className={styles.survey_indicator, styles.survey_indicator_active}></span>
                <span className={styles.survey_indicator, styles.survey_indicator_inactive}></span>
                <span className={styles.survey_indicator, styles.survey_indicator_inactive}></span>
            </div>
            <h3 className={styles.survey_title}>Survey</h3>
          </div>
            <form>
                <div className={styles.survey_item}>
                    <span className={styles.survey_number}>2.</span>
                    <span className={styles.survey_question}>How many chapters does The Arc of the possible have?</span>
                </div>

                <div className={styles.survey_form}>
                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_input_option} />
                        <span>One</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_input_option} />
                        <span>Seven</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_input_option} />
                        <span>Twenty</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_inpu} />
                        <span>Three</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_inpu} />
                        <span>Four</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_inpu} />
                        <span>Eight</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_inpu} />
                        <span>Two</span>
                    </div>
                </div>
              <div className={styles.survey_button_container}>
                 <Button disabled={true} text="Continue" showArrow={true} />
              </div>
            </form>
            <button className={styles.survey_instruction} onClick={ openInstruction } >
                <span>Read</span>
                <span>Instructions</span>
            </button>
        </section>
  )
}
