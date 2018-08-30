import React, { Component } from "react";
import NavButton from "./NavButton/NavButton";
import NavLogo from "./NavLogo/NavLogo";
import NavList from "./NavList/NavList";
import styles from "./PageHeader.css"


export default class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
  }

  handleNavButtonClick() {
    this.setState({expanded: !this.state.expanded})
  }
  
  render() {
    return (
      <header id="PageHeader" className={styles.pageHeader}>
        <div className={styles.headerContainer}>
          <div id="navigation" className={styles.navigation}>
            <NavButton expanded={this.state.expanded} handleNavButtonClick={this.handleNavButtonClick}/>
            <NavLogo />
            <NavList expanded={this.state.expanded}/>
          </div>
        </div>
      </header>
    )
  }
}
