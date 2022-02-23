import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import styles from "../styles/Home.module.css";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import flag from "../assets/images/flag.png";
import done from "../assets/lotties/done.json";


export default function SurveyCompleted({ submitSurvey, goBack, showSurveyCompleted, showLoader }) {
  return (
        <section className={styles.section} style={{ display: showSurveyCompleted ? "block" : "none" }}>
          <div className={styles.top_container}>
            <h3 className={styles.survey_title}>Survey Complete!</h3>
            <div className={styles.success_icon}>
              <Image src={flag} className={styles.success_icon_image} styles height={100} width={170} />
            </div>
            <p className={styles.survey_cta_title}>Pass it on?</p>
            <p className={styles.survey_cta_text}>Nominate someone else to take this incentivized survey.</p>
          </div>
            <form onSubmit={submitSurvey}>
              <div className={styles.survey_input_container}>
                <input type="text" defaultValue={"@theChiBoo"} className={styles.survey_input} disabled={showLoader ? true : false }   />
                <div className={styles.survey_input_icons}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="20" style={{ color: "red"}}> <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill={ showLoader ? "#61b3e6" : "#3BA9EE"}/></svg> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 0.56 0.5" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><defs><style>.vendly_black_svg__fil0</style></defs><g id="vendly_black_svg__Layer_x0020_1"><g id="vendly_black_svg___1540609905280"><path className="vendly_black_svg__fil0" d="M.41 0h.07c.03 0 .05.01.07.04.01.02.01.05 0 .08l-.2.35C.34.49.31.51.29.51.26.51.24.5.23.47L.18.38V.36L.36.04C.37.02.4 0 .42 0zM.01.12L.1.28c0 .01.01.01.02.01S.13.29.14.28L.23.12C.24.09.24.06.23.04.22.01.19 0 .16 0H.09C.06 0 .03.01.02.04.01.07.01.1.02.12z" fill={ showLoader ? "#6dd3ca" : "#00d0be"}></path></g></g></svg> 
                </div>
              </div>
              <button className={styles.survey_submit_button} style={{ padding: showLoader ? 0 : "" }}>
                <span style={{ display: showLoader ? "none" : "block" }}>Continue</span>
                <Lottie animationData={done} className={styles.done} loop={true} autoplay={true} style={{ display: showLoader ? "block" : "none" }} />
                <ChevronRightIcon className={styles.survey_submit_icon} style={{ display: showLoader ? "none" : "flex" }} />
              </button>
            </form>
          <button className={styles.survey_back_button} onClick={goBack} >
            <ArrowSmLeftIcon className={styles.survey_back_icon} />
            <span>Go Back</span>
          </button>
        </section>
  )
}
