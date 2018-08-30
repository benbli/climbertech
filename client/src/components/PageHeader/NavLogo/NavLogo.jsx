import React from "react";
import styles from "./NavLogo.css"
const path = require('path');

const logoPath = path.join(__dirname, '/img/LogoCT.png');

const NavLogo = props => {
  return (
    <a className={`${styles.logoAnchor} ${styles.logoWrapper}`}
      aria-label="Climber Tech, Back to Home" 
      href="/">
      <img className={styles.logo} src="https://res.cloudinary.com/dqhe5ks7u/image/upload/f_auto,q_auto/v1535671309/ClimberTech/LogoCT.png" alt="Climber Tech"/>
    </a>
  )
}

export default NavLogo;