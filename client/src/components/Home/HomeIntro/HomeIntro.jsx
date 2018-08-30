import React from 'react';
import styles from './HomeIntro.css'

const HomeIntro = props => {
  return (
    <div className={styles.intro}>
      <div className={styles.subtitle}>
        <h3>App designed for</h3>
      </div>

      <div className={styles.faders}>
        <div className={styles.fader1}>
          <h2>Climbers</h2>
        </div>
        <div className={styles.fader2}>
          <h2>Setters</h2>
        </div>
        <div className={styles.fader3}>
          <h2>Gyms</h2>
        </div>
      </div>

      <div className={styles.subtitle}>
        <h3>by climbers</h3>
      </div>
    </div>
  )
}

export default HomeIntro;