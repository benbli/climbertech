import React from "react";
import NavMenu from "../NavMenu/NavMenu.jsx";
import Logo2 from "../Logo/Logo2.jsx";
import styles from "./NavHead.css";

const NavHead = props => {
  return(
    <div>
      <div className={styles.promoBanner}>
        <p>coming to a device near you</p>
      </div>

      <div className={styles.headerContainer}>
        <Logo2 />
        <NavMenu />
      </div>
    </div>
  )
}

export default NavHead;