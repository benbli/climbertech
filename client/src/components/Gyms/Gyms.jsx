import React, { Component } from "react";
import styles from "./Gyms.css"

export default class Gyms extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <main id="mainContent" className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <section className={`${styles.componentsSection} ${styles.componentsSectionDesktop}`}>
            <div className={styles.tempContainer}>
              <h2 className={styles.tempText}>
                Gyms Features Coming Soon
              </h2>
            </div>
          </section>
        </div>
      </main>
    )
  }
}