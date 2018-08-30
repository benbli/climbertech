import React from "react"
import styles from "./HomeHero.css";

const HomeHero = props => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.brandName}>Climber Tech</h1>
        <div className={styles.description}>
          An app designed for climbers by climbers.
        </div>
      </div>
    </header>
  )
}

export default HomeHero;