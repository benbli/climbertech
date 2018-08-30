import React from "react";
import styles from "./HomeAboutPreviews.css";

const HomeAboutPreviews = props => {
  return(
    <div className={styles.container}>
      <ul className={styles.previewList}>
        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(227,241,223)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                Icon
              </span>
            </div>
          </div>

          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Climbers
            </h4>
          </div>
          <p className={styles.summary}>
            Summary of how this app serves climbers...
          </p>
          <a className={styles.redirect} href="router endpoint">Find out more</a>
        </li>

        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(235,245,250)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                Icon
              </span>
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Setters
            </h4>
          </div>
          <p className={styles.summary}>
            Summary of how this app serves setters...
          </p>
          <a className={styles.redirect} href="router endpoint">Find out more</a>
        </li>

        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(246,240,253)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                Icon
              </span>
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Gyms
            </h4>
          </div>
          <p className={styles.summary}>
            Summary of how this app serves Climbing Gyms...
          </p>
          <a className={styles.redirect} href="router endpoint">Find out more</a>
        </li>

        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(252,241,205)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                Icon
              </span>
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Climbing Events
            </h4>
          </div>
          <p className={styles.summary}>
            Summary of how this app serves Climbing Events...
          </p>
          <a className={styles.redirect} href="router endpoint">Find out more</a>
        </li>

      </ul>
    </div>
  )
}

export default HomeAboutPreviews;