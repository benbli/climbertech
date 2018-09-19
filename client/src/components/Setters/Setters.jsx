import React, { Component } from "react";
import styles from "./Setters.css"

export default class Setters extends Component {
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
                Setters Features Coming Soon
              </h2>
            </div>
          </section>
        </div>
      </main>
    )
  }
}