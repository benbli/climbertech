import React from "react";
import styles from "./Footer.css";

const Footer = props => {
  return(
    <footer className={styles.footer}>
    {/* add fContainerBreakPoints later */}
      <div className={`${styles.fContainer} ${styles.fContainerBreakPoints}`}> 
      {/* contacts */}
        <p className={styles.contactContainer}>
          <a href="/" 
            data-event-label="Home"
            data-event-category="Footer Link">
            Home
          </a>

          <a href="mailto:climbertechllc@gmail"
            data-event-label="Contact"
            data-event-category="Footer Link">
            Contact
          </a>

          <a href="mailto:climbertechllc@gmail"
            data-event-label="Feed Back"
            data-event-category="Footer Link">
            Feedback
          </a>
        </p>
      {/* social icons */}
        <ul className={styles.socialContainer}>
          <li>
            <a href="http://www.instagram.com/explore"
              title="Climber Tech on Instagram"
              aria-label="Climber Tech on Instagram"
              data-event-label="Instagram"
              data-event-category="Footer Link">
              <div className={`${styles.iconContainer} ${styles.iconContainerBorder}`}>
                <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                {/* svg goes here */}
                  <svg className={styles.svgLogos}
                    viewBox="0 0 20 20"
                    preserveAspectRatio="xMidYMid"
                    focusable="false"
                    aria-hidden="true">
                    <use xlinkHref="#SVGLogoInstagram">
                    </use>
                  </svg>
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/"
              title="Climber Tech on Twitter"
              aria-label="Climber Tech on Twitter"
              data-event-label="Twitter"
              data-event-category="Footer Link">
              <div className={`${styles.iconContainer} ${styles.iconContainerBorder}`}>
                <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                  {/* svg goes here */}
                  <svg className={styles.svgLogos}
                    viewBox="0 0 20 20"
                    preserveAspectRatio="xMidYMid"
                    focusable="false"
                    aria-hidden="true">
                    <use xlinkHref="#SVGLogoTwitter">
                    </use>
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/"
              title="Climber Tech on Facebook"
              aria-label="Climber Tech on Facebook"
              data-event-label="Facebook"
              data-event-category="Footer Link">
              <div className={`${styles.iconContainer} ${styles.iconContainerBorder}`}>
                {/* <span className={`${styles.iconHolder} ${styles.svgWrapper}`}> */}
                <span className={`${styles.fbIconHolder} ${styles.fbSvgWrapper}`}>
                  {/* svg goes here */}
                  <svg className={styles.svgLogos}
                    viewBox="0 0 20 20"
                    preserveAspectRatio="xMidYMid"
                    focusable="false"
                    aria-hidden="true">
                    <use xlinkHref="#SVGLogoFacebook">
                    </use>
                  </svg>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;

