import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavList.css";

export default class NavList extends Component {
  constructor(props) {
    super(props),
    this.state = {
      navListEntries: ['about', 'climbers', 'setters', 'gyms', 'events']
    }
  }

  render() {
    let navListStyle = this.props.expanded ? `${styles.navList} ${styles.navListShown}` : `${styles.navList}`;

    return(
      <nav id="PageNavInterior"
        className={navListStyle}
        aria-hidden={!this.props.expanded}
        aria-label="Primary navigation">
        <ul className={styles.navListContainer}>
          {this.state.navListEntries.map((entry, i) => <li key={i} className={styles.navListEntry}><Link to={`/${entry}`} className={styles.navListEntryAnchor}>{entry}</Link></li>)}
        </ul>
      </nav>
    )
  }
}

//conditional setting of style from parent level linking button click