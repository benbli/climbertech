import React, { Component } from "react";
import PageHeader from "./PageHeader/PageHeader";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import SVG from "./SVG/SVG";
import styles from "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className={styles.appFrame}>
      {/* href should link to homepage*/}
        <a href="#mainContent" className={styles.skipLink}>Skip to main content</a>

        <PageHeader />

        <Home />

        <Footer />

        <SVG />
      </div>
    )
  }
}