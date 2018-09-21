import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import PageHeader from "./PageHeader/PageHeader";
import Home from "./Home/Home";
import About from "./About/About";
import Climbers from "./Climbers/Climbers";
import Setters from "./Setters/Setters";
import Gyms from "./Gyms/Gyms";
import Events from "./Events/Events";
import Footer from "./Footer/Footer";
import SVG from "./SVG/SVG";
import styles from "./App.css";

export default class App extends Component {

  render() {
    return(
      <HashRouter>
        <div className={styles.appFrame}>
        {/* href should link to homepage*/}
          <a href="#mainContent" className={styles.skipLink}>Skip to main content</a>
          <PageHeader />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/climbers" component={Climbers} />
            <Route path="/setters" component={Setters} />
            <Route path="/gyms" component={Gyms} />
            <Route path="/events" component={Events} />
          </Switch>

          <Footer />
          <SVG />
        </div>
      </HashRouter>
    )
  }
}