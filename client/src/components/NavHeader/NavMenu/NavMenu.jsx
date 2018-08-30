import React from "react";
import styles from "./NavMenu.css";

const NavMenu = props => {
  
  return(
    <div>
      <nav role="navigation">
        <ul className={styles.menu}>
          <li><a href="router endpoint" className="sub-menu">Mission</a></li>
          <li><a href="router endpoint" className="sub-menu">Product</a></li>
          <li><a href="router endpoint" className="sub-menu">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMenu;