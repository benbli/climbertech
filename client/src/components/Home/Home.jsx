import React, { Component } from "react";
import styles from "./Home.css"
import HomeHero from "./HomeHero/HomeHero";
import HomeAboutPreviews from "./HomeAboutPreviews/HomeAboutPreviews";

export default class Home extends Component {
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
            <HomeHero />
            {/* <HomeIntro /> */}
            <HomeAboutPreviews />
          </section>
        </div>
      </main>
    )
  }
}