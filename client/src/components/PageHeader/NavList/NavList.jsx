import React, { Component } from "react";
import styles from "./NavList.css";

export default class NavList extends Component {
  constructor(props) {
    super(props),
    this.state = {
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
          <li className={styles.navListEntry}>
            <a href="" className={styles.navListEntryAnchor}>about</a>
          </li>

          <li className={styles.navListEntry}>
            <a href="" className={styles.navListEntryAnchor}>climbers</a>
          </li>

          <li className={styles.navListEntry}>
            <a href="" className={styles.navListEntryAnchor}>setters</a>
          </li>

          <li className={styles.navListEntry}>
            <a href="" className={styles.navListEntryAnchor}>gyms</a>
          </li>

          <li className={styles.navListEntry}>
            <a href="" className={styles.navListEntryAnchor}>events</a>
          </li>
        </ul>
      </nav>
    )
  }
}

//conditional setting of style from parent level linking button click