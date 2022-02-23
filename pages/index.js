import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ValidateModal from "../components/ValidateModal";
import SurveyCompleted from "../components/SurveyCompleted";
import Survey from "../components/Survey";


export default function Home() {

  const [ showLoader, setShowLoader ] = useState(false);
  const [ showSurvey, setShowSurvey ] = useState(true);
  const [ showValidate, setShowValidate ] = useState(false);

  const submitSurvey = (e) => {
    e.preventDefault();
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    setTimeout(() => {
      setShowSurvey(false);
      setShowValidate(true);
    }, 2800);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Vendly | Survey</title>
        <meta name="description" content="Vendly.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 0.56 0.5" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><defs><style>.vendly_black_svg__fil0</style></defs><g id="vendly_black_svg__Layer_x0020_1"><g id="vendly_black_svg___1540609905280"><path class="vendly_black_svg__fil0" d="M.41 0h.07c.03 0 .05.01.07.04.01.02.01.05 0 .08l-.2.35C.34.49.31.51.29.51.26.51.24.5.23.47L.18.38V.36L.36.04C.37.02.4 0 .42 0zM.01.12L.1.28c0 .01.01.01.02.01S.13.29.14.28L.23.12C.24.09.24.06.23.04.22.01.19 0 .16 0H.09C.06 0 .03.01.02.04.01.07.01.1.02.12z"></path></g></g></svg>
      </nav>

      <main className={styles.main}>
        {/* <ValidateModal show={showValidate} />
        <SurveyCompleted submitSurvey={submitSurvey} showSurvey={showSurvey} showLoader={showLoader} /> */}
        <Survey />
      </main>

    </div>
  )
}
