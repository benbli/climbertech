import React, { Component } from "react";
import styles from "./NavButton.css";

export default class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let ariaLabel = this.props.expanded ? "Hide navigation" : "Show navigation";
    let navButtonStyle = this.props.expanded ? `${styles.navButton} ${styles.navButtonExpanded}` : `${styles.navButton}`;
    return(
      <button type="button"
        className={navButtonStyle}
        aria-controls="PageNavInterior"
        aria-expanded={this.props.expanded}
        aria-label={ariaLabel}
        onClick={this.props.handleNavButtonClick}>
          <span className={styles.navButtonContainer}>
            <span className={styles.navButtonTopLine}></span>
            <span className={styles.navButtonMidLine}></span>
            <span className={styles.navButtonBottomLine}></span>
          </span>
        </button>
    )
  }
}