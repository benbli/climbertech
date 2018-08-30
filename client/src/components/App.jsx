import React, { Component } from "react";
import NavHead from "./NavHeader/NavHead/NavHead.jsx";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
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
        <a href="" className={styles.skipLink}></a>
        {/* <NavHead /> */}
        
        <Home />

        <Footer />
      </div>
    )
  }
}