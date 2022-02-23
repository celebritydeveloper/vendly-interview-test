import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import styles from "../styles/Home.module.css";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import flag from "../assets/images/flag.png";
import done from "../assets/lotties/done.json";


export default function Survey() {
  return (
        <section className={styles.section} >
          <div className={styles.top_container}>
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
                        <span>Three</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_inpu} />
                        <span>Three</span>
                    </div>

                    <div className={styles.survey_input_options}>
                        <input type="checkbox" className={styles.survey_inpu} />
                        <span>Three</span>
                    </div>
                </div>
              <button className={styles.survey_submit_button} disabled={true} >
                <span >Continue</span>
                <ChevronRightIcon className={styles.survey_submit_icon} />
              </button>
            </form>
            <button className={styles.survey_instruction} >
                <span>Read</span>
                <span>Instructions</span>
            </button>
        </section>
  )
}
