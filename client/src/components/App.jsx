import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHeader from "./PageHeader/PageHeader";
import Home from "./Home/Home";
import Climbers from "./Climbers/Climbers";
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
      <BrowserRouter>
        <div className={styles.appFrame}>
        {/* href should link to homepage*/}
          <a href="#mainContent" className={styles.skipLink}>Skip to main content</a>
          <PageHeader />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/climbers" component={Climbers} />
          </Switch>

          <Footer />
          <SVG />
        </div>
      </BrowserRouter>
    )
  }
}