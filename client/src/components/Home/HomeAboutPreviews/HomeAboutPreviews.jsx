import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeAboutPreviews.css";

const HomeAboutPreviews = props => {
  return(
    <div className={styles.container}>
      <ul className={styles.previewList}>
        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(172, 236,234)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                <img src="https://png.icons8.com/ios/50/000000/climbing.png" alt="Climber"></img>
              </span>
            </div>
          </div>

          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Climbers
            </h4>
          </div>
          <p className={styles.summary}>
            Learn how Climber Tech transforms your climbing experience.
          </p>
          <Link to='/climbers' className={styles.redirect}>View Climber Features</Link>
        </li>

        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(71, 237, 211)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                <img src="https://png.icons8.com/ios/50/000000/waypoint-map.png" alt="Setter"></img>
              </span>
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Setters
            </h4>
          </div>
          <p className={styles.summary}>
            Find out how we generate portfolios for setters and expand their audience.
          </p>
          <Link to='/setters' className={styles.redirect}>View Setter Features</Link>
        </li>

        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(56, 188, 196)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                <img src="https://png.icons8.com/ios/50/000000/garage-closed.png" alt="Gym"></img>
              </span>
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Gyms
            </h4>
          </div>
          <p className={styles.summary}>
            Use Climber Tech for detailed route rotation schedule and host events.
          </p>
          <Link to='/gyms' className={styles.redirect}>View Gyms Features</Link>
        </li>

        <li className={styles.previewItem}>
          <div className={styles.iconContainer}>
            <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: "rgb(44, 116, 152)"}}>
              <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                <img src="https://png.icons8.com/ios/50/000000/calendar.png" alt="Events"></img>
              </span>
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Climbing Events
            </h4>
          </div>
          <p className={styles.summary}>
            See how Climber Tech and provide live score tracking and eliminate paper waste.
          </p>
          <Link to='/climbingevents' className={styles.redirect}>View Event Features</Link>
        </li>

      </ul>
    </div>
  )
}

export default HomeAboutPreviews;