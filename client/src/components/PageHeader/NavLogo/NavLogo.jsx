import React from "react";
import styles from "./NavLogo.css"

const NavLogo = props => {
  return (
    <a className={`${styles.logoAnchor} ${styles.logoWrapper}`}
      aria-label="Climber Tech, Back to Home" 
      href="/">
      <img className={styles.logo} src="/Users/Yadleo/Desktop/CT2/climbertech/img/LogoCT.png" alt="Climber Tech"/>
    </a>
  )
}

export default NavLogo;