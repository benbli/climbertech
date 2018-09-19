import React, { Component } from "react";
import styles from "./Climbers.css"

export default class Climbers extends Component {
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
            <div>Coming Soon</div>
          </section>
        </div>
      </main>
    )
  }
}